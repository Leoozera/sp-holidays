"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.holidays = exports.calculateGodsFriday = exports.calculateCarnival = exports.calculateCorpusChristi = exports.calculateEaster = void 0;
var moment_1 = __importDefault(require("moment"));
var holiday_1 = require("../../models/holiday");
var types_1 = require("../../models/types");
var calculateEaster = function (year) {
    var date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setFullYear(year);
    var number = year % 19;
    var algorithm = 2200 <= year && year <= 2299
        ? (11 * number + 4) % 30
        : (11 * number + 5) % 30;
    var compensate = algorithm === 0 || (algorithm === 1 && number > 10)
        ? algorithm + 1
        : algorithm;
    var month = 1 <= compensate && compensate <= 19 ? 3 : 2;
    var fullMoon = (50 - compensate) % 31;
    date.setMonth(month, fullMoon);
    date.setMonth(month, fullMoon + (7 - date.getDay()));
    return new holiday_1.Holiday({
        date: (0, moment_1.default)(date).toDate(),
        description: "Páscoa",
        name: "Páscoa",
        type: types_1.HolidayType.NATIONAL,
    });
};
exports.calculateEaster = calculateEaster;
var calculateCorpusChristi = function (easterDate) {
    var corpusChristiDate = (0, moment_1.default)(easterDate.date).clone().add(60, "d");
    return new holiday_1.Holiday({
        date: corpusChristiDate.toDate(),
        description: "Corpus Christi",
        name: "Corpus Christi",
        isOptional: true,
        type: types_1.HolidayType.NATIONAL,
    });
};
exports.calculateCorpusChristi = calculateCorpusChristi;
var calculateCarnival = function (easterDate) {
    var carnivalDate1 = (0, moment_1.default)(easterDate.date).clone().add(-46, "d");
    var carnivalDate2 = (0, moment_1.default)(easterDate.date).clone().add(-47, "d");
    var carnivalDate3 = (0, moment_1.default)(easterDate.date).clone().add(-48, "d");
    return [
        new holiday_1.Holiday({
            date: carnivalDate1.toDate(),
            description: "Carnaval",
            isOptional: true,
            name: "Carnaval",
            type: types_1.HolidayType.NATIONAL,
        }),
        new holiday_1.Holiday({
            date: carnivalDate2.toDate(),
            description: "Carnaval",
            isOptional: true,
            name: "Carnaval",
            type: types_1.HolidayType.NATIONAL,
        }),
        new holiday_1.Holiday({
            date: carnivalDate3.toDate(),
            description: "Carnaval",
            isOptional: true,
            name: "Carnaval",
            type: types_1.HolidayType.NATIONAL,
        }),
    ];
};
exports.calculateCarnival = calculateCarnival;
var calculateGodsFriday = function (easterDate) {
    var godsFriday = (0, moment_1.default)(easterDate.date).clone().add(-2, "d");
    return new holiday_1.Holiday({
        date: godsFriday.toDate(),
        description: "Sexta-feira santa",
        name: "Sexta-feira santa",
        type: types_1.HolidayType.NATIONAL,
    });
};
exports.calculateGodsFriday = calculateGodsFriday;
exports.holidays = [
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
