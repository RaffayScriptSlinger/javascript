// Question Number 1 

let currentDate = new Date();
document.write(`${currentDate}  <br>`);

// Question Number 2

let  months = [`jan` , `feb` , `march` , `Aprail` , `may` , `june` , `july ` , `aug` , `sept` , `Octuber` ,`nov` , `december`];

let currentMonth = new Date().getMonth();

document.write("Current Month Is" + months[currentMonth] + "<br>" )


// Question Number 3

let Day = [ "Sun","mon" , "tues" , "Wed" , "Thu" , "Fri" , "Sat"  ];
let currentDay = new Date().getDay();
document.write("Today Is " + Day[currentDay] + "<br>" );

// Question Number 4

let newDay = [ "Sun","mon" , "tues" , "Wed" , "Thu" , "Fri" , "Sat"  ];

let currentNewDate = new Date().getDay();

let currentNewDateUpgrade = newDay[currentNewDate];

if(currentNewDateUpgrade == "Sat" || "Sun"){
    document.write("Fun Day!" + "<br>")
}
else{
    document.write("Not A Fun Day" + "<br>")
}


// Question Number 5

let currentDateOfMonth = new Date().getDate();

if(currentDateOfMonth <= 15){
    document.write("First Fifteen Day Of Month" + "<br>")
}
else{
    document.write("Last Days Of Month" + "<br>")
}


// Question Number 6...
 
// Ye samaj Nahe Araha 


// Question Number 7 

let hours = new Date( ).getHours();

if(hours <= 12 ){
    document.write(`${hours} Am <br> `)
}
else{
    document.write(`${hours} Pm  <br> `)
}

// Question Number 8

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",

]

var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

var date = new Date();
var Month = new Date().getMonth();
 var day = date.getDay();
var year = new Date().getFullYear();

document.write(` ${days[day]}  ${month[Month]  } ${year} <br>  `)



// Question Number 9

let firstRamzan = new Date(2024 , 3 , 10);
let currentRamzan = new Date();
let calculation = firstRamzan.getTime() - currentRamzan.getTime();
let daysDifference = Math.ceil( calculation / (1000 * 3600 *24));
if (daysDifference >= 0) {
    document.write("Days until first day of Ramadan in 2024: " + daysDifference + "<br>");
} else {
    document.write("Ramadan in 2024 has already begun." + "<br>");
}


// Question Number 10

let referenceDate = new Date(2024 , 3 , 8);
let newcurrentDate = new Date();
let ellapse = newcurrentDate - referenceDate;
let ellapseCalculation = Math.ceil(ellapse / (1000 * 60 * 60 * 24));
document.write(ellapseCalculation + "<br>");


// Question Number 11

var now = new Date();
var crntHour = new Date().getHours();
now.setHours(crntHour + 1);
document.write(now + "<br>"  )


// Question Number 12

var now = new Date();
document.write(now + "<br>");

var Crnyear = now.getFullYear();
document.write(Crnyear + "<br>");

now.setFullYear(now.getFullYear() - 100);
document.write(now + "<br>");

var prevyear = now.getFullYear();
document.write(prevyear + "<br>");

// Question Number 13

let userDob = +prompt("Enter Your Date Of Birth");
var nowDate = new Date();
let yearNow = nowDate.getFullYear();
let userBirthYear = yearNow - userDob;
document.write(`   Your Current Age Is ${userBirthYear} <br> `);

// Question Number 14

let userName = prompt("Enter Your Name");
let currentMonth1 = prompt("Enter Your Month ");
let chargesPerUnit = 52;
let numberOfUnits = Math.floor( +prompt("Enter A Number Of Units"));
let netAmount = numberOfUnits * chargesPerUnit ;
console.log(netAmount)
let latePaymentCharges = 500;
let GrossAmount = netAmount + latePaymentCharges ;
console.log(GrossAmount);

document.write(`Custumer Name = ${userName} <br>`);
document.write(`Month = ${currentMonth1} <br>`);
document.write(`Charges Of Unit = ${chargesPerUnit} <br>`);
document.write(`Net Amount Payable(Within Due Date):${netAmount} <br>`);
document.write(` Late Payement Charges = ${latePaymentCharges}  <br>`)
document.write(`Gross Amount Payable (After Due Date) = ${GrossAmount}`)
