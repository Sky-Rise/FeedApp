function SRContentBox(options)
{
	if(options.parentContainer)
	{
	
	var parentContainer = options.parentContainer;
	var imgLink = options.imgLink || null;
	var textTitle = options.textTitle || null;
	var text = options.text || null;
	var articleLink = options.articleLink || null;

	
	var spinnerOpts = {
	  lines: 10, 				// The number of lines to draw
	  length: 4, 				// The length of each line
	  width: 5, 				// The line thickness
	  radius: 7, 				// The radius of the inner circle
	  corners: 1, 				// Corner roundness (0..1)
	  rotate: 0, 				// The rotation offset
	  color: '#626262', 		// #rgb or #rrggbb
	  speed: 1, 				// Rounds per second
	  trail: 60, 				// Afterglow percentage
	  shadow: false,            // Whether to render a shadow
	  hwaccel: false, 			// Whether to use hardware acceleration
	  className: 'spinner',		// The CSS class to assign to the spinner
	  zIndex: 2e9, 				// The z-index (defaults to 2000000000)
	  top: 'auto', 				// Top position relative to parent in px
	  left: 'auto' 				// Left position relative to parent in px
	};
		
	
	// create etities
	var boxDiv = document.createElement('div');
	var boxContentDiv = document.createElement('div');
	var boxTextDiv = document.createElement('div');
	
	var boxImgDiv = document.createElement('div');
	var boxImg = document.createElement('img');
	
	var boxTextHead = document.createElement('h1');
	var boxTextParagraph = document.createElement('p');
	var spinnerTarget = boxImgDiv;
	var spinner = new Spinner(spinnerOpts); 

	// init styles
	boxDiv.className='articleBox';
	boxContentDiv.className='articleContent';
	boxImgDiv.className='articleImg';
	boxTextDiv.className='articleText';
	
	// set content
	textTitle ? $(boxTextHead).text(textTitle) : $(boxTextHead).text('set the title!');
	text ? $(boxTextParagraph).text(text) : $(boxTextParagraph).text('set content text');
		
	// add subdiv's
	$(boxDiv).append(boxContentDiv);
	imgLink ? $(boxContentDiv).append(boxImgDiv) : boxTextDiv.className='articleTextWithoutImg';
	$(boxContentDiv).append(boxTextDiv);
	$(boxTextDiv).append(boxTextHead);
	$(boxTextDiv).append(boxTextParagraph);
	
	// add entire box
	$(parentContainer).append(boxDiv);
	// spin
	spinner.spin(spinnerTarget);
	
	var loader = new PxLoader(); 
	boxImg = loader.addImage(imgLink);

	
	// callback that will be run once images are ready 
	loader.addCompletionListener(function() { 
        $(boxImgDiv).append(boxImg);
        $(boxImg).hide();
        $(boxImgDiv).animate({height: $(boxImg).height()}, 250, 
                              function(){
	                              spinner.stop();
	                              delete spinner;
	                              $(boxImg).fadeIn(350);
	                              
	                              var evt = document.createEvent('UIEvents');
	                              evt.initUIEvent('resizeImgDiv', true, false,window,0);
	                              window.dispatchEvent(evt);
	                              });
	}); 
	// log the name of every resource as its loaded 
	loader.addProgressListener(function(e) { 
		console.log(e.completedCount); 
	}); 
	
	// begin downloading images 
	loader.start(); 
	
	// calculate panels number
	var textDivHeigth = $(boxTextDiv).height();
	if(textDivHeigth > 59) 
	{
		var hPanelsNumber = (textDivHeigth - textDivHeigth % 60) / 60;
    } 
    else var hPanelsNumber = 1;
    
    var btnsHiddenBoxH = 40;
    var acordionAnchor =  30 + btnsHiddenBoxH / hPanelsNumber;

	//alert(textDivHeigth);
	var domi = $(boxTextDiv).oriDomi({ hPanels           : hPanelsNumber, 
									   vPanels           : 1,
									   touchEnabled      : false,
									   forceAntialiasing : false,
									   speed             : 250,
									   shadingIntensity  : 1});

	$(boxDiv).bind('mouseenter', function(){
						//"div:first",this
					$(boxTextDiv, this).oriDomi('accordion',-acordionAnchor, 1);
			  	}).bind('mouseleave', function(){ 
				$(boxTextDiv, this).oriDomi().reset();
				});
	}
}

