const fortune1 = `Your cat will look very cuddly today.`;
const fortune2 = `The weather will be nice tomorrow.`;
const fortune3 = `Be cautious of your new neighbors.`;
const fortune4 = `You will find a new hobby soon.`;
const fortune5 = `It would be wise to avoid the color red today.`;

let randomNumber = Math.floor(Math.random() * 5) + 1;
let selectedFortune;

if(randomNumber === 1) {
    selectedFortune = fortune1
}
else if (randomNumber === 2) {
    selectedFortune = fortune2
}
else if (randomNumber === 3) {
    selectedFortune = fortune3
}
else if (randomNumber === 4) {
    selectedFortune = fortune4
}
else if (randomNumber === 5) {
    selectedFortune = fortune5;
}

console.log(selectedFortune);



//TERNARY OPERATOR

let age = 17;
let message = age >= 18 ? `You are an adult`: `You are a minor`;
console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your Total Price is $${purchaseAmount - purchaseAmount * (discount/100) }`);

//Use Switch when you have too many ifs statement

let testScore = 101;
let grade;

switch(true) {
    case testScore >=101:
    grade = "Error, test score can't be more than 100";
    break;
    case testScore >=90:
    grade = "A";
    break;
    case testScore >=70:
    grade = "B";
    break;
    case testScore >=50:
    grade = "C";
    break;
    case testScore >=40:
    grade = "D";
    break;
    default:
        grade = "F";
    
}

console.log(grade);

//String Slicing

const email = `hithukten@gmail.com`;
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);
console.log(userName);
console.log(extension);

//Test
let username = prompt(`Enter your Username:`);
let password = prompt(`Enter your password:`);

const isUsernameCorrect = username === "user123";
const isPasswordCorrect = password === "password456";

if (isUsernameCorrect && isPasswordCorrect) {
    console.log("Login successful! Welcome.");
} else {
    console.log("Invalid credentials. Please try again.");
}