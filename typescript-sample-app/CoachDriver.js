"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LeMansCoach_1 = require("./LeMansCoach");
const NascarCoach_1 = require("./NascarCoach");
let myLeMansCoach = new LeMansCoach_1.LeMansCoach();
let myNascarCoach = new NascarCoach_1.NascarCoach();
let allCoaches = [];
allCoaches.push(myLeMansCoach);
allCoaches.push(myNascarCoach);
for (let coach of allCoaches) {
    console.log(coach.getDailyWorkout());
}
