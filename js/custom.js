


$(function(){
	var images = document.getElementsByClassName('simple-parallax');
	var para = new simpleParallax(images,{

    delay: .8,
    orientation:'left',
    scale:'1.2',
    transition:'cubic-bezier(0,0,0,1)',
    overflow:true,
    });
})