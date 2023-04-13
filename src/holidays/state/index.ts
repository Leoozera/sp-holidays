import moment from "moment";
import { Holiday } from "../../models/holiday";
import { HolidayType } from "../../models/types";
import { holidays } from "./base";

export const getStateHolidays = (year: number, uf: string): Holiday[] => {
  const allMunicipalHolidays = holidays
    .filter((holiday) => holiday.uf === uf.toUpperCase())
    .map(
      (holiday) =>
        new Holiday({
          ...holiday,
          date: moment(`${holiday.date}${year}`, "DD/MM/YYYY").toDate(),
          type: HolidayType.STATE,
        })
    );

  return allMunicipalHolidays;
};
