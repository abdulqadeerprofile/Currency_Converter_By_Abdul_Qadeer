import inquirer from "inquirer";
// Currency conversion rates
const currency = {
    USD: 1, // base currency
    PKR: 280,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.67
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter your currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: 'Enter to currency',
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: 'Enter your amount',
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from]; // exchange rate for the from currency
let toAmount = currency[user_answer.to]; // exchange rate for the to currency
let amount = user_answer.amount; // amount to be converted
// Convert the amount from 'from_currency' to 'USD' first
let baseAmount = amount / fromAmount; // USD base currency equivalent
// Convert from 'USD' to 'to_currency'
let convertedAmount = baseAmount * toAmount;
console.log(`${amount} ${user_answer.from} is equal to ${convertedAmount} ${user_answer.to}`);
