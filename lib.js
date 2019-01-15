export const sqrt = Math.sqrt;
export function square(x) {
  return x * x;
}
export function diag(x, y) {
  return sqrt(square(x) + square(y));
}

export var helloWorld = "Hello World!";

let amt = 0.0;

export function printAmt(amt) {
  return "€" + amt.toFixed(2);
}

function formatAmt() {
  // console.log(square(3));
  return "€" + amt.toFixed(2);
}

const TAX_RATE = 0.08;

export function calculateFinalPurchaseAmount(amount) {
  amount = amount + amount * TAX_RATE;
  return amount;
}

const one = () => {
  let a = 1;
  console.log("func one: " + a);
};

const two = () => {
  let a = 2;
  console.log("func two: " + a);
};

const outer = () => {
  let a = 1;

  const inner = () => {
    let b = 2;
    // access to 'a' & 'b'
    console.log(a + b);
  };
  inner();
  // access to only 'a'
  console.log(a);
};
// outer();

// one();
// two();

const SPENDING_THRESHOLD = 200.0;
const PHONE_PRICE = 89.0;
const ACCESSORY_PRICE = 9.0;

var currentAcc = 303.01;
var amount = 0;

function calcTaxAmt(amount) {
  return amount * TAX_RATE;
}

while(amount < currentAcc) {

  amount = amount + PHONE_PRICE;

  if(amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
}
amount = calcTaxAmt(amount);
// console.log('Amount: ' + formatAmt(amount));

if(amount > currentAcc) {
  console.log('You cannot afford this, remaining: ' + currentAcc);
}

// console.log(square(11)); // 121
// console.log(diag(4, 3)); // 5
// printAmt(amt * 2);
