// Get the first number
let num1 = parseInt(prompt("Enter the first number: "));

// Get the second number
let num2 = parseInt(prompt("Enter the second number: "));

// Get the third number
let num3 = parseInt(prompt("Enter the third number: "));

let largestNumber;

// Check if num1 is the largest
if (num1 > num2 && num1 > num3) {
  largestNumber = num1;
}

// Check if num2 is the largest
else if (num2 > num1 && num2 > num3) {
  largestNumber = num2;
}

// Otherwise, num3 must be the largest
else {
  largestNumber = num3;
}

console.log("The largest number is: " + largestNumber);