const login_btn=document.querySelector(".btn-login");
const input2 =login_btn.parentElement.querySelectorAll(".form-input")
var checkform;

login_btn.onclick=()=>{
      input2.forEach((inp)=>{
          if(inp.value==""){
            inp.classList.add("warn-input");
            inp.parentElement.children[1].innerHTML="This field must be filled out!";
            checkform =false;
          }else{
            checkform =true;
          }
      })
      var checkLog=true;
      if(checkform){
         var users= JSON.parse(localStorage.getItem("users"));
         var errorText="Wrong password or user name!";

         users.forEach((user)=>{
              if(user.userName===input2[0].value && user.password===input2[1].value){
                location.href="http://localhost:5500/view/home.html";
                checkLog=false;
              }
         })
         if(checkLog){
            login_btn.parentElement.querySelector('.checkMessage').innerHTML=errorText;
         }
         
      }
}
