import moment from "moment";
import { Holiday } from "../../models/holiday";
import { HolidayType } from "../../models/types";
import { holidays } from "./base";

export const getMunicipalHolidays = (year: number, town: string): Holiday[] => {
  const allMunicipalHolidays = holidays
    .filter((holiday) => holiday.town === town)
    .map(
      (holiday) =>
        new Holiday({
          ...holiday,
          date: moment(`${holiday.date}${year}`, "DD/MM/YYYY").toDate(),
          type: HolidayType.MUNICIPAL,
        })
    );

  return allMunicipalHolidays;
};
