// ===============================================
// Homework 9 — Exercise 3: the Supra bill
// This program has THREE bugs. Don't fix them by hand:
// find them with Command Code in plan mode, then let it fix them
// one at a time, and read every diff before you accept it.
// The steps are in EXERCISES.md, exercise 3.
//
// Run it: node exercise_3.js
// ===============================================

const bill = [
    { dish: "Khachapuri", price: 12, veg: true },
    { dish: "Mtsvadi",    price: 15, veg: false },
    { dish: "Lobio",      price: 8,  veg: true },
    { dish: "Chakapuli",  price: 14, veg: false },
    { dish: "Pkhali",     price: 7,  veg: true },
];


// Every dish on its own line, like "1. Khachapuri · 12 ₾"
for (let i = 0; i < bill.length; i++) {
    console.log(`${i + 1}. ${bill[i].dish} · ${bill[i].price} ₾`);
}


// The total of the whole bill
const total = bill.reduce((sum, item) => sum + item.price, 0);
console.log("total:", total);


// The names of the veggie dishes
const veggie = bill.filter(item => item.veg === true).map(item => item.dish);
console.log("veggie:", veggie);


// How much does Mtsvadi cost?
const mtsvadi = bill.find(item => item.dish === "Mtsvadi");
console.log("Mtsvadi costs:", mtsvadi.price);
