import { Holiday } from "./models/holiday";
interface isHolidayProps {
    dateString: string;
    stateUF?: string;
    town?: string;
}
export declare const isHoliday: ({ dateString, stateUF, town, }: isHolidayProps) => boolean | Holiday;
interface isWorkdayProps {
    dateString: string;
    stateUF?: string;
    town?: string;
}
export declare const isWorkday: ({ dateString, stateUF, town, }: isWorkdayProps) => boolean;
export {};
