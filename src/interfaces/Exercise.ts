import { Set } from './Set';

export interface Exercise {
    id: number;
    name: string;
    weight: string | number;
    sets: Set[];
}
