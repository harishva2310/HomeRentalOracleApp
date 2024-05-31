import { Coach } from "./Coach";
export class NascarCoach implements Coach{
    getDailyWorkout(): string {
        return "Do not turn right";
    }

}