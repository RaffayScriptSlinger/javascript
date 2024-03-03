// Question Number One

var city = prompt("Enter Your city name"); {
    if (city === "karachi") {
        document.write(  "welcome to city of lights" + " <br> ");
    }
    else {
        document.write(  "please input karachi city name" + " <br> ");
    }

}

//  Question Number two

var Gender = prompt("Enter your Gender"); 
    if (Gender === "male") {
        document.write(  " welcome sir " + " <br> ");

    }
    else if (Gender === "female") {
        document.write(  "welcome madam " + "  <br> ");
    }
    else {
        document.write(  "welcome " + Gender  + "  <br> " );
    }


    // Question number Three

 

    var color = prompt ("Enter A Traffic Signal color and known their meaning   \n Ensures that color starts with capital letter");
    if( color === "Red"){
        document.write(   "Must Stop");

    }
    else if( color === "Yellow"){
        document.write(  "Ready to move");
    }
    else if( color === "Green"){
        document.write(  "Move Now");
    }
    else {
        document.write( color +   " is not a traffic signal Color.<br>" );
    }

    // Question Number four (4)

    var remainingFuel = +prompt("Enter Remaining Fuel in your car");
if (remainingFuel < 0.25) {
    document.write( " <br> " + "  please refill the fuel in the car");
}
else {
    document.write( " <br> " +  " No Need for Fuel Refill");
}

// Question Number five (5)
 
var a = 4;
if(++ a == 5){
    alert("Given condition for variable a is true");
}

var b =82;
if (b++ ===82){
    alert("Given condition for variable b is true");

}
var c =12;
if (c === 13){
    alert("Condition 1 is true");
    
}
if (c === 13){
    alert("condition 2 is true");
    }
    if (++c < 14){
        alert("condition 3 is true");
        }
        if(c === 14){
            alert("condition 4 is true");
            }


            // d

      var materialCost = 20000;
      var laborCost = 2000;
      var totalCost = materialCost + laborCost;
      if (totalCost === laborCost + materialCost){
        alert("The cost Equal");
      }      

      // e

      if(true){
        alert("True");
      }
      if(false){
        alert("False");
      }

      if("car" < "cat"){
        alert("car is smaller than car");
      }


      // Question number six (6) is skipped

      // Question Number seven (7)

      

      var number=+prompt("Guess Number 1-10 ");
      if(number === 6){
        alert("Correct answer");
      }
      else{
        alert("wrong answer");
      }

      //  Question Number 8

      var givennumber=+prompt("Write any number and know that ehether its multiple of 3");
      if(givennumber / 3 === 0  ){
        alert("Its multiple of 3");
      }
      else{
        alert("Its not multiple of 3")
      }

      // Question Number 9
      var evenodd = +prompt("Checks that number is even or odd" );
      if(evenodd % 2 ===0){
        alert( evenodd + " is even number");
      }
      else{
        alert( evenodd + " is odd number");
      }

      // Question number 10

      var temperature =+prompt( "What is the Weather in your city" );
      if(temperature < 10){
        alert("OMG! Today weather is cool");

      }
      if(temperature < 20){
        alert("Today weather is cool");
      }
      if(temperature < 30){
        alert("Today weather is Normal");
      }
      if(temperature > 30){
        alert("Today weather is Hot");
      }
      

        // Question Number 11

       
      
        // currently I cannot attempt q 11


      

     
      
      
      
   
