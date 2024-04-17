#! /usr/bin/env node
import inquirer from "inquirer";

// 1) computer will generate a number. Done.

// 2) user input for guessing number - Done.

// 3) compare user input with computer generated number  and show result - Done.


const randomnumber = Math.floor(Math.random() * 10 + 1);

console.log("Welcome to Number Guessing Game");

const answers = await inquirer.prompt([

   {
     name: "UserGuessedNumber",
     type: "number",
     message: "Please guess a number between 1-10: ",
   }

]);

if(answers.UserGuessedNumber === randomnumber){
       console.log("congratulations! you gueessed right number.");
}else{
    console.log("Sorry you guessed wrong number.");
}