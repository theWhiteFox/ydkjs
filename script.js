// Program to calculate total price of phone purchase
const phones = {
  price: 650,
  price: 200,
  price: 1200
};

// bank account amount
var balance = 2000;
// buy accessories
const accessories = {
  charger: 50,
  headphones: 20,
  phoneCase: 9
};

const spendingLimit = 200;
const taxRate = 0.08;
const phonePrice = 99.99;
const accessoryPrice = 9.99;

var balance = 303.91;
var amount = 0;

console.log(phones.price);

while (amount < balance) {

    // console.log(phones.samsung);

    // for(phone in phones) {
    //     console.log(phones[phone]);
    //     amount = amount + phones[phone];
    // }    
  
    if (amount < spendingLimit) {
      amount = amount + accessoryPrice;
    }
  }
  



// function calculateTax(amt) {
//   return amt * taxRate;
// }

// function formatAmount(amt) {
//   return "€" + amt.toFixed(2);
// }

// while (amount < balance) {
//   amount = amount + phonePrice;

//   if (amount < spendingLimit) {
//     amount = amount + accessoryPrice;
//   }
// }

// amount = amount + calculateTax(amount);

// console.log("Your Purchase: " + formatAmount(amount));

// if(amount > bankBalance) {
//     console.log("You can't afford this ");
// }