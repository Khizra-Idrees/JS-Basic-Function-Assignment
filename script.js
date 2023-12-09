// ASIGNMENT 01
document.write("ASSIGNMENT 01");
document.write("<br>");
document.write("<br>");

// Simple Sum
document.write("Simple Sum:");
document.write("<br>");

/* Create a function named `add` that takes two parameters, `a` and `b`, and logs their sum to the console. Call the function with different numbers to ensure it works. */

function addition(a , b) {
    var sum = a + b;
    document.write(`The sum of ${a} + ${b} is ${sum}` , "<br>");
}

addition(15 , 16);
addition(43 , 86);
addition(11 , 92);

document.write("<br>");
document.write("<br>");

// ASIGNMENT 02
document.write("ASSIGNMENT 02");
document.write("<br>");
document.write("<br>");

// Greetings
document.write("Greetings:")
document.write("<br>");

/* Write a function called `greet` that takes a `name` as a parameter and logs a greeting message to the console. Call the function with different names. */

function greet(name) {
    document.write(`Hey listen ${name} Don't Wait for Opportunity, Create it` , "<br>");
}

greet("Haris");
greet("Hadi");
greet("Haneen");

document.write("<br>");
document.write("<br>");

// ASIGNMENT 03
document.write("ASSIGNMENT 03");
document.write("<br>");
document.write("<br>");

// Double IT
document.write("Double IT:")
document.write("<br>");

/* Define a function named `double` that takes a number as a parameter and logs its double to the console. Test the function with various numbers. */

function double(number) {
    document.write(`Double of ${number} is ${number * 2}` , "<br>");
}

double(6);
double(64);
double(38);

document.write("<br>");
document.write("<br>");

// ASIGNMENT 04
document.write("ASSIGNMENT 04");
document.write("<br>");
document.write("<br>");

// Even or Odd Checker
document.write("Even or Odd Checker:");
document.write("<br>");

/* Create a function named `isEven` that takes a number as a parameter and logs "Even" to the console if the number is even and "Odd" if it's odd. Test the function with different numbers. */

function isEven(number) {
    if(number % 2 === 0){
        document.write(`This ${number} is Even`, "<br>");
    }
    else{
        document.write(`This ${number} is Odd`, "<br>");
    }
}

isEven(5);
isEven(24);
isEven(88);
isEven(97);

document.write("<br>");
document.write("<br>");

// ASIGNMENT 05
document.write("ASSIGNMENT 05");
document.write("<br>");
document.write("<br>");

//Max of Two Numbers
document.write("Max of Two Numbers:");
document.write("<br>");

/* Define a function named `findMax` that takes two numbers as parameters and logs the larger number to the console. Test the function with different pairs of numbers. */

// function findMax(num1 , num2) {
    
// }



function findMax(num1, num2) {
    const largeNumber = Math.max(num1, num2);
    document.write(`The larger number between ${num1} and ${num2} is: ${largeNumber}`, "<br>");
  }
  
  findMax(6, 18);  
  findMax(9, 44);  
  findMax(52, 32);  
  findMax(-2, -14);   

  document.write("<br>");
  document.write("<br>");
  
  // ASIGNMENT 06
  document.write("ASSIGNMENT 06");
  document.write("<br>");
  document.write("<br>");

  // JavaScript Times Table Printer
  document.write("JavaScript Times Table Printer:");
  document.write("<br>");

//Create a simple JavaScript function called `printTimesTable` that takes a number as input. This function should display the multiplication table for that number in a user-friendly way on the console. Make sure the output is easy to understand for everyone.

function timeTabelPrinter(num) {
    for(var i = 1; i <= 10; i++){
        document.write(num + " " + "x" + " " + i + " " + "=" + " " + i*num + "<br>");
    }
}

timeTabelPrinter(3);
timeTabelPrinter(9);










