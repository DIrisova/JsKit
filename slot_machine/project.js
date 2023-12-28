// STEPS:
// 1. deposit some money
// 2. determen number of lines to bet
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the slot machine has won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmont = prompt("Enter deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmont);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount. Please try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines. Please try again.");
    } else {
      return numberOfLines;
    }
  }
};

const depositAmount = deposit();
console.log(`You have deposited ${depositAmount} dollars.`);

const numberOfLines = getNumberOfLines();