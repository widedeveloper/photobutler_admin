

function view_modal (streamID) {
	if(streamID == 'new'){
		display_modal()
		$("#streamID").prop('disabled',false);
	} else {
		// $.get( "../../../app/ajax.php?method=tipjson&param=" + streamID, function( data ) {
			$.get( "/app/ajax.php?method=tipjson&param=" + streamID, function( data ) {
			if(data == "noConfig"){
				console.log(streamID, data)
				$("#streamID").val(streamID);
				display_modal()
			} else {
				console.log(JSON.parse(data))
				display_config(JSON.parse(data), streamID);			
			}
			
		});		
	}	
}

function display_modal(){
	colorPickerRender();
	$("#stream_modal").modal()
}
function close_modal() {
	clear_config();
}

//--------------------clear popup ------------------------//
function clear_config() {

	var inputObjs = $("#stream_modal input.form-control");
	inputObjs.each(function(){
		$(this).val('');
	})

	var radioObjs = $("#stream_modal input.md-radiobtn");
	radioObjs.each(function(){
		$(this).prop("checked", false);
	})

	$(".tipcontentsArea").children().each(function(index){
		$(this).find('textarea').val('')
		if(index!=0){
			$(this).remove()
		}
		// $(this).prop("checked", false);
	})	


	$(".slideaddImg").css("display","block");
	$(".sidefiles").css("display","none");
	$("#sidefiles_exist").css('display','none')
	$("#sidefiles_existImg").attr('src','');
	$(".bottomaddImg").css("display","block");
	$(".bottomfiles").css("display","none");
	$("#bottomfiles_exist").css('display','none')
	$("#bottomfiles_existImg").attr('src','');
	$(".logoaddImg").css("display","block");
	$(".logofiles").css("display","none");
	$("#logofiles_exist").css('display','none')
	$("#logofiles_existImg").attr('src','');
}

//-------------------edit config---------------------//
function display_config(data, streamID) {


	var tipContents = data.tipcontents;
	var sidebarTitle = data.title;
	var sidebarSubTitle = data.subtitle;
	var sidebarImgUrl = data.imageUrl;
	var sidebarSetting = data.sidebarSetting;
	var bottombarSetting = data.bottombarSetting;
	var preimageSetting = data.preimageSetting;
	var logoSetting = data.logoSetting;


	$("#streamID").val(streamID);
	if(streamID != 'new'){
		$("#streamID").prop('disabled',true);
	}
	$("#sidebarTitle").val(sidebarTitle);
	$("#sidebarSubTitle").val(sidebarSubTitle);
	$("#sidebarImgUrl").val(sidebarImgUrl);

	if(sidebarImgUrl!=''){
		//alert(sidebarImgUrl)
		$(".slideaddImg").css("display","none");
		$(".sidefiles").css("display","none");
		$("#sidefiles_exist").css('display','block')
		$("#sidefiles_existImg").attr('src',sidebarImgUrl);
	}else{
		$(".slideaddImg").css("display","block");
		$(".sidefiles").css("display","none");
		$("#sidefiles_exist").css('display','none')
		$("#sidefiles_existImg").attr('src','');
	}
	
	//sidebar status
	if(sidebarSetting.sideStatus == "on") $("#radio6").prop("checked", true);
	else  $("#radio7").prop("checked", true);
	// $("input[name=sidebarstatuvalue]").val(sidebarSetting.sideStatus);
	//sidebar Mode
	if(sidebarSetting.mode == "static") $("#radio8").prop("checked", true);
	else  $("#radio9").prop("checked", true);
	// $("input[name=sidebarmodevalue]").val(sidebarSetting.mode);

	$("#slideIntime").val(sidebarSetting.slidesIn);
	$("#staysTime").val(sidebarSetting.stays);
	$("#sideTitleColor").val(sidebarSetting.titleColor);
	$("#sidesubTitleColor").val(sidebarSetting.subColor);
	$("#indicatorColor").val(sidebarSetting.indicatorColor);
	$("#tipTextColor").val(sidebarSetting.tipColor);
	$("#logoAreaBackColor").val(sidebarSetting.topBackColor);
	$("#tipAreaBackColor").val(sidebarSetting.bottomBackColor);
	$("#logoImgWidth").val(sidebarSetting.logoWidth);

	//tipcontent
	
	$(".tipcontentsArea").children().remove();
	$.each(tipContents, function(index, item){
		var tipsHTML='<div class="form-group has-warning">'+										
					'<label class="control-label col-md-3" ></label>'+
					'<div class="col-md-4">'+
						'<textarea name="tipContents[]" class="form-control" rows="2">'+item+'</textarea>'+
					'</div>'+
					'<div class="col-md-2">'+
							(index==0?'':'<button type="button" required class="btn red" onclick="remove_tip($(this))" >Remove</button>')+
					'</div>'+
				'</div>';
				$(".tipcontentsArea").append($(tipsHTML));
	});
	
	

	//bottom status
	if(bottombarSetting.bottombarStatus == "on") $("#radio10").prop("checked", true);
	else  $("#radio11").prop("checked", true);

	if(bottombarSetting.bottombarMode == "static") $("#radio20").prop("checked", true);
	else  $("#radio21").prop("checked", true);
	// $("input[name=bottomstatusvalue]").val(bottombarSetting.bottombarStatus);

	$("#bottomImgUrl").val(bottombarSetting.bottomUrl);
	if(bottombarSetting.bottomUrl!=''){
		//alert(sidebarImgUrl)
		$(".bottomaddImg").css("display","none");
		$(".bottomfiles").css("display","none");
		$("#bottomfiles_exist").css('display','block')
		$("#bottomfiles_existImg").attr('src',bottombarSetting.bottomUrl);
	}else{
		$(".bottomaddImg").css("display","block");
		$(".bottomfiles").css("display","none");
		$("#bottomfiles_exist").css('display','none')
		$("#bottomfiles_existImg").attr('src','');
	}
	$("#bottomTitleColor").val(bottombarSetting.titleColor);
	$("#bottomSubTitleColor").val(bottombarSetting.subColor);
	$("#bottomBackColor").val(bottombarSetting.backgroundColor);
	$("#bottomlogoBackColor").val(bottombarSetting.bottomlogoBackColor);
	

	//queue image status
	if(preimageSetting.prebarStatus == "on") $("#radio12").prop("checked", true);
	else  $("#radio13").prop("checked", true);	
	// $("input[name=preimagestatusvalue]").val(preimageSetting.prebarStatus);

	//logo status
	if(logoSetting.logoStatus == "on") $("#radio15").prop("checked", true);
	else  $("#radio16").prop("checked", true);
	// $("input[name=logstatusvalue]").val(logoSetting.logoStatus);

	$("#logoImgUrl").val(logoSetting.logoUrl);	
	if(logoSetting.logoUrl!=''){
		//alert(sidebarImgUrl)
		$(".logoaddImg").css("display","none");
		$(".logofiles").css("display","none");
		$("#logofiles_exist").css('display','block')
		$("#logofiles_existImg").attr('src',logoSetting.logoUrl);
	}else{
		$(".logoaddImg").css("display","block");
		$(".logofiles").css("display","none");
		$("#logofiles_exist").css('display','none')
		$("#logofiles_existImg").attr('src','');
	}
	$("#mainlogoImgWidth").val(logoSetting.mainlogoImgWidth);	
	display_modal();
}


