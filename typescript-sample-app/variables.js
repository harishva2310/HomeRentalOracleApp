"use strict";
let found = true;
let a = 88.2;
let firstName = "Harish";
let lastName = "VA";
console.log(found);
console.log(a);
console.log(`Name = ${firstName} ${lastName}`); //Back tick ` symbol for template strings
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("Number array");
let reviews = [5, 4, 3, 666, 1];
for (let review of reviews) {
    console.log(review);
}
let sports = ["F1", "GT3", "LeMans"];
sports.push("NASCAR");
sports.push("Dakar");
for (let sport of sports) {
    console.log(sport);
}
