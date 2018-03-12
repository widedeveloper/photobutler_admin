<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$param = $_GET['param'];
if ($_GET['method']  == 'getjson' ){
	if($jsonStream = file_get_contents('../streams/json/'.$param.'/images.json') !==false ){
		$epc2_json = json_decode(file_get_contents('../streams/json/'.$param.'/images.json'), true);
		echo json_encode($epc2_json);
	}else {
		echo "noStream";
	}
    return;
}elseif($_GET['method']  == 'tipjson' ){
	if($jsonStream = file_get_contents('../config/'.$param.'/config.json') !==false ){
		$epc2_json = json_decode(file_get_contents('../config/'.$param.'/config.json'), true);
		echo json_encode($epc2_json);
	}else {
		echo "noConfig";
	}
    return;
}