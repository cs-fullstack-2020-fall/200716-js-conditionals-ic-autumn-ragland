console.log("Sanity!") // check that files are linked

// PROBLEM 1 --------------------------------------------------------

// Ask the user to enter their name. 
let userName = prompt("Enter your name!");
// Ask the user if it is morning or night. 
let timeOfDay = prompt("Is it morning or night?");

// // .toUpperCase()
// let timeOfDayUpper = timeOfDay.toUpperCase();
// console.log(timeOfDayUpper)

if(timeOfDay == "Morning"){ // If the user enters "morning" print Good morning [NAME].
    console.log("Good morning " + userName);
} else if (timeOfDay == "Night"){ // If the user enters "night" print Good evening [NAME].
    console.log("Good evening " + userName);
}

// PROBLEM 2 --------------------------------------------------------

// Ask the user to enter a number. 
 let userNum1 = parseInt(prompt("Enter a number"));

// Ask the user to enter another number. 
 let userNum2 = parseInt(prompt("Enter ANOTHER number"));

// find diff of user numbers
let numDiff = userNum1 - userNum2

if(numDiff >= 10){// If the difference of these numbers is greater than or equal to 10 print The difference of [NUMBER ONE] and [NUMBER TWO] is 10 or greater
 console.log("The difference of " + userNum1 +  " and " + userNum2 +  " is 10 or greater");
} else { // Otherwise print The difference of [NUMBER ONE] and [NUMBER TWO] is [DIFFERENCE]
    console.log("The difference of " + userNum1 +  " and " + userNum2 + " is" + numDiff);
}

// PROBLEM 3 --------------------------------------------------------

// Declare a variable called `returningUser` with the value "Kenn". 
let returningUser = "Kenn";

// Declare a variable called `num` with the value 10. 
let num = 10;

// Ask the user to guess a number. 
let userGuess = parseInt(prompt("Guess a number"));

// Ask the user to enter their name. 
let userName3 = prompt("Enter your name");

if (userGuess == num && userName3 != returningUser) { // If the user guess the correct number BUT their name is not Kenn print Right number, wrong user
    console.log("Right number, wrong user");
} else if (userGuess != num && userName3 == returningUser) { // If the user guesses the wrong number BUT their name is Kenn print Wrong number, right user
    console.log("Wrong number, right name");
} else if (userGuess == num && userName3 == returningUser) { // If the user guesses the correct number AND their name is Kenn print Right
    console.log("RIGHT!");
}

