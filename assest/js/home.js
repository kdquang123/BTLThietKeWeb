$(document).ready(function(){

   var checkSideBar=true;
   var checkSideBar2=false;
   $(".side-bar .user p").html((JSON.parse(localStorage.getItem("key"))).fullName);

   $(".side-bar .user").click(function(){
      $(".side-bar .logout").slideToggle();
   })

   $(".side-bar .logout").click(function(){
    localStorage.removeItem("key");
    location.href="http://localhost:5500/view/login.html";
   })

   $("nav ul>li")

   $("nav ul>li").click(function(){
      if(checkSideBar){
         $(".side-bar").animate({width:'-=140px'},200);
         $("nav").animate({left:'-=140px'},200);
         $(".container-fluid").animate({paddingLeft:'-=140px'},200);
         checkSideBar=false;
      }else{
         checkSideBar=true;
         $(".side-bar").animate({width:'+=140px'},200);
         $("nav").animate({left:'+=140px'},200);
         $(".container-fluid").animate({paddingLeft:'+=140px'},200);
         
      }
      
   })


   $(".side-bar").mouseover(function(){
      if(!checkSideBar){
         $(".side-bar").animate({width:'+=140px'},200);
         $('.mask').addClass('mask-action');
         checkSideBar2=true;
      }
      
   })

   $(".side-bar").mouseout(function(){
      if(checkSideBar2){
         $(".side-bar").animate({width:'-=140px'},200);
         $('.mask').removeClass('mask-action');
         checkSideBar2=false;
      }
   })
  
  });