$(document).ready(function() {
		
	box = new SRContentBox({ parentContainer:'#mainContentDiv',
                              imgLink:'http://egorkotov.35photo.ru/photos/20130303/490536.jpg',
                              textTitle:'Empty function to be used as placeholder for callback defaults (instead of creating separate empty functions).',
                              text:'Currently, Firefox doesn\'t handle edge anti-aliasing well and oriDomi edges look jagged. This setting forces Firefox to smooth edges, but usually results in poor performance, so it\'s not recommended for animation-heavy use of oriDomi until Firefox\'s transform performance improves.',
                              articleLink:''});
	
	box2 = new SRContentBox({ parentContainer:'#mainContentDiv',
	imgLink:'http://timeworks.35photo.ru/photos/20101217/211436.jpg',
	textTitle:'Empty function to be used as placeholder for callback defaults (instead of creating separate empty functions).',
	text:'Currently, Firefox doesn\'t handle edge anti-aliasing well and oriDomi edges look jagged. This setting forces Firefox to smooth edges, but usually results in poor performance, so it\'s not recommended for animation-heavy use of oriDomi until Firefox\'s transform performance improves.',
	articleLink:''});
	
	box3 = new SRContentBox({ parentContainer:'#mainContentDiv',
	imgLink:'http://35photo.ru/photos_series/302/302411.jpg',
	textTitle:'Empty function to be used as placeholder for callback defaults (instead of creating separate empty functions).',
	text:'Currently, Firefox doesn\'t handle edge anti-aliasing well and oriDomi edges look jagged. This setting forces Firefox to smooth edges, but usually results in poor performance, so it\'s not recommended for animation-heavy use of oriDomi until Firefox\'s transform performance improves.',
	articleLink:''});
	
	box4 = new SRContentBox({ parentContainer:'#mainContentDiv',
	imgLink:'http://tokaevabella.35photo.ru/photos/20110225/225916.jpg',
	textTitle:'Empty function to be used as placeholder for callback defaults (instead of creating separate empty functions).',
	text:'Currently, Firefox doesn\'t handle edge anti-aliasing well and oriDomi edges look jagged. This setting forces Firefox to smooth edges, but usually results in poor performance, so it\'s not recommended for animation-heavy use of oriDomi until Firefox\'s transform performance improves.',
	articleLink:''});
	
	box5 = new SRContentBox({ parentContainer:'#mainContentDiv',
	imgLink:'http://rolek.35photo.ru/photos/20101115/198115.jpg',
	textTitle:'Empty function to be used as placeholder for callback defaults (instead of creating separate empty functions).',
	text:'Currently, Firefox doesn\'t handle edge anti-aliasing well and oriDomi edges look jagged. This setting forces Firefox to smooth edges, but usually results in poor performance, so it\'s not recommended for animation-heavy use of oriDomi until Firefox\'s transform performance improves.',
	articleLink:''});
	
	box6 = new SRContentBox({ parentContainer:'#mainContentDiv',
	imgLink:'http://belyaevasveta.35photo.ru/photos/20121101/428905.jpg',
	textTitle:'Empty function to be used as placeholder for callback defaults (instead of creating separate empty functions).',
	text:'Currently, Firefox doesn\'t handle edge anti-aliasing well and oriDomi edges look jagged. This setting forces Firefox to smooth edges, but usually results in poor performance, so it\'s not recommended for animation-heavy use of oriDomi until Firefox\'s transform performance improves.',
	articleLink:''});
	
	box7 = new SRContentBox({ parentContainer:'#mainContentDiv',
	textTitle:'Empty function to be used as placeholder for callback defaults (instead of creating separate empty functions).',
	text:'Currently, Firefox doesn\'t handle edge anti-aliasing well and oriDomi edges look jagged. This setting forces Firefox to smooth edges, but usually results in poor performance, so it\'s not recommended for animation-heavy use of oriDomi until Firefox\'s transform performance improves.',
	articleLink:''});
	
	box8 = new SRContentBox({ parentContainer:'#mainContentDiv',
	imgLink:'http://voda.35photo.ru/photos/20091028/109136.jpg',
	textTitle:'Empty function to be used as placeholder for callback defaults (instead of creating separate empty functions).',
	text:'Currently, Firefox doesn\'t handle edge anti-aliasing well and oriDomi edges look jagged. This setting forces Firefox to smooth edges, but usually results in poor performance, so it\'s not recommended for animation-heavy use of oriDomi until Firefox\'s transform performance improves.',
	articleLink:''});
	
	box9 = new SRContentBox({ parentContainer:'#mainContentDiv',
	imgLink:'http://laceslice.35photo.ru/photos/20090821/99143.jpg',
	textTitle:'Empty function to be used as placeholder for callback defaults (instead of creating separate empty functions).',
	text:'Currently, Firefox doesn\'t handle edge anti-aliasing well and oriDomi edges look jagged. This setting forces Firefox to smooth edges, but usually results in poor performance, so it\'s not recommended for animation-heavy use of oriDomi until Firefox\'s transform performance improves.',
	articleLink:''});
	
	box10 = new SRContentBox({ parentContainer:'#mainContentDiv',
	imgLink:'http://whissper.35photo.ru/photos/20121121/439863.jpg',
	textTitle:'Empty function to be used as placeholder for callback defaults (instead of creating separate empty functions).',
	text:'Currently, Firefox doesn\'t handle edge anti-aliasing well and oriDomi edges look jagged. This setting forces Firefox to smooth edges, but usually results in poor performance, so it\'s not recommended for animation-heavy use of oriDomi until Firefox\'s transform performance improves.',
	articleLink:''});
	
	
	function onResizeImgDiv()
	{
		$('#mainContentDiv').masonry('reload');
	}			 
	
	// add event listener to resizeImgDiv event from contentBoxes
	window.addEventListener('resizeImgDiv',onResizeImgDiv);		 
	
	/*
	isAnimated: true,
	animationOptions: {
	  					duration: 750,
	  					easing: 'linear',
	  					queue: false
					  }
	*/
	
	$('#mainContentDiv').masonry({
		// options
		itemSelector : '.articleBox',
		columnWidth : 285,
		isFitWidth: true,
		isResizable: true
	  });
	  
	 
	  
});