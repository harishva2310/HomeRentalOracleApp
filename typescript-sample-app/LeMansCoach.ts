import { Coach } from "./Coach";
export class LeMansCoach implements Coach{
    getDailyWorkout(): string {
        return "Practice trail braking";
    }

}