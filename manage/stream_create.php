<div id="stream_modal" class="modal container fade" tabindex="-1" aria-hidden="true" data-backdrop="static" data-keyboard="false" data-attention-animation="false" style="display: none; margin-top: -153px;">
	<div class="modal-header">
		<button type="button" class="close" data-dismiss="modal" aria-hidden="true" onclick="close_modal()"></button>
		<h4 class="modal-title">Configure Stream ID</h4>
	</div>		
	
	<div class="modal-body1">
		<form name="modalForm" id="modalForm" class="form-horizontal" action="" method="post" enctype="multipart/form-data">
			<section class="streamRegister">
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN VALIDATION STATES-->
					<div class="portlet light portlet-fit portlet-form " id="form_wizard_1">					
						<div class="portlet-body">
							<!-- BEGIN FORM-->
							<!-- <form action="#" class="form-horizontal"> -->
								<div class="form-body">								
									<!-- --------------------------------------- -->							
									<div class="form-group">
										<label class="control-label col-md-3">STREAM ID
										</label>
										<div class="col-md-6">
											<input type="text" required name="streamID" id="streamID" data-required="1" class="form-control" /> </div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-3">Register Code
										</label>
										<div class="col-md-6">
											<input type="text" required name="regCode" id="regCode" data-required="1" class="form-control" /> </div>
									</div>

									<div class="form-group">
										
										<div class="col-md-3" >
										<button type="button" class="btn regcode-btn pull-right" onclick="register_stream()"  
										style="background-color:#009fda !important; color:white !important">Register</button>
									</div>

								</div>
							<!-- </form> -->
						</div>
					</div>
				</div>
			</div>
			</section>
			<section class="streamConfig" >
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN VALIDATION STATES-->
					<div class="portlet light portlet-fit portlet-form " id="form_wizard_1">
						<div class="portlet-title">
							<div class="caption">
								
								<span class="caption-subject font-dark sbold uppercase">Sidebar Settings</span>
							</div>                                    
						</div>
						<div class="portlet-body">
							<!-- BEGIN FORM-->
							<!-- <form action="#" class="form-horizontal"> -->
								<div class="form-body">
									
									<!-- --------------------------------------- -->
								
									<div class="form-group">
										<label class="control-label col-md-3">Title
										</label>
										<div class="col-md-6">
											<input type="text" required name="sidebarTitle" id="sidebarTitle" data-required="1" class="form-control" /> </div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-3">Subtitle
										</label>
										<div class="col-md-6">
											<input name="sidebarSubTitle" required id="sidebarSubTitle" type="text" class="form-control" /> </div>
									</div>
									<div class="form-group">
										<label class="control-label col-md-3">Image Url
										</label>
										<div class="col-md-6">
											<!-- <input name="sidebarImgUrl" required id="sidebarImgUrl" type="text" class="form-control" /> </div> -->

											<div class="col-lg-3">
												<!-- The fileinput-button span is used to style the file input field as button -->
												<span class="btn  fileinput-button slideaddImg"  style="background-color:#009fda !important; color:white !important">
													<i class="fa fa-plus"></i>
													<span> Add file </span>
													<input type="file" id="sidebarImage" name="sidebarImage" onchange="readURL(this,'sidebar')">
												</span>																
												
												<div id="sidefiles" class="sidefiles">
													<div>														
														<img src="" style="margin-top:10px;" id="sidePreImage"/>
														<br>
														<span class="sideImageName"></span>
														<br>
														<button type="button" class="btn sideuploadstart" onclick="imageupload('sidebarImage')"  style="background-color:#009fda !important; color:white !important">
														<i class="fa fa-upload"></i> Upload</button>														
													</div>
												</div>

												<div id="sidefiles_exist" class="sidefiles_exist" style="display:none">
													<div>														
														<img src="" style="margin-top:10px;width:150px" id="sidefiles_existImg" width:150px/>
														<br>
														<span class="sideImageName"></span>
														<br>
														<button type="button" class="btn sideuploadstart" onclick="remove_image('sidebarImage')"  style="background-color:black !important; color:white !important">
														<i class="fa fa-trash"></i> Remove </button>														
													</div>
												</div>
											
											</div>
											<div class="col-lg-9" style="text-align:center">
												<input name="sidebarImgUrl" id="sidebarImgUrl" type="hidden"  class="form-control" />
											</div>
													
										</div>	
									</div>
									<!-- --------------------------------------- -->
									<div class="form-group form-md-radios">
										<label class="control-label col-md-3">Sidebar Status
										</label>
										<div class="md-radio-inline col-md-4">
											<div class="md-radio">
												<input type="radio" id="radio6" required name="sidebarStatus" value="on" class="md-radiobtn">
												<label for="radio6">
													<span class="inc"></span>
													<span class="check"></span>
													<span class="box"></span> On </label>													
											</div>
											<div class="md-radio">
												<input type="radio" id="radio7" required name="sidebarStatus" value="off" class="md-radiobtn" >
												<label for="radio7">
													<span></span>
													<span class="check"></span>
													<span class="box"></span> Off </label>

											</div>
											<!-- <input name="sidebarstatuvalue" type="hidden" /> -->
											
										</div>
									</div>
									
									<div class="form-group form-md-radios">
										<label class="control-label col-md-3">Sidebar Mode
										</label>
										<div class="md-radio-inline col-md-4">
											<div class="md-radio">
												<input type="radio" id="radio8" required name="sidebarMode" value="static" class="md-radiobtn">
												<label for="radio8">
													<span class="inc"></span>
													<span class="check"></span>
													<span class="box"></span> Static </label>
											</div>
											<div class="md-radio">
												<input type="radio" id="radio9" required name="sidebarMode" value="dynamic" class="md-radiobtn" >
												<label for="radio9">
													<span></span>
													<span class="check"></span>
													<span class="box"></span> Dynamic </label>
											</div>
											<!-- <input name="sidebarmodevalue" type="hidden" /> -->
											
										</div>
									</div>
									
									
									<div class="form-group">
										<label class="col-md-3 control-label">Title Font Color</label>
										<div class="col-md-6">
											<input type="text" name="sideTitleColor" required id="sideTitleColor" class="form-control demo" data-control="hue" value=""> </div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">Subtitle Font Color</label>
										<div class="col-md-6">
											<input type="text" name="sidesubTitleColor" required id="sidesubTitleColor" class="form-control demo" data-control="hue" value=""> </div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">Tip Text Color</label>
										<div class="col-md-6">
											<input type="text" name="tipTextColor" required id="tipTextColor" class="form-control demo" data-control="hue" value=""> </div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">Logo Area Background</label>
										<div class="col-md-6">
											<input type="text" name="logoAreaBackColor" required id="logoAreaBackColor" class="form-control demo" data-control="hue" value=""> </div>
									</div>
									
									<div class="form-group">
										<label class="col-md-3 control-label">Tip Area Background</label>
										<div class="col-md-6">
											<input type="text" name="tipAreaBackColor" required id="tipAreaBackColor" class="form-control demo" data-control="hue" value=""> </div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">Indicator Circle Color</label>
										<div class="col-md-6">
											<input type="text" name="indicatorColor" required id="indicatorColor" class="form-control demo" data-control="hue" value=""> </div>
									</div>
									<!-- --------------------------------------- -->
									<div class="form-group">
										<label class="control-label col-md-3">Logo Image Width
										</label>
										<div class="col-md-6">
											<input name="logoImgWidth" id="logoImgWidth" required type="number" class="form-control" /> </div>
										<label class="control-label col-md-3" style="text-align:left">%
										</label>
									</div>
									<!-- --------------------------------------- -->
									<h4 class="form-section">Tip Content</h4>
									<button type="button" class="btn " onclick=add_tip()  style="background-color:#009fda !important; color:white !important">Add Tip</button>												
									<div class="tipcontentsArea">
										
										<div class="form-group has-warning">											
											<label class="control-label col-md-3" ></label>
											<div class="col-md-6">
												<textarea name="tipContents[]" required class="form-control" rows="2"></textarea>
											</div>
											<div class="col-md-2">
													<!-- <button type="button" class="btn red">Remove</button> -->
											</div>
										</div>
									</div>
								</div>
							<!-- </form> -->
						</div>
					</div>
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN VALIDATION STATES-->
					<div class="portlet light portlet-fit portlet-form ">
						<div class="portlet-title">
							<div class="caption">
								
								<span class="caption-subject font-dark sbold uppercase">Time settings</span>
							</div>						
						</div>
						<div class="portlet-body">
							<!-- BEGIN FORM-->
							
								<!-- --------------------------------------- -->
								<div class="form-group">
									<label class="control-label col-md-3">Slide-in/Slide-out Duration
									</label>
									<div class="col-md-6">
										<input name="slideIntime" id="slideIntime" required type="text" class="form-control" /> </div>
									<label class="control-label col-md-3" style="text-align:left">Seconds</label>
								</div>
								<div class="form-group">
									<label class="control-label col-md-3">Stay Duration
									</label>
									<div class="col-md-6">
										<input name="staysTime" id="staysTime" required type="text" class="form-control" /> </div>
										
									<label class="control-label col-md-3" style="text-align:left">Seconds</label>
								</div>
							
							<!-- --------------------------------------- -->
							<!-- END FORM-->
						</div>
					</div>
					<!-- END VALIDATION STATES-->
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN VALIDATION STATES-->
					<div class="portlet light portlet-fit portlet-form ">
						<div class="portlet-title">
							<div class="caption">
								
								<span class="caption-subject font-dark sbold uppercase">Bottom Bar Settings</span>
							</div>
							
						</div>
						<div class="portlet-body">
							<!-- BEGIN FORM-->
							<!-- <form action="#" id="form_sample_1" class="form-horizontal"> -->
								<div class="form-body">  
									<div class="form-group form-md-radios">
										<label class="control-label col-md-3">Bottom Bar Status
										</label>
										<div class="md-radio-inline col-md-4">
											<div class="md-radio">
												<input type="radio" id="radio10" required name="bottomStatus" value="on" class="md-radiobtn">
												<label for="radio10">
													<span class="inc"></span>
													<span class="check"></span>
													<span class="box"></span> On </label>
											</div>
											<div class="md-radio">
												<input type="radio" id="radio11" required name="bottomStatus" value="off" class="md-radiobtn" >
												<label for="radio11">
													<span></span>
													<span class="check"></span>
													<span class="box"></span> Off </label>
											</div>
											<!-- <input name="bottomstatusvalue" type="hidden" /> -->
										</div>
									</div> 
									
									<div class="form-group form-md-radios">
										<label class="control-label col-md-3">Bottom Bar Mode
										</label>
										<div class="md-radio-inline col-md-4">
											<div class="md-radio">
												<input type="radio" id="radio20" required name="bottombarMode" value="static" class="md-radiobtn">
												<label for="radio20">
													<span class="inc"></span>
													<span class="check"></span>
													<span class="box"></span> Static </label>
											</div>
											<div class="md-radio">
												<input type="radio" id="radio21" required name="bottombarMode" value="dynamic" class="md-radiobtn" >
												<label for="radio21">
													<span></span>
													<span class="check"></span>
													<span class="box"></span> Dynamic </label>
											</div>
											<!-- <input name="sidebarmodevalue" type="hidden" /> -->
											
										</div>
									</div>

									<div class="form-group">
										<label class="control-label col-md-3">Bottom Image Url
										</label>
										<div class="col-md-6">
											<!-- <input type="text" name="bottomImgUrl" required id="bottomImgUrl" data-required="1" class="form-control" /> </div> -->
											<div class="col-lg-3">
												<!-- The fileinput-button span is used to style the file input field as button -->
												<span class="btn  fileinput-button bottomaddImg"  style="background-color:#009fda !important; color:white !important">
													<i class="fa fa-plus"></i>
													<span> Add file </span>
													<input type="file" id="bottomImage" name="bottomImage" onchange="readURL(this,'bottombar')">
												</span>																
												
												<div id="bottomfiles" class="bottomfiles" style="display:none">
													<div>														
														<img src="" style="margin-top:10px;" id="bottomPreImage"/>
														<br>
														<span class="bottomImageName"></span>
														<br>
														<button type="button" class="btn  bottomuploadstart" onclick="imageupload('bottomImage')"  style="background-color:#009fda !important; color:white !important">
														<i class="fa fa-upload"></i> Upload</button>														
													</div>
												</div>
												<div id="bottomfiles_exist" class="bottomfiles_exist" style="display:none">
													<div>														
														<img src="" style="margin-top:10px;width:150px" id="bottomfiles_existImg" width:150px/>
														<br>
														<span class="bottomImageName"></span>
														<br>
														<button type="button" class="btn" onclick="remove_image('bottombarImage')"  style="background-color:black !important; color:white !important">
														<i class="fa fa-trash"></i> Remove</button>														
													</div>
												</div>

											
											</div>
											<div class="col-lg-9" style="text-align:center">
												<input name="bottomImgUrl" id="bottomImgUrl" type="hidden" class="form-control" /> 
											</div>
											
										</div>
									</div>
									<!-- --------------------------------------- -->
									<div class="form-group">
										<label class="col-md-3 control-label">Title Font Color</label>
										<div class="col-md-6">
											<input type="text" name="bottomTitleColor" required id="bottomTitleColor" class="form-control demo" data-control="hue" value=""> </div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">Subtitle Font Color</label>
										<div class="col-md-6">
											<input type="text" name="bottomSubTitleColor" required id="bottomSubTitleColor" class="form-control demo" data-control="hue" value=""> </div>
									</div>
									<div class="form-group">
										<label class="col-md-3 control-label">Background Color</label>
										<div class="col-md-6">
											<input type="text" name="bottomBackColor" required id="bottomBackColor" class="form-control demo" data-control="hue" value=""> </div>
									</div>	
									<div class="form-group">
										<label class="col-md-3 control-label">LogoBackground Color</label>
										<div class="col-md-6">
											<input type="text" name="bottomlogoBackColor" required id="bottomlogoBackColor" class="form-control demo" data-control="hue" value=""> </div>
									</div>										
									<!-- ---------------------------------------                                             -->
								</div>
							<!-- </form> -->
							<!-- END FORM-->
						</div>
					</div>
					<!-- END VALIDATION STATES-->
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN VALIDATION STATES-->
					<div class="portlet light portlet-fit portlet-form ">
						<div class="portlet-title">
							<div class="caption">
								
								<span class="caption-subject font-dark sbold uppercase">SLIDESHOW THUMBNAIL SETTINGS</span>
							</div>						
						</div>
						<div class="portlet-body">
							<!-- BEGIN FORM-->
							<!-- <form action="#" id="form_sample_1" class="form-horizontal"> -->
								<div class="form-body">  
									<div class="form-group form-md-radios">
										<label class="control-label col-md-3">Slideshow Thumbnail Status
										</label>
										<div class="md-radio-inline col-md-4">
											<div class="md-radio">
												<input type="radio" id="radio12" required name="preImgStatus" value="on" class="md-radiobtn">
												<label for="radio12">
													<span class="inc"></span>
													<span class="check"></span>
													<span class="box"></span> On </label>
											</div>
											<div class="md-radio">
												<input type="radio" id="radio13" required name="preImgStatus" value="off" class="md-radiobtn" >
												<label for="radio13">
													<span></span>
													<span class="check"></span>
													<span class="box"></span> Off </label>
											</div>		
											<!-- <input name="preimagestatusvalue" type="hidden" />								 -->
										</div>
									</div>                                  
								</div>
							<!-- </form> -->
							<!-- END FORM-->
						</div>
					</div>
					<!-- END VALIDATION STATES-->
				</div>
			</div>
			
			<div class="row">
				<div class="col-md-12">
					<!-- BEGIN VALIDATION STATES-->
					<div class="portlet light portlet-fit portlet-form ">
						<div class="portlet-title">
							<div class="caption">
									
								<span class="caption-subject font-dark sbold uppercase">Logo Settings</span>
							</div>
							
						</div>
						<div class="portlet-body">
							<!-- BEGIN FORM-->
							<!-- <form action="#" id="form_sample_1" class="form-horizontal"> -->
								<div class="form-body">  
									<div class="form-group form-md-radios">
										<label class="control-label col-md-3">Logo Status
										</label>
										<div class="md-radio-inline col-md-4">
											<div class="md-radio">
												<input type="radio" id="radio15" required name="logoStatus" value="on" class="md-radiobtn">
												<label for="radio15">
													<span class="inc"></span>
													<span class="check"></span>
													<span class="box"></span> On </label>
											</div>
											<div class="md-radio">
												<input type="radio" id="radio16" required name="logoStatus" value="off" class="md-radiobtn" >
												<label for="radio16">
													<span></span>
													<span class="check"></span>
													<span class="box"></span> Off </label>
											</div>
											
											<!-- <input name="logstatusvalue" type="hidden" />					 -->
										</div>
									</div>   
									<div class="form-group">
										<label class="control-label col-md-3">Logo Image Url
										</label>
										<div class="col-md-6">
											<!-- <input type="text" name="logoImgUrl" required id="logoImgUrl" data-required="1" class="form-control" /> </div> -->
											<div class="col-lg-3">
												<!-- The fileinput-button span is used to style the file input field as button -->
												<span class="btn  fileinput-button logoaddImg"  style="background-color:#009fda !important; color:white !important">
													<i class="fa fa-plus"></i>
													<span> Add file </span>
													<input type="file" id="logoImage" name="logoImage" onchange="readURL(this,'logo')">
												</span>																
												
												<div id="logofiles" class="logofiles" style="display:none">
													<div>														
														<img src="" style="margin-top:10px;" id="logoPreImage"/>
														<br>
														<span class="logoImageName"></span>
														<br>
														<button type="button" class="btn logouploadstart" onclick="imageupload('logoImage')"  style="background-color:#009fda !important; color:white !important">
														<i class="fa fa-upload"></i> Upload</button>														
													</div>
												</div>

												<div id="logofiles_exist" class="logofiles_exist" style="display:none">
													<div>														
														<img src="" style="margin-top:10px;width:150px" id="logofiles_existImg" width:150px/>
														<br>
														<span class="logoImageName"></span>
														<br>
														<button type="button" class="btn" onclick="remove_image('logoImage')"  style="background-color:black !important; color:white !important">
														<i class="fa fa-trash"></i> Remove</button>														
													</div>
												</div>
											
											</div>
											<div class="col-lg-9" style="text-align:center">
											<input name="logoImgUrl" id="logoImgUrl" type="hidden" class="form-control" />
											</div>
										</div>
									</div>

									<div class="form-group">
										<label class="control-label col-md-3">Logo Image Width
										</label>

										<div class="col-md-6">
											<input name="mainlogoImgWidth" id="mainlogoImgWidth" required type="number" class="form-control" /> </div>
										<label class="control-label col-md-3" style="text-align:left">%</label>
										
									</div>
									<!-- ---------------------------------------											 -->
								</div>
							<!-- </form> -->
							<!-- END FORM-->
						</div>
					</div>
					<!-- END VALIDATION STATES-->
				</div>
			</div>
			</section>
		</form>
	</div>
	
	
	<div class="modal-footer">
		<button type="button" data-dismiss="modal" class="btn"   style="background-color:#000 !important; color:white !important" onclick="close_modal()">Close</button>
		<button type="button" class="btn saveConfigBtn" onclick="save_data()" style="background-color:#009fda !important; color:white !important">Save changes</button>
	</div>
</div>
<style>
.md-radio label>.check{
	background-color:#009fda !important;
}
.form-md-radios>label{
	color:#333 !important;
}
.streamConfig.newReg{
	opacity:0.3
}
</style>