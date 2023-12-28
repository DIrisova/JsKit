// STEPS:
// 1. deposit some money
// 2. determen number of lines to bet
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the slot machine has won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    A: 2,
    B: 4,
    C: 6,
    D: 8
}    

const SYMBOL_VALUE = {
    A: 5,
    B: 4,
    C: 3,
    D: 2
}




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

const getBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines) {
            console.log("Invalid bet amount. Please try again.");
        } else {
            return numberBet;
        }
    }
};

const spin = ()=> {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }
    const reels = [[], [], []];
    for (let i = 0; i < COLS; i++) {
        const reelSymbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length);
            const selectSymbol = reelSymbols[randomIndex];
            reels[i].push(selectSymbol);
            reelSymbols.splice(randomIndex, 1);

        }
    }
    return reels;
};

const reels = spin();
console.log(reels);

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);