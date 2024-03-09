let string="";
let buttons = document.querySelectorAll(".button");
let text=  document.querySelector(".display");

Array.from(buttons).forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){

           string=eval(string);
           text.value= "="+string;
        }
    // text.innerHTML=e.target();
    else if(e.target.innerHTML == 'C'){
        string="";
        text.value=string;
    }
    else{
    string = string + e.target.innerHTML;
    text.value = string;
    }
    })
});