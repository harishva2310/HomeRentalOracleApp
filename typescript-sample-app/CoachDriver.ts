
import { Coach } from "./Coach";
import { LeMansCoach } from "./LeMansCoach";
import { NascarCoach } from "./NascarCoach";

let myLeMansCoach=new LeMansCoach();
let myNascarCoach=new NascarCoach();

let allCoaches:Coach[]=[];

allCoaches.push(myLeMansCoach);
allCoaches.push(myNascarCoach);

for(let coach of allCoaches){
    console.log(coach.getDailyWorkout());
}