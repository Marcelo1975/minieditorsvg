<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no">

    <!-- Edit The description of your site in the next meta -->
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <script src="//code.jquery.com/jquery-3.3.1.js"></script>
    <!-- End colorPicker bootstrap -->

    <!--<script type="text/javascript" src="assets/js/jquery-3.1.1.min.js"></script>-->
    <!--<script> $ = jQuery.noConflict();</script>-->
      
    <!-- Title -->
    <title>Ferramenta de Design</title>
    <!-- Flaticon -->
    <link rel="icon" type="image/ico" href="img/icons/icone.png"> 
    
    <!--========================================
      CSS Stylesheets
    =========================================-->

    <!-- BootStrap -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel='stylesheet' href="css/spectrum.css">

    <link rel="stylesheet" type="text/css" href="css/style.css">

    <!-- Fonts css -->
    <link rel="stylesheet" href="fonts.css">

    <!-- Font Awesome -->
    <link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">

    <!-- Google Fonts -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700" rel="stylesheet" /> -->
    <link href="https://fonts.googleapis.com/css?family=Aguafina+Script%7CAkronim%7CAlex+Brush%7CAnton%7CRaleway:300,400,500,700" rel="stylesheet">

    <!-- spectrum - The No Hassle Colorpicker -->

    <script src="js/spectrum.js"></script>
    <link rel="stylesheet" type="text/css" href="css/spectrum.css">
    <script src="https://kit.fontawesome.com/7453dcd5e3.js" crossorigin="anonymous"></script>
  </head>
  <body>
    
    <!--========================================
      design area
    =========================================-->
    <!-- Container -->
    <div class="container-fluid">
        
        <div class="design_area">
          <div class="canvas-container">
            <div class="canvas_area_front" id="mySvg">
                <canvas id="front_canvas"></canvas>
              </div>             
          </div>
        </div>

        <!-- svg tag -->
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	      width="150" height="150" xml:space="preserve"><rect width="150" height="150"/>
        <path d="M0,0l27.281,38.375L55.063,1.5L0,0z M15.156,8.063l26.281,1.531L27.281,26.25L15.156,8.063z"/>
        <path d="M14.653,8.058L27.28,25.23l2.021,1.01L40.917,8.563L14.653,8.058z"/>
        <path d="M6.572,43.413l0.505,7.576l50.003,0.505l-0.505-7.071L6.572,43.413z"/>
        <path d="M7.077,54.02l0.505,7.576l49.498,1.01l-0.505-7.071L7.077,54.02z"/>
        <path d="M7.582,65.131l0.505,8.586l48.993,0.505v-6.566L7.582,65.131z"/>
        </svg>

    
    <!-- ========== End design area =================== -->

  
    <!--========================================
      left design tool
    =========================================-->
    <div class="design_tool">
      <ul>
        <li class="add_text">
          
          <div class="text_tool_window" id="draggable">
            <div class="header clear_fix">
              <p class="title"><i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar detalhes</p>
              <i id="close_window" class="fa fa-window-close" aria-hidden="true"></i>
            </div>
            <a class="open_window" href="#">
              <i class="fa fa-text-width" aria-hidden="true"></i>
              <span>Ad. texto</span>
            </a>            
            <textarea id="text_area">Olá
            </textarea>
            <hr>
            <div class="wrapper clear_fix">
                  <div class="font_area">
                    <p>Mudar a fonte</p>
                    <select id="text_font">
                        <!-- all fonts -->
                        <option value="Arial">Arial</option>
                        <option value="Tahoma">Tahoma</option>
                        <option value="Times New Roman">Times New Roman</option>
                        <option value="Anton">Anton</option>
                        <option value="Akronim">Akronim</option>
                        <option value="Alex Brush">Alex Brush</option>
                        <option value="Aguafina Script">Aguafina Script</option>
                        <option value="Arvo, sans-serif">Arvo</option>
                        <option value="'Courier New', Courier, monospace">Courier</option>
                        <option value="Euphoria, sans-serif">Euphoria</option>
                        <option value="Georgia, Times, 'Times New Roman', serif">Georgia</option>
                        <option value="Helvetica, Arial, sans-serif" selected="selected">Helvetica</option>
                        <option value="Junction, sans-serif">Junction</option>
                        <option value="'League Gothic', sans-serif">League Gothic</option>
                        <option value="Oswald, sans-serif">Oswald</option>
                        <option value="'Palatino Linotype', 'Book Antiqua', Palatino, serif">Palatino</option>
                        <option value="'Trebuchet MS', Gadget, sans-serif">Trebuchet</option>
                        <option value="'Shadows Into Light', serif">Shadows Into Light</option>
                        <option value="'Simonetta', serif">Simonetta</option>
                        <option value="'Times New Roman', Times, serif">Times</option>
                    </select>
                  </div>
                  <div class="color_area">
                    <p>Cores do texto</p>
                    <!-- colour -->
                    <input type="text" id="text_colour" class='startEmpty' value="" style="display: none;">
              </div>
            </div>
                <div class="font_style">
                  <p>Estilo do texto</p>
                  <select id="text_style">
                    <!-- font style -->
                    <option>normal</option>
                    <option>italic</option>
                    <option>oblique</option>
                    <option>bold</option>
                  </select>
                  <p>Alterando cor do fundo</p>
                  <select id="color" class="styled-select">
                    <option value="transparent">Transparent</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                    <option value="blue">Blue</option>
                    <option value="black">Black</option>
                </select> 
                </div>
                <div class="font_size">
                  <!-- font size -->
                  <p>Tamanho da fonte :</p> <input type="range" min="0" max="100" value="30" id="text_size"><br>
                </div>
                <p>Zoom</p>
                <button class="btn btn-danger" id="zoomIn">+</button>
                <button class="btn btn-danger" id="zoomOut">-</button>
                <hr/>
                <button type="button" id="undo" >Desfazer</button>
                <button type="button" id="redo" disabled>Refazer</button>
          </div>
        </li>
        <li>
            <a href="#" data-toggle="modal" data-target="#svgUploadModal"><i class="far fa-file-image"></i><span>Abrir svg</span>
            </a>
        </li>
        <li>
				  	<a href="#" data-toggle="modal" data-target="#imgUploadModal"><i class="fa fa-picture-o" aria-hidden="true"></i><span>Add image</span></a>
				</li>
        <li>
            <a href="#" class="reset_btn"><i class="fa fa-refresh" aria-hidden="true"></i><span>Apagar</span></a>
        </li>
        <li>
          <a href="#" id="saveBtn" class="export_btn"><i class="fa fa-arrow-up arrow" aria-hidden="true"></i>
            <span id="dwn">Salvar</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- ========== End left design tool =================== -->  
    </div> <!-- fim container -->
    </div>

    <!--========================================
      SVG Upload Modal
    =========================================-->
    <div class="modal fade" id="svgUploadModal" role="dialog">
      <div class="modal-dialog modal-lg">

        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Fazer upload de svg</h4>
            </div>
            <div class="modal-body bg-dark text-white text-center">            
            <form id="formSvg" method="post" enctype="multipart/form-data" action="">
            <div class="box-wrapper">
              <button class="btn btn-success btn-block up">
                <i class="fas fa-upload"></i> Carregue Sua Svg
              </button>
              <input type="file" class="file" id="svg" name="svg" class="form-control" accept="image/*" multiple />
            </div>
            </form>
            </div>
          
            <div class="modal-footer">

            <button type="button" class="btn btn-default btn_add_svg" name="button">Enviar SVG</button>

            <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ========== End SVG Upload Modal =================== -->
    <!--========================================
			Image Upload Modal
		=========================================-->
		<div class="modal fade" id="imgUploadModal" role="dialog">
			<div class="modal-dialog modal-lg">

				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Fazer Upload da Image</h4>
					</div>
					<div class="modal-body bg-dark text-white text-center">
          <div class="box-wrapper">
              <button class="btn btn-success btn-block up">
                  <i class="fas fa-upload"></i> Carregue Sua Imagem
              </button>
						<input type="file" class="file" id="imgfile" accept="image/*" multiple>
					</div>
					<div class="modal-footer">

						<button type="button" class="btn btn-default btn_add_image" name="button">Enviar Img</button>

					    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>
					</div>
				</div>
			</div>
		</div>
        <!-- ========== End Image Upload Modal =================== -->    
        
    <!--========================================
    JavaScript Files
    =========================================-->

    <script src="js/bootstrap.min.js"></script>

    <script defer src='js/spectrum.js'></script>

    <script defer type="text/javascript" src="js/fabric.min.js"></script>
    <script defer type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="market/pages/full_screen_preview/index.js"></script>
    <script type="text/javascript" src="js/jquery.nicescroll.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

    <script>
      $( function() {
        $( "#draggable" ).draggable();
      });
    </script>

    <!-- ========== End JavaScript =================== -->
    <!-- https://www.vecteezy.com/free-vector/t-shirt -->
    <div class="sp-container sp-hidden sp-light sp-input-disabled sp-palette-buttons-disabled sp-palette-disabled sp-initial-disabled">
        <div class="sp-palette-container">
            <div class="sp-palette sp-thumb sp-cf"></div>
            <div class="sp-palette-button-container sp-cf">
                <button type="button" class="sp-palette-toggle">less</button>
            </div>
        </div>
        <div class="sp-picker-container">
            <div class="sp-top sp-cf">
                <div class="sp-fill"></div>
                <div class="sp-top-inner">
                    <div class="sp-color" style="background-color: rgb(255, 0, 0);">
                    <div class="sp-sat">
                        <div class="sp-val">
                            <div class="sp-dragger" style="top: 0px; left: 0px;"></div>
                        </div>
                    </div>
                </div>
                <div class="sp-clear sp-clear-display" title="Clear Color Selection" style="display: none;"></div>
                <div class="sp-hue">
                    <div class="sp-slider" style="top: 0px;"></div>
                </div>
            </div>
            <div class="sp-alpha">
                <div class="sp-alpha-inner">
                    <div class="sp-alpha-handle" style="left: 0px;"></div>
                </div>
            </div>
        </div>
        <div class="sp-input-container sp-cf">
            <input class="sp-input" type="text" spellcheck="false">
        </div>
        <div class="sp-initial sp-thumb sp-cf"></div>
        <div class="sp-button-container sp-cf">
            <a class="sp-cancel" href="#">Cancelar</a>
            <button type="button" class="sp-choose">Aplicar</button>
        </div>
    </div>
</div>
</body>
</html>
