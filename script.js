// calculate total price of phone purchase 
// bank account amount 
// bank account balance  
// buy accessories

var amount = 1200;
var phone = 650;
var accessories = [15, 30, 25];
var balance = 0;
var purchase = 0;

while(purchase <= amount) {   
    purchase = amount - phone;
    console.log("buy phone " + "left:" + amount);
    if(accessories <= amount) {
        purchase = amount - accessories;
        console.log("buy merch " + "left:" + amount);
    }
}

// add tax 
// print calculated purchase amount 

// check the amount against bank account balance
// constants: tax rate phone price accessory price spending threshold 

// functions calc tax and format price with 2 decimal places

// use prompt