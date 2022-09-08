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

      if(checkform){
        console.log("true");
      }
}
