import { Exercise } from './Exercise';

export interface Workout {
    id: number;
    name: string;
    day: string;
    collapsed: boolean;
    exercises: Exercise[];
}
