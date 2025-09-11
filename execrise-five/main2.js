

const textBox = document.getElementById("textBox");
const toBinary = document.getElementById("toBinary");
const toDecimal = document.getElementById("toDecimal");
const result = document.getElementById("result");

let time;


function convert(){
    if(toBinary.checked){
        time = Number(textBox.value);
        time = time/60;
        result.textContent = time.toFixed(1) + "min"
    }
    else if(toDecimal.checked){
        time = Number(textBox.value);
        time = time/60;
        result.textContent = time.toFixed(1) + "hr"
    }
    else{
        result.textContent = `Please Select a Unit`;
    }
}
