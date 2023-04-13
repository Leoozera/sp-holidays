import moment from "moment";
import { Holiday } from "../../models/holiday";
import { HolidayType } from "../../models/types";

export const calculateEaster = (year: number): Holiday => {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setFullYear(year);

  const number = year % 19;
  const algorithm =
    2200 <= year && year <= 2299
      ? (11 * number + 4) % 30
      : (11 * number + 5) % 30;
  const compensate =
    algorithm === 0 || (algorithm === 1 && number > 10)
      ? algorithm + 1
      : algorithm;
  const month = 1 <= compensate && compensate <= 19 ? 3 : 2;
  const fullMoon = (50 - compensate) % 31;

  date.setMonth(month, fullMoon);
  date.setMonth(month, fullMoon + (7 - date.getDay()));

  return new Holiday({
    date: moment(date).toDate(),
    description: "Páscoa",
    name: "Páscoa",
    type: HolidayType.NATIONAL,
  });
};

export const calculateCorpusChristi = (easterDate: Holiday): Holiday => {
  const corpusChristiDate = moment(easterDate.date).clone().add(60, "d");

  return new Holiday({
    date: corpusChristiDate.toDate(),
    description: "Corpus Christi",
    name: "Corpus Christi",
    isOptional: true,
    type: HolidayType.NATIONAL,
  });
};

export const calculateCarnival = (easterDate: Holiday): Holiday[] => {
  const carnivalDate1 = moment(easterDate.date).clone().add(-46, "d");
  const carnivalDate2 = moment(easterDate.date).clone().add(-47, "d");
  const carnivalDate3 = moment(easterDate.date).clone().add(-48, "d");

  return [
    new Holiday({
      date: carnivalDate1.toDate(),
      description: "Carnaval",
      isOptional: true,
      name: "Carnaval",
      type: HolidayType.NATIONAL,
    }),
    new Holiday({
      date: carnivalDate2.toDate(),
      description: "Carnaval",
      isOptional: true,
      name: "Carnaval",
      type: HolidayType.NATIONAL,
    }),
    new Holiday({
      date: carnivalDate3.toDate(),
      description: "Carnaval",
      isOptional: true,
      name: "Carnaval",
      type: HolidayType.NATIONAL,
    }),
  ];
};

export const calculateGodsFriday = (easterDate: Holiday): Holiday => {
  const godsFriday = moment(easterDate.date).clone().add(-2, "d");

  return new Holiday({
    date: godsFriday.toDate(),
    description: "Sexta-feira santa",
    name: "Sexta-feira santa",
    type: HolidayType.NATIONAL,
  });
};

export const holidays = [
  {
    name: "Ano novo",
    description: "Dia da confraternização universal",
    date: "01/01/",
    type: "national",
  },
  {
    name: "Dia do trabalho",
    description: "Dia do trabalho",
    date: "01/05/",
    type: "national",
  },
  {
    name: "Independência do Brasil",
    description: "Dia da independência do Brasil",
    date: "07/09/",
    type: "national",
  },
  {
    name: "Dia de Nossa Senhora Aparecida",
    description: "Dia de Nossa Senhora Aparecida",
    date: "12/10/",
    type: "national",
  },
  {
    name: "Dia do servidor público",
    description: "Dia do servidor público",
    date: "28/10/",
    type: "national",
  },
  {
    name: "Finados",
    description: "Dia de finados",
    date: "02/11/",
    type: "national",
  },
  {
    name: "Proclamação da República",
    description: "Dia que ocorreu a proclamação da república",
    date: "15/11/",
    type: "national",
  },
  {
    name: "Natal",
    description: "Natal",
    date: "25/12/",
    type: "national",
  },
];
