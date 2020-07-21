"use strict";
$(function(){

	// front canvas
	var frontCanvas = new fabric.Canvas('front_canvas', { 
		preserveObjectStacking: true,
		hoverCursor: 'pointer',
		selection: true,
		selectionBorderColor: 'green',
		backgroundColor: null,
		width: $('#front_canvas').width(),
        height: $('#front_canvas').height()
	});
	// change background
	$('select#color').on('change', function() {
		frontCanvas.backgroundColor = this.value;
		frontCanvas.renderAll();
	});

	// undo redo
	var canvasDemo = (function(){
		//var frontCanvas = new fabric.Canvas('canvas',{backgroundColor : "#f5deb3"});
		var _config = {
			canvasState             : [],
			currentStateIndex       : -1,
			undoStatus              : false,
			redoStatus              : false,
			undoFinishedStatus      : 1,
			redoFinishedStatus      : 1,
			undoButton              : document.getElementById('undo'),
			redoButton              : document.getElementById('redo'),
		};
		frontCanvas.on(
			'object:modified', function(){
		  		updateCanvasState();
			}
		);

		frontCanvas.on(
			'object:added', function(){
		  		updateCanvasState();
			}
		);

		var updateCanvasState = function() {
			if((_config.undoStatus == false && _config.redoStatus == false)){
				var jsonData        = frontCanvas.toJSON();
				var canvasAsJson        = JSON.stringify(jsonData);
				if(_config.currentStateIndex < _config.canvasState.length-1){
					var indexToBeInserted                  = _config.currentStateIndex+1;
					_config.canvasState[indexToBeInserted] = canvasAsJson;
					var numberOfElementsToRetain           = indexToBeInserted+1;
					_config.canvasState                    = _config.canvasState.splice(0,numberOfElementsToRetain);
				}else{
		    		_config.canvasState.push(canvasAsJson);
				}
		    	_config.currentStateIndex = _config.canvasState.length-1;
		  		if((_config.currentStateIndex == _config.canvasState.length-1) && _config.currentStateIndex != -1){
		    		_config.redoButton.disabled= "disabled";
		  		}
			}
		}


		var undo = function() {
			if(_config.undoFinishedStatus){
				if(_config.currentStateIndex == -1){
		    	_config.undoStatus = false;
				}
				else{
				    if (_config.canvasState.length >= 1) {
			    		_config.undoFinishedStatus = 0;
				      	if(_config.currentStateIndex != 0){
						    	_config.undoStatus = true;
						      	frontCanvas.loadFromJSON(_config.canvasState[_config.currentStateIndex-1],function(){
									var jsonData = JSON.parse(_config.canvasState[_config.currentStateIndex-1]);
							    	frontCanvas.renderAll();
						      		_config.undoStatus = false;
						      		_config.currentStateIndex -= 1;
									_config.undoButton.removeAttribute("disabled");
									if(_config.currentStateIndex !== _config.canvasState.length-1){
										_config.redoButton.removeAttribute('disabled');
									}
									_config.undoFinishedStatus = 1;
					      	});
				      	}
				      	else if(_config.currentStateIndex == 0){
				      		frontCanvas.clear();
							_config.undoFinishedStatus = 1;
							_config.undoButton.disabled= "disabled";
							_config.redoButton.removeAttribute('disabled');
				      		_config.currentStateIndex -= 1;
				      	}
				    }
				}
			}
		}

		var redo = function() {
			if(_config.redoFinishedStatus){
				if((_config.currentStateIndex == _config.canvasState.length-1) && _config.currentStateIndex != -1){
					_config.redoButton.disabled= "disabled";
				}else{
				  	if (_config.canvasState.length > _config.currentStateIndex && _config.canvasState.length != 0){
						_config.redoFinishedStatus = 0;
				    	_config.redoStatus = true;
				      	frontCanvas.loadFromJSON(_config.canvasState[_config.currentStateIndex+1],function(){
							var jsonData = JSON.parse(_config.canvasState[_config.currentStateIndex+1]);
						    frontCanvas.renderAll();
					    	_config.redoStatus = false;
				      		_config.currentStateIndex += 1;
							if(_config.currentStateIndex != -1){
								_config.undoButton.removeAttribute('disabled');
							}
							_config.redoFinishedStatus = 1;
					        if((_config.currentStateIndex == _config.canvasState.length-1) && _config.currentStateIndex != -1){
					          	_config.redoButton.disabled= "disabled";
					        }
				      	});
				    }
				}
			}
		}


		return {
			//addObject  : addObject,
			undoButton : _config.undoButton,
			redoButton : _config.redoButton,
			undo       : undo,
			redo       : redo,
		}


	})();



	canvasDemo.undoButton.addEventListener('click',function(){
		canvasDemo.undo();
	});

	canvasDemo.redoButton.addEventListener('click',function(){
		canvasDemo.redo();
	});


	// by default t-shirt front side is shown
	var frontFace = true;

	frontCanvas.on({
		'object:selected':onObjectSelected,
		'selection:cleared':onSelectedCleared,
		'object:modified':onObjectModified,
	});

	function onObjectSelected(e) {
		var selectedObject = e.target;
        if (selectedObject && selectedObject.type != 'image') {
			$('.text_tool_window').addClass("show");
        }

        addDeleteBtn(e.target.oCoords.mt.x, e.target.oCoords.mt.y, e.target.width);
	}

	function onSelectedCleared(e){
		$('.text_tool_window').removeClass("show");
		$(".deleteBtn").remove();
	}

	function onObjectModified(e){
		addDeleteBtn(e.target.oCoords.mt.x, e.target.oCoords.mt.y, e.target.width);
	}

	// zoom
	$('#zoomIn').click(function(){
        frontCanvas.setZoom(frontCanvas.getZoom() * 1.1 ) ;
    }) ;
    
    $('#zoomOut').click(function(){
        frontCanvas.setZoom(frontCanvas.getZoom() / 1.1 ) ;
    }) ;

	$(".open_window, #close_window").on( "click", function() {
		var text_tool_window = $('.text_tool_window');
		text_tool_window.toggleClass('show');
		$('#text_area').css('display', 'block');
	});

	// text area keyup listener
	$("#text_area").on( "keyup", function() {

		if(frontFace){
			var obj = frontCanvas.getActiveObject();
			if(obj){
				obj.setText(this.value);
				frontCanvas.renderAll();
			}
		}
	});

	$(".open_window").on( "click", function() {
		
		// add text into canvas
		var oText = new fabric.IText('', {
			left: 50,
			top: 100
		});
		
		if(frontFace){
			frontCanvas.add(oText);
			frontCanvas.setActiveObject(oText);
		}
		$('#text_font, #text_colour, #text_style, #text_size, #undo, #redo, #zoomIn, #zoomOut').trigger('change');
		oText.bringToFront();
	});

	// font change listener 
	$('#text_font').on("change", function(){
	    if(frontFace){
	      var obj = frontCanvas.getActiveObject();
	    }
	    if(obj){
	      obj.setFontFamily($(this).val());
	    }
	    frontCanvas.renderAll();
	});

	// adding spectrum color picker
	$("#text_colour").spectrum({
		allowEmpty: true,
		showAlpha: true,
		showPalette: true,
		chooseText: "Aplicar",
    	cancelText: "Cancelar",
		palette: [ ],
		showSelectionPalette: true, // true by default
		selectionPalette: ["red", "green", "blue"],
	    change: function(color) {
		    if(frontFace){
		      var obj = frontCanvas.getActiveObject();
		    }
		    if(obj){
		      obj.setFill(color.toRgbString());
		    }
		    frontCanvas.renderAll();
		}
	});

	// text style change listener
	$('#text_style').on("change", function(){
	    if(frontFace){
	      var obj = frontCanvas.getActiveObject();
	    }
	    if(obj){
	      obj.setFontStyle($(this).val());
	    }
	    frontCanvas.renderAll();
	});

	// font size change listener
	$('#text_size').on("change", function(){
		
		if(frontFace){
	      var obj = frontCanvas.getActiveObject();
	    }
	    
	    if(obj){
	      obj.setFontSize($(this).val());
	    }

	    frontCanvas.renderAll();

	});

	var file;
	$('#imgfile').on("change", function (e) {
		file = e.target.files[0];	
	});

	$(".btn_add_image").on( "click", function() {

		$("[data-dismiss=modal]").trigger({ type: "click" });
		

		// add image into canvas
		var reader = new FileReader();

		reader.onload = function (f) {
		
			var data = f.target.result;
			
			fabric.Image.fromURL(data, function (img) {
				var oImg = img.set({left: 100, top: 100, width: 150, height: 150, angle: 0}).scale(0.9);
				
				if(frontFace){
					frontCanvas.add(oImg).renderAll();
					frontCanvas.setActiveObject(oImg);
				}
				else{
				    backCanvas.add(oImg).renderAll();
				    backCanvas.setActiveObject(oImg);
				}
			});
		};
		reader.readAsDataURL(file);
	});

	// add svg into canvas
	$(".btn_add_svg").on( "click", function () {
		$("[data-dismiss=modal]").trigger({ type: "click" });
		var file = document.querySelector('input[type=file]').files[0];
		var readerSvg = new FileReader();

		readerSvg.addEventListener("load", function (f) {
			var types = ["image/png", "image/jpeg", "image/gif", "image/svg+xml"];
			var data = f.target.result;

			fabric.loadSVGFromURL(data, function(objects, options) {
			    frontCanvas.renderAll();
			},function(item, object) {
				if (object.type == 'text') {
					var itext = new fabric.IText('text');
					for (var attr in object) {
						if (object.hasOwnProperty(attr) && attr != 'type' && attr != 'transformMatrix') {
							console.log(attr + ': '+ object[attr]);
							itext[attr] = object[attr];
						}
					}
					
					object = itext;
					object.originX = 'center';
					object.originY = 'center';
				}
				frontCanvas.add(object);
				frontCanvas.setActiveObject(object);
				if (object.type == 'image') {
					frontCanvas.sendToBack(object);
				}
			});

		}, false);
	
		if (file) {
			readerSvg.readAsDataURL(file);
		}
	});

	// save project svg
	$("#saveBtn").on('click', function() {
		
        var filedata = frontCanvas.toSVG(); // the SVG file is now in filedata
    
        var locfile = new Blob([filedata], {type: "image/svg+xml;charset=utf-8"});
        var locfilesrc = URL.createObjectURL(locfile);//mylocfile);
    
        var dwn = document.getElementById('dwn');
		dwn.innerHTML = "<a href=" + locfilesrc + " download='mysvg.svg'><i class='fas fa-cloud-download-alt'></i> Download</a>";
		
		$('.arrow').remove();
		setTimeout(function(){
			$('#dwn').remove();
			$('.export_btn').css('display', 'none');
		},5000);
		$(function() {
			setTimeout(function(){
				location.reload();
			}, 10000);
		});
		//window.location.href = window.location.href;
	});

	// converts a canvas to an image
	function convertCanvasToImage(can) {
		var image = new Image();
		image.src = can.toDataURL("image/png");
		return image;
	};

	// add deleteIcon to an element
	function addDeleteBtn(x, y, w){

		$(".deleteBtn").remove(); 
		var btnLeft = x;
		var btnTop = y - 10;
		var widthadjust=w/2;
		btnLeft=widthadjust+btnLeft+250;
		
		var deleteBtn = '<i class="fa fa-trash-alt deleteBtn" aria-hidden="true" style="position:absolute;top:'+btnTop+'px;left:'+btnLeft+'px;cursor:pointer;"></i>';

		$(".canvas_area_front").append(deleteBtn);

		// delete icon click listener	
		$(".deleteBtn").on( "click", function() {
			
			if(frontCanvas.getActiveGroup()){
				frontCanvas.getActiveGroup().forEachObject(function(o){ frontCanvas.remove(o); });
				frontCanvas.discardActiveGroup().renderAll();
			}

			else {

				frontCanvas.remove(frontCanvas.getActiveObject());
			}

			$(".deleteBtn").remove(); 

		});
	}


	// reset button click listener
	$(".reset_btn").on( "click", function() {
			
		if(frontFace)
			frontCanvas.clear();

	});

});