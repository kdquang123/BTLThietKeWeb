$(document).ready(function(){

   var checkSideBar=true;
   var checkSideBar2=false;
   var checkSideBar1=true;
   $(".side-bar .user p").html((JSON.parse(localStorage.getItem("key"))).fullName);

   $(".side-bar .user").click(function(){
      $(".side-bar .logout").slideToggle();
   })

   $(".side-bar .logout").click(function(){
    localStorage.removeItem("key");
    location.href="/view/login.html";
   })

   $("nav ul>li").click(function(){
      if(window.innerWidth<=768){
            $(".side-bar").animate({marginLeft:'+=230px'},200);
            $('.mask').addClass('mask-action');
      }else{
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
      }
      
      
   })


   $('.mask').click(function(){
      $(".side-bar").animate({marginLeft:'-=230px'},200);
      $('.mask').removeClass('mask-action');
   })


   $(".side-bar").hover(function(){
   
      if(window.innerWidth>768){ 
      if(!checkSideBar){
         $(".side-bar").animate({width:'+=140px'},200);
         $('.mask').addClass('mask-action');
         checkSideBar2=true;
      }
   }
   }
   ,function(){
      if(checkSideBar2)
     {
      $(".side-bar").animate({width:'-=140px'},200);
      $('.mask').removeClass('mask-action');
      checkSideBar2=false;
     }
   })
   
  });
