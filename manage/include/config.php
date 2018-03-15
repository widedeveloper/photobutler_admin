

<?php
define('ADMIN','admin');
define('PASSWORD','photobutler_2018!');
define('PATH','/var/www/html/config');
define('UPLOADPATH','/var/www/html/uploads');

// define('PATH','G:\MY_WORK\2017-2018_ROB_TASK\2018-01-6 vue.js(slideshow)\Work\vuejs_photoslides\dist\config');
// define('UPLOADPATH','G:\MY_WORK\2017-2018_ROB_TASK\2018-01-6 vue.js(slideshow)\Work\vuejs_photoslides\dist\uploads');


// Load configs
require_once( __DIR__ . '../../../api/config/config.php');

Class Admin {
	
	public function __construct() {
		 // Set variables	
		 $this->userid        = _USERID;
		 $this->pbid          = _PBID;
		 $this->pbtoken       = _PBTOKEN;
		 $this->hard_limit    = _HARD_LIMIT;
		 $this->auth_url =  _AUTH_URL;
	}
	
	public function admin_login($username, $password) {
		if ($username == ADMIN && $password == PASSWORD){
			$_SESSION['loggedin'] = true;
		    $_SESSION['username'] = $username;
		    $_SESSION['memberID'] = $password;
		    return true;
		}
	}

	public function logout(){
		session_destroy();
	}

	public static function delTree($dir) { 
		$files = array_diff(scandir($dir), array('.','..')); 
		foreach ($files as $file) { 
			(is_dir("$dir/$file")) ? delTree("$dir/$file") : unlink("$dir/$file"); 
		} 
		return rmdir($dir); 
	} 

	//register Stream 
	public static function registerRequest($regCode) {
	
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_HTTPHEADER, 
            array(
                "Cache-Control: no-cache",
                "Content-Type: application/x-www-form-urlencoded",
				"userId: "._USERID."",
                "pbtoken: "._PBTOKEN."",
                "pbId: "._PBID."",			
            )
        );
			
		$fields = array(
			'userId'=> _USERID,
			'regCode'=>$regCode
		);
		$fields_string = '';
		foreach($fields as $key=>$value) {
			 $fields_string .= $key.'='.$value.'&';
		 }
		rtrim($fields_string,'&');
		
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string ); // JSON
        curl_setopt($ch, CURLOPT_URL, _AUTH_URL);
        curl_setopt($ch, CURLOPT_VERBOSE, true);  
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);

        $response = curl_exec($ch);
        $response = json_decode($response, true);       
		return $response;
	}

	public static function valideStreamRequest($regCode) {
	
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_HTTPHEADER, 
            array(
                "Cache-Control: no-cache",
                "Content-Type: application/x-www-form-urlencoded",
				"userId: "._USERID."",
                "pbtoken: "._PBTOKEN."",
                "pbId: "._PBID."",			
            )
        );
			
		$fields = array(
			'userId'=> _USERID,
			'regCode'=>$regCode
		);
		$fields_string = '';
		foreach($fields as $key=>$value) {
			 $fields_string .= $key.'='.$value.'&';
		 }
		rtrim($fields_string,'&');
		
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string ); // JSON
        curl_setopt($ch, CURLOPT_URL, _VALID_URL);
        curl_setopt($ch, CURLOPT_VERBOSE, true);  
        curl_setopt($ch, CURLINFO_HEADER_OUT, true);

        $response = curl_exec($ch);
        $response = json_decode($response, true);       
		return $response;
	}

	//
}
if(isset($_GET["method"])&&$_GET["method"]=="removejson" ){
	$streamId = $_GET['param'];
	$admin = new Admin();
	echo $admin->delTree(PATH."/". $streamId);
}

