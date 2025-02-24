$(function(){
  $('header nav>ul>li ').mouseover(function(){
     $(this).children('ul').stop().slideDown(),
     $(this).css('background','rgba(92, 21, 21, 0.3)')
     $(this).css('color','aliceblue')
     ;
  });
  $('header nav>ul>li').mouseleave(function(){
     $(this).children('ul').stop().slideUp();
     $(this).css('background','#E4B1F0')
  });
});