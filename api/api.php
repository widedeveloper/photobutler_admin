<?php

/**
 * PhotoButler V2 Photo Wall API Client
 * Date: Jan 12, 2018
 */

set_time_limit(0);

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Load configs
require_once( __DIR__ . '/config/config.php');

$folders = scandir('../config');
foreach ( $folders as $key => $folder ) {
    if ( is_numeric($folder) == false ) {
        unset($folders[$key]);
    }
}

$photo_streams = $folders;

class API 
{
    private $url;
    private $image_url;
    private $stream_id;
    
    /**
     * Class constructor.
     */
    public function __construct($photo_streams) {
        
        // Set variables
        $this->url           = _URL;
        $this->image_url     = _IMAGE_URL;
        $this->userid        = _USERID;
        $this->pbid          = _PBID;
        $this->pbtoken       = _PBTOKEN;
        $this->hard_limit    = _HARD_LIMIT;
		$this->auth_url =  _AUTH_URL;
        
        $this->photo_streams = $photo_streams;
        
        // Precautions
        $this->checkSecurity();
        $this->checkCurl();
        // Run the API
        $this->runAPI();

    }
    
    /**
     * Check for security args.
     */
    private function checkSecurity() {
		
        // Run manually
        if ( isset($_GET['run']) && $_GET['run'] == 'pbphotowall2017' ) { // Check for Browser
            return;
        } else if ( isset($argv[1]) && $argv[1] == 'pbphotowall2017' ) { // Check for CLI
            return;
        }
        
        die("You do not have access to run this file");
    }
    
    /**
     * Check for Curl Installation.
     */
    private function checkCurl() {
		
        if ( !in_array('curl', get_loaded_extensions()) ) {
            die("CURL is not available on your web server");
        } 
    }
    
    /**
     * Run the API.
     */
    private function runAPI() {
        
        // Foreach photostream
        foreach ( $this->photo_streams as $photo_stream ) {
		echo $photo_stream;
            // Check to make sure the photostream is right
            if ( intval($photo_stream) == false ) {
                continue;
            }
            
            // set the stream ID
            $this->stream_id = $photo_stream;
            
            try {
                // Pull photostream data from API endpoint
				
				
				$result = $this->authRequest();
				var_dump($result."ddddddddddddddddddddd<br>");
				
                $response = $this->sendRequest();
                
                print_r($response);
                
                //$type = $this->type;
                
                if ( !empty($response['highlights']) ) {
                
                    // Set images
                    $images = $response['highlights'];
                    
                    

                    // Write the images list JSON to the JSON File
                    $this->writeToFile($this->generateContent($images));
                    
                    // Store the images
                    $this->storeImages($images);
                    
                } else if ( !empty($response['photos']) ) {
                    $images = $response['photos'];
                    
                    // Write the images list JSON to the JSON File
                    $this->writeToFile($this->generateContent($images));
                    
                    // Store the images
                    $this->storeImages($images);
                }
                

            }
            catch ( Exception $e ) {
                echo $e->getMessage();
            }            
        } 
    }
    
    /**
     * Generate content for the JSON.
     */
    private function generateContent($images) {

        $i = 1;
        $line = '[';
        foreach ( $images as $image ) {
            if ( $i == $this->hard_limit ) break;
            $line .= '"/streams/pictures/' . $this->stream_id . '/' . $image['originalFileName'] . '"';
            if ( $i != ($this->hard_limit - 1) && $i != ( count($images) ) ) $line .= ',';

            $i++;
        }
        $line .= ']';
        
        return $line;
    }
    
    /**
     * Write the content to the JSON file.
     */
    private function writeToFile($line) {
        $path = $_SERVER['DOCUMENT_ROOT'] . '/streams/json/' . $this->stream_id;
        
        // Create the folder if it does not exist
        if ( !is_dir($path) ) {
            mkdir($path, 0777, true);        
        }
        
        $path .= '/';

        $file = $path . "images.json";
        
        // Create JSON file if it does not exist
        $json_file = fopen( $file, "w" ) or die( "Missing {$file} file") ;
        fwrite( $json_file, $line );
        fclose( $json_file );
        chmod( $file, 0777 );
    }
    
    /**
     * Send Curl Request
     * Endpoint: /GetPSPhotos_v2/
     * Type: POST
     * Headers:['Accept: application/json', 'Content-Type: application/json', 'userId: {userId}', 'pBId: {pBId}', 'pBToken: {pBToken}']
     * Body: {"psId": {psId}}
     */
	 
