<?php

class LimelightOrder {
    public function new_prospect($data) {
        $epc2_json = json_decode(file_get_contents('../data/advertisers/eg_php_s1/eg_php_s1.json'), true);
        if ( !empty($data) ) {
            $epc2_info = $epc2_json['data_eg_php_s1'];

            $send_data = array(
                'method'=>$data['method'],
                'username'=>$epc2_info['crm']['username'],
                'password'=>$epc2_info['crm']['password'],
                'firstName'=>$data['firstName'],
                'lastName'=>$data['lastName'],
                'address1'=>$data['address1'],
                'city'=>$data['city'],
                'state'=>$data['state'],
                'zip'=>$data['zip'],
                'country'=>$data['country'],
                'email'=>$data['email'],
                // 'ipAddress'=>$data['ipAddress'],
                'ipAddress'=>$_SERVER['REMOTE_ADDR'],
                'campaignId'=>$data['campaignId']
            );
            if (isset($data['AFID'])) $send_data['AFID'] = $data['AFID'];
            if (isset($data['SID'])) $send_data['SID'] = $data['SID'];
            if (isset($data['AFFID'])) $send_data['AFFID'] = $data['AFFID'];
            if (isset($data['C1'])) $send_data['C1'] = $data['C1'];
            if (isset($data['C2'])) $send_data['C2'] = $data['C2'];
            if (isset($data['C3'])) $send_data['C3'] = $data['C2'];

            // if (isset($data['c1'])) $send_data['C1'] = $data['c1'];
            // if (isset($data['c2'])) $send_data['C2'] = $data['c2'];
            // if (isset($data['c3'])) $send_data['C3'] = $data['c2'];

            if (isset($data['click_id'])) $send_data['click_id'] = $data['click_id'];
     
           
	      // this is just something to induce a failure
            if ( $send_data['firstName'] == 'Test99er' ) {
                $request_url = "https://naturalgarciniahealth.com/admin/transact.php";
            } else {
                $request_url = $epc2_info['crm']['site']."/transact.php";
            }
          
            parse_str($this->curl($request_url,$send_data), $result);
            

            if ( ! isset($result['errorFound']) ) {
                return array(
                    'context' => array(
                        'responseCode' => 960,
                        'errorFound' => 1,
                        'errorMessage' => "Had server error; please try again",
                        )
                    );
            }
            elseif ($result['errorFound']==0) {
                return 
                array('context' => array(
                        'responseCode' => $result['responseCode'],
                        'errorFound' => $result['errorFound'],
                        'prospectId' => $result['prospectId']
                    )
                );
            }
            else {
                return array('context' => array(
                    'responseCode' => $result['responseCode'],
                    'errorMessage' => $result['errorMessage'],
                    'errorFound' => 1
                ));
            }
        } else {
            return array('context' => array(
                'message'=>'No data received',
                'errorFound' => 1
            ));
        }
    }

