

// Question Number One

var studentName = []
console.log(studentName)
  

// Question Number Two

studentName.push("Raffay" , "Sharjeel" , "Rehan")
console.log(studentName);


// Question Number Three

let stringArray = [
    "stringOne", "stringTwo" , "stringThree"  
]
console.log(stringArray);

// Question Number Four

let numberArrays = [
    1 , 2 ,5 , 4
]
console.log(numberArrays)

// Question Number Five

let booleanArray = [
    true , false
]

console.log(booleanArray)

// Question Number Six

let mixArray = [
    "Raffay" , 45 , true
]
console.log(mixArray)

// Question Number Seven

let qualifications = [
    "SSC", "HSC" , "BSC" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PHD"
];
console.log(qualifications)

// Question Number Eight

// skipped

// Question Number Nine

let color =  [ "pink , Purple"];

let colorOne = prompt("what color You wants to add to the beginning");

color.unshift(colorOne);
console.log(color);

let colorTwo = prompt("what color You wants to add to the End");

color.push(colorTwo);

console.log(color);

// Question Number 11

let cities = [
    "Karachi" , "Lahore"  , "Multan" , "Islamabad" , "Peshawar"
]

document.write( 
 ` Cities List : `  + `<br>` +  cities  + "<br>"
)

selectedCities = (cities.splice(2, 2 ) )


document.write(  "Selected Cities " + "<br>"+ selectedCities + "<br>" );

document.write("Array" + "<br>");

let arr = [
    "This" , "Is" , "My" , "Cat"
]

document.write(arr + "<br>");

document.write("String" + "<br>")
                           
let singleString = arr.join(` `)

document.write(singleString + "<br> <br>");

console.log(singleString);

// Question  Number 15
document.write("Question Number 15 " + " <br> <br> ")


let mobile = ["Tecno" , "Motrolla" , "Samsung" , "Nokia" , "Haier" , "Apple"]

document.write("<select>")
for(i = 0 ; i < mobile.length ; i++){
document.write(`"<option value = ${mobile}>  ${mobile[i]} </option>"`)
}

document.write("</select>")

// Some Random Practice

// let countries = ["pakistan" , "Australia" , "Bangladesh" , "Uk"];

// document.write("<select>");


// for(i = 0 ; i < countries.length ; i++ ){
//     document.write(`" <option value = ${countries}>  ${countries[i]}   </option> " ` );
// }
// document.write("</select>")

