 // question number Theree
  var number = +prompt("Enter a Number and Known Wheather Number is Positive or Negative");
  if (number  <  0 ){
    alert("Number is negative");
  }
   else if ( number > 0 ){
    alert("number is positive")

   }
   else{
    alert("Number is zero")
   }

   // Question Number Six
var hour = +prompt("Enter current hour");{
    if(hour < 18) {
        alert("good Day");
    }
    else{
        alert("Good Evening");
    }

}

// Question Number Seven
var Time = +prompt("Enter Time in 24 hours clock  i will convert into 12 hours");
    if( Time === 13 ){
        alert("1 Pm");
    }
    else if (Time === 14){
        alert("2 Pm");
    }
    else if (Time === 15){
        alert("3 Pm");
    }
    else if (Time === 16){
        alert("4 Pm");
    }
    else if (Time === 17){
        alert("5 Pm");
    }
    else if (Time === 18){
        alert("6 Pm");
    }
    else if (Time === 19){
        alert("7 Pm");
    }
    else if (Time === 20){
        alert("8 Pm");
    }
    else if (Time === 21){
        alert("9 Pm");
    }
    else if (Time === 22){
        alert("10 Pm");
    }
    else if (Time === 23){
        alert("11 Pm");
    }
    else if (Time === 24){
        alert("12 Pm");
    }
    else{
        alert(Time + " am ");
    }


    // Question Number Five (5)

    var correctPassword = ("raffay");
    var inputPassword = prompt("Enter a password");

    if (inputPassword === correctPassword){
        alert("Welcome Correct Password");
    }
    else if(inputPassword == ""){
        alert("please Input Your Password")
    }
    else{
        alert("Wrong Password Try Again");
    }

    


 // Question Number (two)

 var firstintegar = +prompt("Enter First Number");
 var secoundintegar = +prompt("Enter Secound Number");
 if(firstintegar > secoundintegar){
    alert("firstintegar is greater")
 }
 else if ( secoundintegar >   firstintegar) {
    alert( "secoundintegar is greater");
  
    }

    else if(firstintegar == secoundintegar){
        alert("BOTH Integar are Equal")
    }

 // Question Number (four)

 let input = prompt("enter your alphabet")
 if(input == "a"){
    console.log("it is a vowel")
 }
 else if(input == "e"){
    console.log("it is a vowel")
 }
 else if(input == "i"){
    console.log("it is a vowel")
 }
 else if(input == "o"){
    console.log("it is a vowel")
 }
 else if(input == "u"){
    console.log("it is a vowel")
 }
 else{
    console.log("it is not a vowel")
 }
 
 // Question Number one

 function checkCharacterType(char) {
    if (/[0-9]/.test(char)) {
        console.log(char + " is a number.");
    } else if ([A-Z].test(char)) {
        console.log(char + " is an uppercase letter.");
    } else if ([a-z].test(char)) {
        console.log(char + " is a lowercase letter.");
    } else {
        console.log(char + " is not a number, uppercase letter, or lowercase letter.");
    }
}

// Taking input from the user
var userInput = prompt("Enter a character: ");

// Checking the type of the entered character
checkCharacterType(userInput);