    public function new_order($data) {

        
        $epc2_json = json_decode(file_get_contents('../data/advertisers/eg_php_s1/eg_php_s1.json'), true);
       

        if ( !empty($data) ) {
            // $epc2_info = $epc2_json['data_eg_php_s1'];

            if($data['is_upsell']=='1'){
                $epc2_info = $epc2_json['data_eg_php_s2'];
            }else{
                $epc2_info = $epc2_json['data_eg_php_s1'];
            }

            $username = $epc2_info['crm']['username'];
            $password = $epc2_info['crm']['password'];
            $url      = $epc2_info['crm']['site'];

            $send_data = array(
                'method'=>$data['method'],
                'username'=>$epc2_info['crm']['username'],
                'password'=>$epc2_info['crm']['password'],

                'tranType'=>'Sale',
                'productId'=>  $epc2_info['productId'],
                'shippingId'=> $epc2_info['shippingId'],
                'campaignId' => $data['campaignId'],
                'upsellCount'=>0,
                // 'ipAddress'=>$data['ipAddress'],
                'ipAddress'=>$_SERVER['REMOTE_ADDR'],
                'email' => $data['email'],
                'phone' => $data['phone'],
                'firstName'=>$data['firstName'],
                'lastName'=>$data['lastName'],
                'shippingAddress1' => $data['address1'],
                'shippingCity' => $data['city'],
                'shippingState'=> $data['state'],
                'shippingZip'  => $data['zip'],
                'shippingCountry' => $data['country'],

                'creditCardType' => $data['creditCardType'],
                'creditCardNumber' => $data['creditCardNumber'],
                'expirationDate' => $data['expirationDate'],
                'CVV' => $data['CVV'],

                
                'billingAddress1' => $data['address1'],
                'billingCity'     => $data['city'],
                'billingState'    => $data['state'],
                'billingZip'      => $data['zip'],
                'billingCountry'  => $data['country']
    

            );

            if (isset($data['AFID'])) $send_data['AFID'] = $data['AFID'];
            if (isset($data['SID'])) $send_data['SID'] = $data['SID'];
//            if (isset($data['AFFID'])) $send_data['AFFID'] = $data['AFFID'];
            if (isset($data['AFFID'])) $send_data['AFFID'] = $data['AFFID'];
            if (isset($data['c1'])) $send_data['C1'] = $data['c1'];
            if (isset($data['c2'])) $send_data['C2'] = $data['c2'];
            if (isset($data['c3'])) $send_data['C3'] = $data['c2'];

            if (isset($data['C1'])) $dasend_datata['C1'] = $data['C1'];
            if (isset($data['C2'])) $send_data['C2'] = $data['C2'];
            if (isset($data['C3'])) $send_data['C3'] = $data['C3'];

            if (isset($data['click_id'])) $send_data['click_id'] = $data['click_id'];

	

            if ( $send_data['firstName'] == 'Test99er' ) {
            // this is just something to induce a failure
                $request_url = "https://naturalgarciniahealth.com/admin/transact.php";
            } else {
                $request_url = $epc2_info['crm']['site']."/transact.php";
            }
           
	        parse_str($this->curl($request_url,$send_data), $result);

//            if ($prepaid = ($accept_prepaid && $result['errorFound']!=0 && $result['declineReason']=="Prepaid Credit Cards Are Not Accepted")) {
//                $send_data['campaignId'] = $prepaid_campaign_id;
//                parse_str($this->curl($request_url,$send_data), $result);
//            }

            if ( ! isset($result['errorFound']) ) {
                // strip
                return array('context' => array(
                    'responseCode' => 950,
                    'errorFound' => 1,
                    'errorMessage' => "Had server error; please re-click submit",
                    )
            
                );
	     
	        }
	        elseif ( $result['errorFound']==0 ) {
                
                return 
                array('context' => array(
                    'responseCode' => $result['responseCode'],
                    'errorFound' => $result['errorFound'],
                    'orderId' => $result['orderId'],
                    
                    )
                );

	        } else {

	     
                $ret = array('context' => array(
                    'errorMessage' => $result['errorMessage'],
                    'responseCode' => $result['responseCode'],
                    'errorFound' =>   $result['errorFound']
                ));
		
                return $ret;
            }
        } else {
	        return array('status'=>0,'message'=>'No data received');
        }
    }

    /* public function validate_payment($data) { */
    /*     if (!empty($data)) { */
    /*         if ($data['cc_type']=="") return array('status'=>0,'message'=>'Please select credit card type.'); */
    /*         if (strlen(preg_replace("/[^0-9]/", '', $data['cc_cvv']))<3) return array('status'=>0,'message'=>'Invalid CVV2.'); */
    /*         if (strlen(preg_replace("/[^0-9]/", '', $data['cc_number']))<16) return array('status'=>0,'message'=>'Invalid Card Number.'); */
    /*         return array('status'=>1); */
    /*     } else { */
    /*         return array('status'=>0,'message'=>'No Data Sent.'); */
    /*     } */
    /* } */

    private function curl($url,$data) {
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        /* curl_setopt($ch,CURLOPT_USERAGENT,'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.45 Safari/535.19'); */
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));
        return curl_exec($ch);
    }

    private function handle_error($id) {
        $error_messages = array(
            304=>'Invalid First Name',
            305=>'Invalid Last Name',
            306=>'Invalid Address 1',
            307=>'Invalid City',
            308=>'Invalid State',
            309=>'Invalid Zip Code',
            310=>'Invalid Country',
            311=>'Invalid Billing Address 1',
            312=>'Invalid Billing City',
            313=>'Invalid Billing State',
            314=>'Invalid Billing Zip Code',
            315=>'Invalid Billing Country',
            316=>'Invalid Phone Number',
            317=>'Invalid Email Address',
            318=>'Invalid Credit Card Type',
            319=>'Invalid Credit Card Number',
            320=>'Invalid Expiration Date',
            323=>'CVV Required',
            325=>'Invalid CVV Length',
            334=>'The credit card number or email address has already purchased this product(s)',
            342=>'Expired Credit Card',
            800=>'Transaction Declined'
        );

        return isset($error_messages[$id]) ? $error_messages[$id]:'An error occurred. Please try again later. ('.$id.')';
    }

    private function ip() {
        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $ip = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $ip = $_SERVER['REMOTE_ADDR'];
        }
        return $ip;
    }
    
    /**
     * Checks for either single or multiple campaign ids and returns an id
     * @param array data Array structure from configuration json
     * @return int Returns the campaign id
     */
    private function setCampaignId($data){

        if(isset($_SESSION['campaignIdsPos']) && is_int($_SESSION['campaignIdsPos'])){
            return $data['campaignIds'][$_SESSION['campaignIdsPos']];
        }
        else{
            return $data['campaignId'];
        }


    }
}