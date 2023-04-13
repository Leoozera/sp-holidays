import { config } from "dotenv";
import moment from "moment";
import { getMunicipalHolidays } from "./holidays/municipal";
import { getNationalHolidays } from "./holidays/national";
import { getStateHolidays } from "./holidays/state";
import { Holiday } from "./models/holiday";

config();

interface isHolidayProps {
  dateString: string;
  stateUF?: string;
  town?: string;
}

export const isHoliday = ({
  dateString,
  stateUF,
  town,
}: isHolidayProps): boolean | Holiday => {
  const selectedDate = moment(dateString, "DD/MM/YYYY").toDate();
  const year = selectedDate.getFullYear();

  const nationalHolidays = getNationalHolidays(year);
  const isNationalHoliday = nationalHolidays.find((holiday) =>
    moment(holiday.date).isSame(selectedDate)
  );

  if (isNationalHoliday) return isNationalHoliday;

  if (stateUF) {
    const stateHolidays = getStateHolidays(year, stateUF);
    const isStateHoliday = stateHolidays.find(
      (holiday) =>
        holiday.uf === stateUF && moment(holiday.date).isSame(selectedDate)
    );

    if (isStateHoliday) return isStateHoliday;
  }

  if (town) {
    const townHolidays = getMunicipalHolidays(year, town);
    console.log(townHolidays);
    const isTownHolidays = townHolidays.find(
      (holiday) =>
        holiday.town === town && moment(holiday.date).isSame(selectedDate)
    );
    if (isTownHolidays) return isTownHolidays;
  }

  return false;
};

interface isWorkdayProps {
  dateString: string;
  stateUF?: string;
  town?: string;
}

export const isWorkday = ({
  dateString,
  stateUF,
  town,
}: isWorkdayProps): boolean => {
  const selectedDate = moment(dateString, "DD/MM/YYYY").toDate();
  const weekday = selectedDate.getDay();

  if (weekday === 0 || weekday === 6) return false;

  const _isHoliday = isHoliday({ dateString, stateUF, town });

  if (_isHoliday) return false;

  return true;
};

console.log(isWorkday({dateString: '10-04-2023'}))