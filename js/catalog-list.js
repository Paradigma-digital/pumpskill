$(document).ready(function(){console.log("test"),$(".catalog-list-pic-slider").slick({slidesToShow:1,slidesToScroll:1,fade:!0,speed:0,arrows:!1,swipe:!1})}),$(".catalog-list-wrapper").mouseover(function(){$(this).find(".catalog-list-pic").fadeIn(250)}).on("mouseleave",function(){$(this).find(".catalog-list-pic").fadeOut(250)}),$(".catalog-list-wrapper").mousemove(function(t){var s=t.pageX,i=t.pageY,o=($(this).offset().left,i-$(this).offset().top),e=$(this).find(".catalog-list-pic");e.css({top:o-e.outerHeight()/2})}),$(".faculty-catalog-list a").on("mouseenter",function(){$(this).closest(".catalog-list-wrapper").find(".catalog-list-pic-slider").slick("slickGoTo",$(this).closest("li").prevAll().length)});