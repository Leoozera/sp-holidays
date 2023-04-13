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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStateHolidays = void 0;
var moment_1 = __importDefault(require("moment"));
var holiday_1 = require("../../models/holiday");
var types_1 = require("../../models/types");
var base_1 = require("./base");
var getStateHolidays = function (year, uf) {
    var allMunicipalHolidays = base_1.holidays
        .filter(function (holiday) { return holiday.uf === uf.toUpperCase(); })
        .map(function (holiday) {
        return new holiday_1.Holiday(__assign(__assign({}, holiday), { date: (0, moment_1.default)("".concat(holiday.date).concat(year), "DD/MM/YYYY").toDate(), type: types_1.HolidayType.STATE }));
    });
    return allMunicipalHolidays;
};
exports.getStateHolidays = getStateHolidays;
