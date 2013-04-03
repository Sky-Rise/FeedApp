function SRContentBox(options)
{
	if(options.parentContainer)
	{
	
	var parentContainer = options.parentContainer;
	var imgLink = options.imgLink;
	var textTitle = options.textTitle;
	var text = options.text;
	var articleLink = options.articleLink;
	
	
	
	// create etities
	var boxDiv = document.createElement('div');
	var boxContentDiv = document.createElement('div');
	var boxImgDiv = document.createElement('div');
	var boxTextDiv = document.createElement('div');
	var boxTextHead = document.createElement('h1');
	var boxTextParagraph = document.createElement('p');
	
	// init styles
	boxDiv.className='articleBox';
	boxContentDiv.className='articleContent';
	boxImgDiv.className='articleImg';
	boxTextDiv.className='articleText';
	
	// set content
	$(boxTextHead).text(textTitle);
	$(boxTextParagraph).text(text);
	
	// add subdiv's
	$(boxDiv).append(boxContentDiv);
	$(boxContentDiv).append(boxImgDiv);
	$(boxContentDiv).append(boxTextDiv);
	$(boxTextDiv).append(boxTextHead);
	$(boxTextDiv).append(boxTextParagraph);
	
	// add entire box
	$(parentContainer).append(boxDiv);
	
	// calculate panels number
	var textDivHeigth = $(boxTextDiv).height();
	if(textDivHeigth > 59) 
	{
		var hPanelsNumber = (textDivHeigth - textDivHeigth % 60) / 60;
    } 
    else var hPanelsNumber = 1;
    
    var btnsHiddenBoxH = 40;
    var acordionAnchor =  36 + btnsHiddenBoxH / hPanelsNumber;

	//alert(textDivHeigth);
	var domi = $(boxTextDiv).oriDomi({ hPanels           : hPanelsNumber, 
									   vPanels           : 1,
									   touchEnabled      : false,
									   forceAntialiasing : false,
									   speed             : 250,
									   shadingIntensity  : 1});
	
	$(boxDiv).bind('mouseenter', function(){
						//"div:first",this
						$(boxTextDiv).oriDomi('accordion',-acordionAnchor, 1);
			  	}).bind('mouseleave', function(){ 
				   		$(boxTextDiv).oriDomi().reset();
				});
	}
}

$(document).ready(function() {
	for(i=0; i<10; i++){
	 box = new SRContentBox({ parentContainer:'#mainContentDiv',
                              imgLink:'none',
                              textTitle:'Neque porro quisquam est qui dolorem  quisquam est qui doloremquisquam est qui dolorem',
                              text:'Neque porro quisquam est qui dolorem  quisquam est qui afjsjd v hjkdfh jksdhf jksd  hjk hdskjfhdsjk jhkj hdsjkfh dskj sd jhjkh sdkhj hkj hdskhjf kjsdhf ksdhf jksd  hjk hdskjfhdsjk jhkj hdsjkfh dskj sd jhjkh sdkhj hkj hdskhjf kjsdhf ksdhf admfkn as fdas das d asd sa dasd as d a d as das',
                              articleLink:''});
	}
});