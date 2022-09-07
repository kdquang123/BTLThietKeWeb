const input=document.querySelectorAll(".form-input");



input.forEach(inp => {
    inp.onblur=()=>{
        if(inp.value==""){
            inp.classList.add("warn-input");
            inp.parentElement.children[1].innerHTML="This field must be filled out!";
        }else{
            inp.classList.remove("warn-input");
            inp.parentElement.children[1].innerHTML="";
        }
    }
});