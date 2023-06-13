// Code your solutions in this file
function writeCards(names, eventName) {
    let thankYouCards = [];
  
    for (let i = 0; i < names.length; i++) {
      let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
      thankYouCards.push(message);
    }
  
    return thankYouCards;
  }
  let names = ['Kim', 'Nabs', 'Charlie'];
let eventName = 'birthday';

let messages = writeCards(names, eventName);
console.log(messages);

function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  