const myId = document.getElementById("myId");
const myBtn = document.getElementById("myBtn");
const resultElement = document.getElementById("resultElement");
let age;

myBtn.onclick = function() {
    age = myId.value;
    age = Number(age);

    if(age >= 100){
        resultElement.textContent = `Aren't you dead yet?!`;
    }
    else if(age >= 18) {
        resultElement.textContent = `Welcome to the Site!`;
    }
    else if(age == 0) {
        resultElement.textContent = `Nice try buddy!`;
    }
    else if(age < 0) {
        resultElement.textContent = `Seriously?!`;
    }
}

const visaBtn = document.getElementById("visaBtn");
const masterclassBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const secondBtn = document.getElementById("secondBtn");
const subResult = document.getElementById("subResult");

secondBtn.onclick = function() {
    if(visaBtn.checked) {
        subResult.textContent = `You are paying with Visa!`
    }
    else if(masterBtn.checked) {
        subResult.textContent = `You are paying with MasterClass`
    }
    else if(paypalBtn.checked) {
        subResult.textContent = `You are paying with Paypal`
    }
    else{
        subResult.textContent = `You must PAY!`;
    }

}