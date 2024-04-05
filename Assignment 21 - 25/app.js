// Questio Number 1

let userFirstName = prompt("Enter Your First Name");
let userLastName = prompt("Enter Your Last Name");
let fullName = `${userFirstName} ${userLastName} ` 
alert(`Welcome ${fullName}`);




// Question Number 2

let userFavoriteMobile = prompt("Enter Your Favorite Mobile ");
document.write(`My Favorite Mobile is ${userFavoriteMobile} Length Of String is ${userFavoriteMobile.length} <br>`)

// Question Number 3....

let nationality = `Pakistani`;
let chectingIndexof = nationality.indexOf(`n`);

document.write(" Nayionality = " +  nationality + "<br>");
document.write(`Index of n is ${chectingIndexof} <br>`)

// Question Number 4

let string = "Hello World";
let updatedString = `${string.lastIndexOf("l") }`;

document.write(`String =    ${string} <br>`);
document.write(`  Last Index of l is ${updatedString} <br>`);


// Question Number 5 
  

let country = "Pakistani";
let CheckingCountry = country.indexOf("i");
document.write(`Country =  ${country} <br>`)
document.write(`Index Of i is ${CheckingCountry} <br>`);

// Question Number 6 me kya karna han samaj nahe aya....

// Question Number 7

let city = "Hyderabad";
let replaceCity = city.replace("Hyder" , "Islam" );
document.write( ` Real City Name =  ${city} <br>`);
document.write(`city Name Changes =  ${replaceCity} <br>`)


// Question Number 8


var message = `Ali and Sami are best friends. They play cricket and
football together.`;
document.write(`message = ${message} <br> `)

var updatedMessage = message.replaceAll("and","&");

document.write(`After Updating Message = ${updatedMessage} <br>`)

// Question Number 9

let Value = 472;
document.write(` Value = ${Value}  <br>`);
document.write(` Type Of Value =  ${typeof Value}<br>`);
document.write(` Value = ${Value}  <br>`);
let updateValue = Value.toString();
document.write(` Type Of Value = ${typeof updateValue} <br>`)


// Question Number 10




let userInfo = prompt("Enter Any Word ");
document.write(`${userInfo}  <br> `)
let userInfoUpdated = userInfo.slice(0,1).toUpperCase() + userInfo.slice(1).toLowerCase();
document.write(`${userInfoUpdated}  <br>`);

// Question Number 11

let UserInput = prompt("Enter Any Word I will Convert Into Capital Letters");
document.write(`${UserInput}  <br> `)
let updatedInput = UserInput.slice(0).toUpperCase();
document.write(`${updatedInput}  <br>`);


// Question Number 12

let num = 35.36;
document.write(` ${num} <br>`);

let numToString =  num.toString().replace("." , "");
document.write(` ${numToString} <br>`);



// Question Number 13 Abhe Tak Nahe atta..

// Quetion Number 14

// Question Number 14
let items = [ `Cake` , `Pastry`, `Biscuits` , `Chips` , `Icecream` ];
let userItems = prompt("Welcome To Raffay Bakers What do You Want")

let checkingItems = userItems.slice(0,1).toUpperCase() + userItems.slice(1).toLowerCase();

let match = false;

for(i = 0 ; i < items.length ;  i++ ){
    if(checkingItems == items[i]){
        document.write(`${userItems }  is Avilable <br>  `  )
        match = true;
        break;
    }
    
    

}
if(!match){
    document.write(`${userItems} Is Not Available <br>`);
}


// Question Number 15 se 18 Tak Samaj Nahe aya