function remove_image(logotype) {
	switch(logotype) {
		case "sidebarImage":
			$("#sidebarImgUrl").val('');
			$(".slideaddImg").css("display","block");
			$("#sidefiles_exist").css('display','none')
			$("#sidefiles_existImg").attr('src','');
			break;
		case "bottombarImage":
		
			$("#bottomImgUrl").val('');
			$(".bottomaddImg").css("display","block");
			$("#bottomfiles_exist").css('display','none')
			$("#bottomfiles_existImg").attr('src','');
			break;
		case "logoImage":
		
			$("#logoImgUrl").val('');
			$(".logoaddImg").css("display","block");
			$("#logofiles_exist").css('display','none')
			$("#logofiles_existImg").attr('src','');
			break;
	}
}
function colorPickerRender() {
	$('.demo').each(function() {		
		$(this).minicolors({
			control: $(this).attr('data-control') || 'hue',
			defaultValue: $(this).attr('data-defaultValue') || '',
			inline: $(this).attr('data-inline') === 'true',
			letterCase: $(this).attr('data-letterCase') || 'lowercase',
			opacity: $(this).attr('data-opacity'),
			position: $(this).attr('data-position') || 'bottom left',
			change: function(hex, opacity) {
				if (!hex) return;
				if (opacity) hex += ', ' + opacity;
				if (typeof console === 'object') {
					// console.log(hex);
				}
			},
			theme: 'bootstrap'
		});
	});
}

function add_tip() {
	var tipObj = 
		'<div class="form-group has-warning">'+										
			'<label class="control-label col-md-3" ></label>'+
			'<div class="col-md-4">'+
				'<textarea name="tipContents[]" required class="form-control" rows="2"></textarea>'+
			'</div>'+
			'<div class="col-md-2">'+
					'<button type="button" class="btn red" onclick="remove_tip($(this))">Remove</button>'+
			'</div>'+
		'</div>';
	$(".tipcontentsArea").append($(tipObj));	
}

function remove_tip (obj) {
	obj.parent().parent().remove();
}

function remove_stream (streamID) {
	if(confirm("Do you really want to remove this stream?")){
		// $.post( "../../include/config.php?method=removejson&param="+ streamID, 
		$.post( "/manage/include/config.php?method=removejson&param="+ streamID, 
		function( data ) {
			if(data ==true) {
				$("tr#"+streamID).remove()
			}
		});
	}
}