if(isset($_GET["method"])&&$_GET["method"]=="savejson" ){
	
	$jsonObj= new stdClass();
	$jsonObj->tipcontents = $_POST['tipContents'];
	$jsonObj->title = $_POST['sidebarTitle'];
	$jsonObj->subtitle = $_POST['sidebarSubTitle'];
	$jsonObj->imageUrl = $_POST['sidebarImgUrl'];
	//regCode
	$jsonObj->regCode = $_GET['regCode'];

	$jsonObj->sidebarSetting = [
		'sideStatus'=>$_POST['sidebarStatus'],
		'mode'=>$_POST['sidebarMode'],
		'slidesIn'=>$_POST['slideIntime'],
		'stays'=>$_POST['staysTime'],
		'titleColor'=>$_POST['sideTitleColor'],
		'subColor'=>$_POST['sidesubTitleColor'],
		'indicatorColor'=>$_POST['indicatorColor'],
		'tipColor'=>$_POST['tipTextColor'],
		'topBackColor'=>$_POST['logoAreaBackColor'],
		'bottomBackColor'=>$_POST['tipAreaBackColor'],
		'logoWidth'=>$_POST['logoImgWidth']
	];
	$jsonObj->bottombarSetting = [
		'bottombarStatus'=>$_POST['bottomStatus'],
		'bottombarMode'=>$_POST['bottombarMode'],
		'bottomUrl'=>$_POST['bottomImgUrl'],
		'titleColor'=>$_POST['bottomTitleColor'],
		'subColor'=>$_POST['bottomSubTitleColor'],
		'backgroundColor'=>$_POST['bottomBackColor'],
		'bottomlogoBackColor'=>$_POST['bottomlogoBackColor']
	];
	$jsonObj->preimageSetting = [
		'prebarStatus'=>$_POST['preImgStatus']
	];

	$jsonObj->logoSetting = [
		'logoStatus'=>$_POST['logoStatus'],
		'mainlogoImgWidth'=>$_POST['mainlogoImgWidth'],
		'logoUrl'=>$_POST['logoImgUrl']
	];

	

	$myFile = PATH."/". $_GET['streamID'] . "/config.json";
// echo ($myFile);
	if(is_dir(PATH."/". $_GET['streamID']) === false ) {
		mkdir(PATH."/".$_GET['streamID']);
		$result['newstream'] = true;
	}else{
		$result['newstream'] = false;	
	}
	
	$fp = fopen($myFile, 'w');
	$ss=fwrite($fp, json_encode($jsonObj));
	fclose($fp);

	$result['status'] = $ss;
	echo json_encode($result);
	// else if( file_exists($path)) {
	// 	unlink($path);
	// }
	// if(file_put_contents($myFile, json_encode($jsonObj))) {
	// 	echo 'Data successfully saved';
	// }
    // else 
		// echo "error";
}

if(isset($_GET["method"])&&$_GET["method"]=="imageupload" ){
	// var_dump($_FILES["sidebarImage"]);
	$kind =$_GET["kind"];
	$streamID =$_GET["streamID"];

	if(is_dir(UPLOADPATH."/". $streamID) === false ) {
		mkdir(UPLOADPATH."/".$streamID, 0777);
	}

	$target_dir = UPLOADPATH."/".$streamID ."/";
	$target_file = $target_dir . basename($_FILES[$kind]["name"]);
	$uploadOk = 1;
	$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
	// Check if image file is a actual image or fake image
	// if(isset($_POST["submit"])) {
		$check = getimagesize($_FILES[$kind]["tmp_name"]);
		if($check !== false) {
			// echo "File is an image - " . $check["mime"] . ".";
			$uploadOk = 1;
		} else {
			$result['status'] = "fail";
			$result['message'] = "File is not an image.";
			echo json_encode($result);
			$uploadOk = 0;
		}
	// }
	// Check if file already exists
	if (file_exists($target_file)) {
		$result['status'] = "exist";
		$result['message'] = "Sorry, file already exists.";
		$result['url'] = "/uploads/".$streamID . "/". basename($_FILES[$kind]["name"]);
		echo json_encode($result);
		$uploadOk = 0;
	}
	// Check file size
	if ($_FILES[$kind]["size"] > 500000) {
		
		$result['status'] = "fail";
		$result['message'] = "Sorry, your file is too large.";
		echo json_encode($result);
		$uploadOk = 0;
	}
	// Allow certain file formats
	if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
	&& $imageFileType != "gif" ) {
		$result['status'] = "fail";
		$result['message'] = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
		echo json_encode($result);
		$uploadOk = 0;
	}
	// Check if $uploadOk is set to 0 by an error
	if ($uploadOk == 0) {
		
	// if everything is ok, try to upload file
	} else {
		
		if (move_uploaded_file($_FILES[$kind]["tmp_name"], $target_file)) {
			
			$result['status'] = "success";
			$result['message'] = "The file ". basename( $_FILES[$kind]["name"]). " has been uploaded.";
			$result['url'] = "/uploads/".$streamID . "/". basename($_FILES[$kind]["name"]);

			echo json_encode($result);
		} else {
			$result['status'] = "fail";
			$result['message'] = "Sorry, there was an error uploading your file.";

			echo json_encode($result);
		}
	}
}

if(isset($_GET["method"])&&$_GET["method"]=="registerCode" ){
	$streamId = $_GET['streamID'];
	$regCode = $_GET['regCode'];
	
	$folders = scandir(PATH);
	foreach ( $folders as $key => $folder ) {
		if ( is_numeric($folder) == false ) {
			unset($folders[$key]);
		}
	}
	$photo_streams = $folders;

	if(in_array($streamId, $photo_streams)) {
		echo json_encode("existStream"); 
	} else {
		$adminreg = new Admin();		
		$response = $adminreg->valideStreamRequest($regCode);		
		
		if($response!=null && $response['psId']) {
		
			$validStream = $response['psId'];
			$result = $adminreg->registerRequest($regCode);				
			if($result['success']) {
				echo json_encode($result);
			}else{
				$result['psId'] = $validStream ;			
				echo json_encode($result);
			}
			
		}else {
			echo json_encode("fakeCode");
		}
	}
}

	
?>
