import moment from "moment";
import { Holiday } from "../../models/holiday";
import { HolidayType } from "../../models/types";
import {
  calculateCarnival,
  calculateCorpusChristi,
  calculateEaster,
  calculateGodsFriday,
  holidays,
} from "./base";

export const getNationalHolidays = (year: number): Holiday[] => {
  const easterDate = calculateEaster(year);
  const carnival = calculateCarnival(easterDate);
  const corpusChristi = calculateCorpusChristi(easterDate);
  const godsFriday = calculateGodsFriday(easterDate);

  const otherHolidays = holidays.map((holiday) => {
    return new Holiday({
      ...holiday,
      date: moment(`${holiday.date}${year}`, "DD/MM/YYYY").toDate(),
      type: HolidayType.NATIONAL,
    });
  });

  const allNationalHolidays = [
    easterDate,
    ...carnival,
    corpusChristi,
    godsFriday,
    ...otherHolidays,
  ];

  return allNationalHolidays;
};
