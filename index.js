console.log("Hello World!");

//  Get temp outside

// set a temp limit

// check if temp is below that limit which will trigger to wear a jacket

var currentTemp = 60
var isRaining = true;

const temperature = true;

if (currentTemp <= 40){
    console.log("It's " + currentTemp + " degrees outside! Wear a heavy Jacket.");   
} else if (currentTemp <= 60){
    console.log("It's " + currentTemp + " degrees outside. Wear a jacket.");
} else if (currentTemp <= 70){
    console.log("It's " + currentTemp + " degrees outside, wear a light jacket.")
} else {
    console.log("It's hot out today! No jacket needed!")
}

// isRaining has already been declared as true. 
if (isRaining) {
    console.log("It's raining, too, so you should bring an umbrella!");
} else {
    console.log("No rain today, you can leave the umbrella at home!")
};

// END OF JACKET or NO JACKET?


//Begining Calculator

var userName = "";

if (userName) {
    console.log("Hello" + userName + " !")
} else {
    console.log("Hello, guest!")
};

const num1 = 350;
const num2 = 450;
const operation = "add";
// console.log(a + b);

let result;

if (operation === "add") {
    result = num1 + num2;
    console.log(`Sum of ${num1} and ${num2} is ${result}.`);
} else if (operation === "subtract") {
    result = num2 - num1;
    console.log('Difference of ${num2} and {num1} is ${result}.')
} else if (operation === "multiply") {
    result = num1 * num2;
    console.log( 'Product of ${num1} andn ${num2} is ${results}.')
} else if (operation === "divide") {
    result = num1 / num2;
    console.log('Division of ${num1} and ${num2} is ${results}.')
} else if (operation === "modulus") {
    result = num1 % nnum2;
    console.log('Modulus of ${num1} and ${nunm2} is ${result}.')
} else {
    console.log('${operation} is an invalid operation.')
};