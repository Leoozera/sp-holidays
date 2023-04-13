import { Holiday } from "../../models/holiday";
export declare const calculateEaster: (year: number) => Holiday;
export declare const calculateCorpusChristi: (easterDate: Holiday) => Holiday;
export declare const calculateCarnival: (easterDate: Holiday) => Holiday[];
export declare const calculateGodsFriday: (easterDate: Holiday) => Holiday;
export declare const holidays: {
    name: string;
    description: string;
    date: string;
    type: string;
}[];
