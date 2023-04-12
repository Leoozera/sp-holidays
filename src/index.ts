import { holidays } from "./data.json";

export const isHoliday = (date: Date) => {
  const formattedDate = date.toLocaleDateString("pt-br");

  const result = holidays.find((date) => date === formattedDate);
  if (result) return true;
  return false;
};
