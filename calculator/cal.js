let buttons = document.querySelectorAll(".bttn");
let inputString="";
buttons.forEach((bttn)=>{
    bttn.addEventListener("click",(e)=>{
        if(e.target.innerHTML==="="){
            inputString=eval(inputString);//eval() takes a single string argument and runs the code contained within that string, returning the completion value of the code. 

            document.querySelector(".input").value=inputString;
        }
        else if(e.target.innerHTML==="C"){
            inputString="";
            document.querySelector(".input").value=inputString;
        }
        else{
            inputString +=e.target.innerHTML;
            document.querySelector(".input").value=inputString;
        }
    })
})