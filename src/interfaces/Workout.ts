import { Day } from './Day';
import { Exercise } from './Exercise';

export interface Workout {
    id: number;
    name: string;
    day: Day;
    isActive: boolean;
    showExercises: boolean;
    exercises: Exercise[];
}
