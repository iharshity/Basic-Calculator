let buttons = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");

let currInput = "";
let operatorClicked = false;

buttons.forEach((button) => {
    button.addEventListener("click",()=>{
        // temp store clicked value
        const value = button.textContent;

        // if clear btn is clicked
        if(button.classList.contains("clear")){
            currInput = "";
            screen.value = "0";
            return;
        }

        // if equal btn is clicked
        if(button.classList.contains("equals")){
            try{
                currInput = eval(currInput).toString();
                screen.value = currInput;
            }catch{
                screen.value = "Error";
                currInput = "";
            }
            return;
        }

        //prevent multiple operation
        if("+-*/".includes(value)){
            if(operatorClicked) return;
            operatorClicked = true;
        }else{
            operatorClicked = false;
        }

        // decimal part
        if(value === "." && currInput.endsWith(".")) return;

        currInput += value;
        screen.value = currInput;
    });
});