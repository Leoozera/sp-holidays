import { HolidayType } from "./types";
export declare class Holiday {
    readonly name: string;
    readonly description: string;
    readonly date: Date;
    readonly type: HolidayType;
    readonly isOptional?: boolean;
    readonly uf?: string;
    readonly town?: string;
    constructor(init: Holiday);
}
