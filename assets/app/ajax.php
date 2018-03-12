<?php
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");

// header("Access-Control-Allow-Origin : *");
//header("Access-Control-Allow-Methods : GET,POST,OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once('curl.php');
$crm = new LimelightOrder();
/*
 *  Process POST Data and return the results
 *
 */
//  $_POST = json_decode(file_get_contents('php://input'), true);
//  var_dump($_POST);
 // foreach ($_POST as $key => $val){
     // $data = $key ;
 // }


 // $_POST = json_decode($data,true);

if ( $_GET['method'] == 'new_prospect') {
    echo json_encode($crm->new_prospect($_POST));
    return;
}
elseif ( $_GET['method']  == 'new_order' ) {
  
    echo json_encode($crm->new_order($_POST));
    return;
}


elseif ( $_GET['method']  == 'upsell' ) {
    
    $_POST['ao'] = $_SESSION['ao'];
    
    echo json_encode($crm->new_order(array_merge($_POST,array('is_upsell' => true))));
    return;
}
//
//test vuejs
elseif ($_GET['method']  == 'photojson' ){
	$epc2_json = json_decode(file_get_contents('../data/advertisers/photoStream.json'), true);
	echo json_encode($epc2_json);
    return;
}
elseif ($_GET['method']  == 'tipjson' ) {
	$json = json_decode(file_get_contents('../data/advertisers/tipContent.json'), true);
	echo json_encode($json);
    return;
}
// 
else {
    $toRet = array ("context" => array(
        "errorFound" => 0,
        "responseCode" => 100
    ),
        "redirect" => "upsell1.php",
        "method" => "nothing - used else: (" . $_GET['method'] . ")"

    );
    echo json_encode($toRet);

}