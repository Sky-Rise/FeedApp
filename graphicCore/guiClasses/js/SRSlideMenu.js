function SRSlideMenu() {

// --------------------------------------
// flags
   var goHome = false;
   var settings = false;
   var userProfile = false;
   
   var showMore = false;
   var refreshContent = false;
   
   var spinnerIsShow = false;
   var logoIsShow = true;
   
   var mouseOverActiveElement = false;
   
   
   var spinnerOpts = {
     lines: 10, 				// The number of lines to draw
     length: 4, 				// The length of each line
     width: 5, 				    // The line thickness
     radius: 7, 				// The radius of the inner circle
     corners: 1, 				// Corner roundness (0..1)
     rotate: 0, 				// The rotation offset
     color: '#FFF', 			// #rgb or #rrggbb
     speed: 1, 				    // Rounds per second
     trail: 60, 				// Afterglow percentage
     shadow: false,             // Whether to render a shadow
     hwaccel: false, 			// Whether to use hardware acceleration
     className: 'spinner',		// The CSS class to assign to the spinner
     zIndex: 2e9, 				// The z-index (defaults to 2000000000)
     top: 'auto', 				// Top position relative to parent in px
     left: 'auto' 				// Left position relative to parent in px
   };
   
   var spinnerTarget = document.getElementById('middle-element');
   var spinner = new Spinner(spinnerOpts); 
   
// --------------------------------------
function showSpinner()
{
	$(spinnerTarget).css({ opacity: 0 });
	spinner.spin(spinnerTarget);
    $(spinnerTarget).animate({ opacity: 1 }, 300, 'swing');	
}

// --------------------------------------
function hideSpinner()
{
	if(spinner)
	{
		$('.spinner').animate(
			{ opacity: 0 }, 
			300, 
			'swing',
			function() {
						spinner.stop();
						delete spinner;
						});
	}
}

// --------------------------------------
function showSubmenu()
    {
      if(!$('#hiddenSubmenu').is(':visible')){
		    $('#hiddenSubmenu').stop(true, true).slideToggle(200, function(){ 
			  $('#mooreMI').find("span").addClass("selected");
	            $('#mooreMI').find("span").stop(true, true).fadeIn();
	            $("#PImg").rotate({ angle:45,animateTo:135,easing: $.easing.easeInOutExpo });
				    
                showMore = true;
		    });
		}
    }
    
    function hideSubmenu()
    {
    if($('#hiddenSubmenu').is(':visible')){
		    $('#hiddenSubmenu').stop(true, true).slideToggle(200, function(){ 
		         $('#mooreMI').find("span").removeClass("selected");
                   $('#mooreMI').find("span").stop(true, true).fadeOut();
                   $("#PImg").rotate({ angle:135,animateTo:0,easing: $.easing.easeInOutExpo });
                   showMore = false;
              });
         }
    }
    
        
   $(function() { 
    
    // --------------------------------------≠≠
    var input = $('input#s');
    var divInput = $('div.input');
    
    if($('#mainMenu').width()<900)
    {
	    var width = 40;
	    divInput.width(40);
    } else 
        var width = divInput.width();
    
    var leftDivWidth = $('#left-element').width();
    var rightDivWidth = $('#right-element').width();
    
    if($('#mainMenu').width()<1274)
    {
    var outerWidth = $('#mainMenu').width()-36*2-(leftDivWidth+rightDivWidth-width);
    } else var outerWidth = 296; 
    
    var clear = $('#searchClear');
    var txt = input.val();
    
    // max width 296px 1274
    clear.bind('click', function(e) {
      if(input.val()) {input.val('');}
    });
    
    //If the User resizes the window, adjust the sizes
    $(window).bind("resize",function( e ) {
	    if($('#mainMenu').width()<1274)
	    {
    	   outerWidth = $('#mainMenu').width()-36*2-(leftDivWidth+rightDivWidth-width);
    	 } else outerWidth = 296;
    	if(input.is(":focus"))
    	{
    	   input.parent().width(outerWidth);
         } else if($('#mainMenu').width()<900) {
	         divInput.width(40);
         } else divInput.width(100);
         
      });
    
    
   // if click outside the menu, close it 
	$('#menu').bind('mouseenter', function(){
	            	mouseOverActiveElement = true; 
           	}).bind('mouseleave', function(){ 
	           		mouseOverActiveElement = false; 
            });
            
$("html").click(function(){ 
	if (!mouseOverActiveElement) {
		  hideSubmenu();
	}
});   
    
    // Attach a handler to an event 
    input.bind('focus', function() {
    	   
        if(input.val() === txt) 
          { 
	          input.val('');
	          }
	          
    	$(this).animate({color: '#000'}, 300); 
    	
    	$(this).parent().animate(
	    	{
    			width: outerWidth + 'px'
    			
    	    }, 200, function() 
    	  			{
    					if(!(input.val() === '' || input.val() === txt)) 
    						{
    		      			 	clear.fadeIn(300);
    						}
    			}).addClass('focus');
    	
    }).bind('blur', function(e) 
    				{	
	    			 if(clear.is(':visible'))
	    			     {
    					     e.preventDefault();
    					     $(this).focus();
    				     } 
    				      else 
    				      
    					$(this).parent().animate({
    					      width: width + 'px'
    	                }, 200, function() 
    	                        {
    		                     if(input.val() === '') 
    								{
    									input.val(txt);
    								}
    		
    							}).removeClass('focus');
    	
    		clear.fadeOut(100);
    	    
    	    }).keyup(function() 
    	             {
    					if(input.val() === '') 
    	                  {
           					clear.fadeOut(200);
    				      }
    	                   else {clear.fadeIn(200);}
    }).keypress(function(e) 
        		{
  					if(e.keyCode==13)
  					{
	  					alert('caut amanunti la apasare enter');
  			       }
			});
    // --------------------------------------




    // mooreBtn actions
    // --------------------------------------
    $('#mooreMI').click(function()
    { 
    
     if(!$('#hiddenSubmenu').is(":visible")) 
     {
       showSubmenu();
       
       showSpinner();
     }
         else {
               hideSubmenu();
               hideSpinner();
               } 
        });
    // --------------------------------------
    var fullURL = window.location.href;
    //alert(fullURL);
    
    // --------------------------------------
    // menuitems shadow animation
    $(".menuItem").find("span")
	              .hide()
	              .end()
	              .hover(
	   function() 
	    {
	      if(!$(this).find("span").hasClass('selected'))
	         $(this).find("span").stop(true, true).fadeIn();
	     }, 
	   function() 
	   {
	     if(!$(this).find("span").hasClass('selected'))
	        $(this).find("span").stop(true, true).fadeOut();   
	     });
    
    // --------------------------------------
    // menuitems click actions
     $('.menuItem').click(function() {
           var id = $(this).attr("id");
         /*  
            $('.menuItem').each(function() { 
                 if($(this).find("span").hasClass('selected')) 
                 {
                 		//$(this).find("span").removeClass('selected');
                 		//	$(this).find("span").stop(true, true).fadeOut();
                 }
        });
*/
           switch(id)
           			{
	           		 case 'homeMI':
	           		              hideSubmenu();
	           		 			  $(this).find("span").stop(true, true).fadeIn();
	           		 			  $(this).find("span").addClass('selected');
	           		 			  goHome = true;
	           		              settings = false;
	           		              userProfile = false;
	           		              refreshContent = false; 
	           		              break;
                     
                     case 'userMI':
                                   hideSubmenu();
                     break;
                     
                     case 'settingsMI':
                                       hideSubmenu();
                     break;
                     
                     case 'refreshMI':
                                      hideSubmenu();
                     break;
                     
                     default: break;
                      
                     }
       });
     });
    
    
    $(function() {
        var fullURL = window.location.href;

        $('#mainMenu a').each(function(){
            if(fullURL == $(this).attr('href')) {
                $(this).addClass('selected');
                alert(fullURL);
        }
            
           });
});     
}


$(document).ready(function() {
     menu = new SRSlideMenu();
});