	private function authRequest() {
		
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_HTTPHEADER, 
            array(
                "Cache-Control: no-cache",
                "Content-Type: application/json",
				"userId: {$this->userid}",
                "pbtoken: {$this->pbtoken}",
                "pbId: {$this->pbid}",			
            )
        );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        // curl_setopt($ch, CURLOPT_HEADER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, '{"psId": ' . $this->stream_id .',"userId": ' . $this->userid . ',"regcode":zsb8pt}' ); // JSON
        curl_setopt($ch, CURLOPT_URL, $this->auth_url);
        curl_setopt($ch, CURLOPT_VERBOSE, true);  
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);

        $response = curl_exec($ch);
        $response = json_decode($response, true);
        // echo "<pre>";
        // print_r( $response );
        // echo "</pre>";
		// echo curl_error($ch);
	}
    private function sendRequest() {

        $ch = curl_init();
        
        //echo "UserID: " . $this->userid . "<br>";
        //echo "PBID: " . $this->pbid . "<br>";
        //echo "PBToken: " . $this->pbtoken . "<br>";
        //echo "URL: " . $this->url . "<br>";
        //echo "Stream ID: " . $this->stream_id . "<br>";

        curl_setopt($ch, CURLOPT_HTTPHEADER, 
            array(
                "Cache-Control: no-cache",
                "Content-Type: application/json",
                "userId: {$this->userid}",
                "pbtoken: {$this->pbtoken}",
                "pbId: {$this->pbid}", 
		
            )
        );
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        //curl_setopt($ch, CURLOPT_HEADER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, '{"psId": ' . $this->stream_id . ',"rowsPerPage":999999999,"pageNumber":1,"rowsPerPageHighlights":999999999,"pageNumberHighlights":0}' ); // JSON
        curl_setopt($ch, CURLOPT_URL, $this->url);
        curl_setopt($ch, CURLOPT_VERBOSE, true);  
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);

        $response = curl_exec($ch);
        $response = json_decode($response, true);
        
        // echo "<pre>";
        // print_r( $response );
        // echo "</pre>";

        
        //echo curl_error($ch);
        
        return $response;
    }


    /**
     * Pull Images from API and store them locally.
     */
    private function storeImages($images) {
        $path = $_SERVER['DOCUMENT_ROOT'] . '/streams/pictures/' . $this->stream_id;
        
        // Create the folder if it does not exist
        if ( !is_dir($path) ) {
            mkdir($path, 0777);        
        }
        
        $path .= '/';

        $count = 1;

        foreach ( $images as $image ) {
            
            try{

            // Reached limit
            if ( $count == $this->hard_limit ) break;

            $fullpath = $path . $image['originalFileName'];

            if ( file_exists($fullpath) ) { // if the image is already here, skip the API call
                continue;
            }

            /**
             * Send Curl Request
             * Endpoint: /GetPSPhoto/
             * Type: GET
             * Headers:['Content-Type: multipart/form-data', 'pBId: {pBId}', 'pBToken: {pBToken}', 'userId: {userId}']
             * $_GET Params: ?psId={psId}&assetId={assetId}
             */
            $curl = curl_init();

            curl_setopt_array($curl, array(
              CURLOPT_URL            => $this->image_url . "?psId=" . $this->stream_id . "&assetId=" . $image['assetId'],
              CURLOPT_RETURNTRANSFER => true,
              CURLOPT_ENCODING       => "",
              CURLOPT_MAXREDIRS      => 10,
              CURLOPT_TIMEOUT        => 30,
              CURLOPT_HTTP_VERSION   => CURL_HTTP_VERSION_1_1,
              CURLOPT_CUSTOMREQUEST  => "GET",
              CURLOPT_HTTPHEADER     => array(
                                            "Cache-Control: no-cache",
                                            "Content-Type: multipart/form-data",
                                            "userId: {$this->userid}",
                                            "pbtoken: {$this->pbtoken}",
                                            "pbId: {$this->pbid}"
                                        ),
            ));

            // Store the actual image
            $rawdata  = curl_exec($curl);
            
            $fullpath = $path . $image['originalFileName'];
            
            $fp = fopen($fullpath,'x');
            fwrite($fp, $rawdata);
            fclose($fp); 

            curl_close($curl);   

            $count++;
        }
            
            catch(Exception $e) {
                echo $e->getMessage();
            }
            
        }

    }
        
}

$api = new API($photo_streams);