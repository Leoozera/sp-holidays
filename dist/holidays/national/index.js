"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNationalHolidays = void 0;
var moment_1 = __importDefault(require("moment"));
var holiday_1 = require("../../models/holiday");
var types_1 = require("../../models/types");
var base_1 = require("./base");
var getNationalHolidays = function (year) {
    var easterDate = (0, base_1.calculateEaster)(year);
    var carnival = (0, base_1.calculateCarnival)(easterDate);
    var corpusChristi = (0, base_1.calculateCorpusChristi)(easterDate);
    var godsFriday = (0, base_1.calculateGodsFriday)(easterDate);
    var otherHolidays = base_1.holidays.map(function (holiday) {
        return new holiday_1.Holiday(__assign(__assign({}, holiday), { date: (0, moment_1.default)("".concat(holiday.date).concat(year), "DD/MM/YYYY").toDate(), type: types_1.HolidayType.NATIONAL }));
    });
    var allNationalHolidays = __spreadArray(__spreadArray(__spreadArray([
        easterDate
    ], carnival, true), [
        corpusChristi,
        godsFriday
    ], false), otherHolidays, true);
    return allNationalHolidays;
};
exports.getNationalHolidays = getNationalHolidays;