function save_data() {
	var streamid = $("#streamID").val();
	// console.log($("#modalForm").serializeArray())
	$("#modalForm").validate({ errorPlacement: function(error, element) {} });
	if(!$("#modalForm").valid()){
		$("#modalForm").valid()
	} else {	
		// $.post( "../../include/config.php?method=savejson", $("#modalForm").serializeArray(),
		$.post( "/manage/include/config.php?method=savejson&streamID="+streamid, $("#modalForm").serializeArray(),
		function( data ) {
			var respone_data = JSON.parse(data);
			console.log(respone_data)
			if(respone_data.status>0) {
				alert("Saved successfully.");
				clear_config();
				$("#stream_modal").modal('hide');
				// location.reload();
				if(respone_data.newstream == true){
					$("#streamTable").append($(
						'<tr id="'+streamid+'">'+
							'<td>'+ streamid +'</td>'+
							'<td>'+
								'<a class="btn" style="background-color:#009fda !important; color:white !important" onclick=view_modal('+streamid+')> Edit  </a>'+							
								'<a class="btn" style="background-color:#000 !important;  color:white !important" onclick=remove_stream('+streamid+')> Delete </a>'+
							'</td>'+
						'</tr>'));
				}
				
			}	
		});	
	}

}


function readURL(input, param) {
	if(input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			switch (param) {
				case 'sidebar' :
					$("#sidePreImage")
						.attr('src', e.target.result)
						.width(100)
						$("#sidefiles").css('display','block')
					
					break;
				case 'bottombar' :
					$("#bottomPreImage")
						.attr('src', e.target.result)
						.width(100)
						$("#bottomfiles").css('display','block')
					break;
				case 'logo' :
					$("#logoPreImage")
						.attr('src', e.target.result)
						.width(100)

						$("#logofiles").css('display','block')
					break;	
			}
			
		};	
		reader.readAsDataURL(input.files[0]);
	}
}

function imageupload(imagekind) {
	var streamid = $("#streamID").val();
	if(streamid=='') {
		alert("Please input streamID."); return false;
	}
	switch (imagekind) {
		case 'sidebarImage' :
			var uploadButton = document.getElementsByClassName('sideuploadstart')[0]; 
			var photo = document.getElementById('sidebarImage');
			var inputOjb = document.getElementById('sidebarImgUrl');
			var divObj = $("#sidefiles");
			var ExistImage = $("#sidefiles_existImg");
			var ExistImgDiv = $("#sidefiles_exist");
			var UploadArea = $(".slideaddImg");
			break;
		case 'bottomImage' :
			var uploadButton = document.getElementsByClassName('bottomuploadstart')[0]; 
			var photo = document.getElementById('bottomImage');
			var inputOjb = document.getElementById('bottomImgUrl');
			var divObj = $("#bottomfiles");

			var ExistImage = $("#bottomfiles_existImg");
			var ExistImgDiv = $("#bottomfiles_exist");
			var UploadArea = $(".bottomaddImg");
		
			break;
		case 'logoImage' :
			var uploadButton = document.getElementsByClassName('logouploadstart')[0]; 
			var photo = document.getElementById('logoImage');
			var inputOjb = document.getElementById('logoImgUrl');

			var ExistImage = $("#logofiles_existImg");
			var ExistImgDiv = $("#logofiles_exist");
			var UploadArea = $(".logoaddImg");
			var divObj = $("#logofiles");
			break;
	}
	
	uploadButton.innerHTML = 'Uploading...';

	// $(photo).simpleUpload("../../include/config.php?method=imageupload&kind=" + imagekind + "&streamID="+streamid, {
	$(photo).simpleUpload("/manage/include/config.php?method=imageupload&kind=" + imagekind + "&streamID="+streamid, {

		start: function(file){
			//upload started
			// console.log("upload started");
		},

		progress: function(progress){
			//received progress
			// console.log("upload progress: " + Math.round(progress) + "%");
		},

		success: function(_data){
			//upload successful
			var data = JSON.parse(_data)
			if(data.status=="success" || data.status=="exist") {
				uploadButton.innerHTML = '<i class="fa fa-upload"></i>Upload';
				$(inputOjb).val(data.url);
				ExistImage.attr('src',"."+data.url);
				ExistImgDiv.css('display','block')
				UploadArea.css("display","none");
				divObj.css('display','none')
			} else {
				uploadButton.innerHTML = '<i class="fa fa-upload"></i>Upload';
				alert(data.message);
				divObj.css('display','none')
			}
		},

		error: function(error){
			//upload failed
			console.log("upload error: " + error.name + ": " + error.message);
		}

	});


	// <i class="fa fa-upload"></i>Upload
  
   
}