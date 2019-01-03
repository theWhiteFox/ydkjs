const accessoryPrice = 9.99;
const taxRate = 0.08;

var balance = 302.21;
var amount = 99.99;

amount = amount * 1 + accessoryPrice;

if (amount < balance) {
  amount = amount + accessoryPrice;
  balance = balance - amount;
  // console.log("Balance: " + balance.toFixed(2));
} else {
  console.log("Nope");
}

var i = 0;

while (i < 9) {
  if (i < 9) {
    i = i + 1;
  }
  console.log(i);
}

function format(amt) {
  return "€" + amt.toFixed(2);
}

function calculateFinalPurchaseAmount(amt) {
    amt = amt + (amt * taxRate);

    return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount(amount);

console.log(format(amount));
