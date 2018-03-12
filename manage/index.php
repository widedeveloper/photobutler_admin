	
	<?php 		
		session_start();
		include('./include/config.php');
	
        $path = PATH;
        $streamIDs = array();
        // directory handle
        $dir = dir($path);
        while (false !== ($entry = $dir->read())) {
            if ($entry != '.' && $entry != '..') {
                if (is_dir($path . '/' .$entry)) {
                        $streamIDs[] = $entry; 
                }
            }
        }

		if(isset($_GET["method"])){			
			if($_GET["method"] =="logout"){
				$user = new Admin();
				$user->logout();
				echo "<script>window.open('login.php','_self')</script>";
			}
		}
		
		if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true){
				//echo $_SESSION['username'];
		}else{
			echo "<script>window.open('login.php','_self')</script>";
		}
	?>
	
	<?php 		
		include('./include/header.php'); 
	?>

	
    <body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid" style="background-color : white !important">
        <!-- BEGIN HEADER -->
        <div class="page-header navbar navbar-fixed-top">
            <!-- BEGIN HEADER INNER -->
            <div class="page-header-inner ">             
            
                <div class="page-top" >
					<div class="pull-left sbold uppercase" style="    padding: 18px 50px;
						float: left!important;
						font-size: 20px;
						color: #009fda;"><label> Slideshow Admin</label></div>
                    <div class="top-menu">
						
                        <ul class="nav navbar-nav pull-right">                           
                    
                            <li class="dropdown dropdown-user">    
                                  
									<li>
                                        <a href="index.php?method=logout" style="  color:#009fda !important">
                                            <i class="icon-logout"></i> Sign Out </a>
                                    </li>
                                </ul>
                            </li>
                          
                        </ul>
                    </div>
                </div>
                <!-- END PAGE TOP -->
            </div>
            <!-- END HEADER INNER -->
        </div>
        <!-- END HEADER -->
        <!-- BEGIN HEADER & CONTENT DIVIDER -->
        <div class="clearfix"> </div>
        <!-- END HEADER & CONTENT DIVIDER -->
        <!-- BEGIN CONTAINER -->
          <div class="page-container" style="">
            
            <!-- BEGIN CONTENT -->
            <div class="page-content-wrapper" >
               <div class="page-content" style="height:100%; background-color : white !important">
                    <!-- BEGIN PAGE HEADER-->
                    <!-- BEGIN THEME PANEL -->
                   
                        
                    <!-- END THEME PANEL -->
                    <button type="button" class="demo-loading-btn btn  pull-right" onclick=view_modal('new') style="background-color:#009fda !important; color:white !important">ADD NEW </button>
                    <h3 class="page-title"> STREAM IDS
                    </h3>
                   
                    <!-- END PAGE HEADER-->
                    <div class="row">
                        <div class="col-md-12">
                            
                            <!-- BEGIN PORTLET-->
                            <div class="portlet light ">
                              
                                <div class="portlet-body">
                                    <table class="table table-hover table-striped table-bordered" >
                                        <tbody id="streamTable">    
                                        <?php foreach($streamIDs as $ID){ ?>                                        
                                            <tr id="<?php echo $ID?>">
                                                <td><?php echo $ID; ?> </td>
                                                <td>
                                                    <a class="btn"  onclick=view_modal('<?php echo $ID?>') style="background-color:#009fda !important; color:white !important"> Edit </a>
                                              
                                                    <a class="btn"  onclick=remove_stream('<?php echo $ID?>') style="background-color:#000 !important;  color:white !important"> Delete </a>
                                                </td>
                                            </tr>
                                        <?php }?>
                                            
                                        </tbody>
                                    </table>                               
									
									<?php include('./stream_create.php'); ?>									
								
								</div>
                            </div>
                            <!-- END PORTLET-->
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
		<style>
		.page-container{
				width: 80%;margin: 68px 10% 0;
            }
            .page-container-bg-solid .page-content{
                background:#fff !important;
            }
		@media (max-width: 767px){
			
			.page-header.navbar {
				 background: #FFF !important; 
				     height: 0;
			}
			.page-container{
				width:100%;
			}
		}
		</style>
<?php include('./include/footer.php');?>