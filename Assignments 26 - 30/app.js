// Question Number 1

let userNumber = prompt("Please Give any Positive Number");

document.write(` Number = ${userNumber} <br>`);
let roundUserNumber = Math.round(userNumber);
document.write(` Round off  Number = ${roundUserNumber} <br> `);
let floorUserNumber = Math.floor(userNumber);
document.write(`  Floor  Number = ${floorUserNumber} <br> `);
let ceilUserNumber = Math.ceil(userNumber);
document.write(`  ceil  Number = ${ceilUserNumber} <br> `);



// Question Number 2

let negativeUserNumber = prompt("Please Give Any Negative Number ");

document.write(`Negative UserNumber  = ${negativeUserNumber} <br>`)

let roundNegativeNumber = Math.round(negativeUserNumber);

document.write(`Negative Round Off UserNumber  = ${roundNegativeNumber} <br>`)

let negativefloorUserNumber = Math.floor(negativeUserNumber);
document.write(` Negative  Floor  Number = ${negativefloorUserNumber} <br> `);
let NegativeceilUserNumber = Math.ceil(negativeUserNumber);
document.write(`  ceil  Number = ${NegativeceilUserNumber} <br> `);


// Question Number 3 Abhe Tak Nahe Parha

// Question Number 4 ..

let dice = Math.random() * 10;


document.write(`Roundom Dice Number is = ${Math.round(dice)} <br>`)


// Question Number 5...

let tossStart = alert("Toss Start") ;
let userOne = prompt("Enter First User  Call");
let userTwo = prompt("Enter Secound User Call");
let toss = Math.random() * 10;
let tossWinner = Math.round(toss);

if(tossWinner <= 5  ){
    document.write(`${userOne} Is Win <br>`);
}
else{
    document.write(`${userTwo} is Win <br>`)
}

// Question Number 6

let randomNumber = Math.random() * 100;


document.write(`Roundom Dice Number Between 1 to 100  = ${Math.round(randomNumber)} <br> `);




// Question Number 7 bad me karo ga


// Question Number 8
let userGuess = +prompt("Enter A number Between 0-10")
let randomScreatNumber = Math.random() * 10;
let roundrandomScreatNumber = Math.round(randomScreatNumber);
if(userGuess == roundrandomScreatNumber){
    alert("Correct Answer")
}
else{
    alert("Try Again");
    alert(`Answer Is ${roundrandomScreatNumber}`)

}