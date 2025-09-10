//Method channining

/* let userName = window.prompt("Enter Your Username: ");

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName); */

//Logical Operators

//&& || !

const temp = 3000;

if (temp > 0 || temp <=30) {
    console.log(`The temperature is good`)
}

else {
    console.log(`The temperature is bad!`)
}

//&& runs if both conditions are true
// || runs if one of the conditions are true
// flips the boolean (!)

//Example USername and password using while loop.
//you can also use while only without do but its best to use do since it runs the code first.

let loggedIn = true;
let userName;
let password;

do{
    userName = window.prompt(`Enter your Username: `);
    password = window.prompt(`Enter your password: `);

    if (userName === "123" && password === "123") {
        console.log(`Welcome User!`);
    }
    else {
        console.log(`Invalid credenstial`);
    }
}
while(!loggedIn);

//For loop =  can repeat code for LIMITED time

for(let i = 1; i <= 10; i++){

    if (i == 10) {
        continue; //skips the iterate
    }
    else {
        console.log(i);
    }
}
