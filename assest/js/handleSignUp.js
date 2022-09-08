const signUp_btn=document.querySelector(".btn-signUp");
const input1 =signUp_btn.parentElement.querySelectorAll(".form-input")
var checkform;

console.log(signUp_btn);
console.log(input1[3]);
input1[3].onblur=()=>{
    if(input1[3].value!=="" && input1[3].value!==input1[2].value){
        input1[3].classList.add("warn-input");
        input1[3].parentElement.children[1].innerHTML="Repeat password!";
    }else if(input1[3].value ==""){
        input1[3].classList.add("warn-input");
        input1[3].parentElement.children[1].innerHTML="The field must be filled out!";
    }else if(input1[3].value!=="" && input1[3].value===input1[2].value){
        input1[3].classList.remove("warn-input");
        input1[3].parentElement.children[1].innerHTML="";
    }
}

signUp_btn.onclick=()=>{
      console.log('aa');
      input1.forEach((inp)=>{
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