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

const getNumberOfLines = () => {
    
}



};

const depositAmount = deposit();
console.log(`You have deposited ${depositAmount} dollars.`);
