import { HolidayType } from "./types";

export class Holiday {
  readonly name: string;
  readonly description: string;
  readonly date: Date;
  readonly type: HolidayType;
  readonly isOptional?: boolean;
  readonly uf?: string;
  readonly town?: string;

  constructor(init: Holiday) {
    this.name = init.name;
    this.description = init.description;
    this.date = init.date;
    this.type = init.type;
    this.isOptional = init.isOptional;
    this.uf = init.uf;
    this.town = init.town;
  }
}
