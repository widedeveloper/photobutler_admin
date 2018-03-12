

function view_modal (streamID) {
	if(streamID == 'new'){
		display_modal()
	} else {
		$.get( "http://159.89.180.81/app/ajax.php?method=tipjson&param=" + streamID, function( data ) {
			if(data == "noConfig"){
				console.log(streamID, data)
				$("#streamID").val(streamID);
				display_modal()
			} else {
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
	$("#sidebarTitle").val(sidebarTitle);
	$("#sidebarSubTitle").val(sidebarSubTitle);
	$("#sidebarImgUrl").val(sidebarImgUrl);
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
	// $("input[name=bottomstatusvalue]").val(bottombarSetting.bottombarStatus);

	$("#bottomImgUrl").val(bottombarSetting.bottomUrl);
	$("#bottomTitleColor").val(bottombarSetting.titleColor);
	$("#bottomSubTitleColor").val(bottombarSetting.subColor);
	$("#bottomBackColor").val(bottombarSetting.backgroundColor);

	//queue image status
	if(preimageSetting.prebarStatus == "on") $("#radio12").prop("checked", true);
	else  $("#radio13").prop("checked", true);	
	// $("input[name=preimagestatusvalue]").val(preimageSetting.prebarStatus);

	//logo status
	if(logoSetting.logoStatus == "on") $("#radio15").prop("checked", true);
	else  $("#radio16").prop("checked", true);
	// $("input[name=logstatusvalue]").val(logoSetting.logoStatus);

	$("#logoImgUrl").val(logoSetting.logoUrl);	
	display_modal();
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
		$.post( "../../include/config.php?method=removejson&param="+ streamID, 
		// $.post( "/manage/include/config.php?method=removejson&param="+ streamID, 
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
		$.post( "../../include/config.php?method=savejson", $("#modalForm").serializeArray(),
		// $.post( "/manage/include/config.php?method=savejson", $("#modalForm").serializeArray(),
		function( data ) {
			var respone_data = JSON.parse(data);
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
								'<a class="btn btn-outline green"  onclick=view_modal('+streamid+')> Edit Configuration </a>'+
							
								'<a class="btn btn-outline red"  onclick=remove_stream('+streamid+')> Remove </a>'+
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
			break;
		case 'bottomImage' :
			var uploadButton = document.getElementsByClassName('bottomuploadstart')[0]; 
			var photo = document.getElementById('bottomImage');
			var inputOjb = document.getElementById('bottomImgUrl');
			var divObj = $("#bottomfiles");
			break;
		case 'logoImage' :
			var uploadButton = document.getElementsByClassName('logouploadstart')[0]; 
			var photo = document.getElementById('logoImage');
			var inputOjb = document.getElementById('logoImgUrl');
			var divObj = $("#logofiles");
			break;
	}
	
	uploadButton.innerHTML = 'Uploading...';

	$(photo).simpleUpload("../../include/config.php?method=imageupload&kind=" + imagekind + "&streamID="+streamid, {

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