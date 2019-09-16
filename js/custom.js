
$(function(){

	$.fakeLoader({

// Time in milliseconds for fakeLoader disappear
timeToHide:3000, 

// 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7' 
spinner:"spinner4",//Options: 

// Background color. Hex, RGB or RGBA colors
bgColor:"#59ACCA",
            
});


	var images = document.getElementsByClassName('simple-parallax');
	var para = new simpleParallax(images,{

    delay: .8,
    orientation:'left',
    scale:'1.2',
    transition:'cubic-bezier(0,0,0,1)',
    overflow:true,
    });





})
