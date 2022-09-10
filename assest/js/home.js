$(document).ready(function(){
   console.log(JSON.parse(localStorage.getItem("key")));
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
      $(".side-bar").width(100);
   })
  
  });
//document.querySelector(".side-bar .user p").innerHTML=(JSON.parse(localStorage.getItem("key"))).fullName;