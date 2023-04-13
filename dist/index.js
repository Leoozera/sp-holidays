"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWorkday = exports.isHoliday = void 0;
var dotenv_1 = require("dotenv");
var moment_1 = __importDefault(require("moment"));
var municipal_1 = require("./holidays/municipal");
var national_1 = require("./holidays/national");
var state_1 = require("./holidays/state");
(0, dotenv_1.config)();
var isHoliday = function (_a) {
    var dateString = _a.dateString, stateUF = _a.stateUF, town = _a.town;
    var selectedDate = (0, moment_1.default)(dateString, "DD/MM/YYYY").toDate();
    var year = selectedDate.getFullYear();
    var nationalHolidays = (0, national_1.getNationalHolidays)(year);
    var isNationalHoliday = nationalHolidays.find(function (holiday) {
        return (0, moment_1.default)(holiday.date).isSame(selectedDate);
    });
    if (isNationalHoliday)
        return isNationalHoliday;
    if (stateUF) {
        var stateHolidays = (0, state_1.getStateHolidays)(year, stateUF);
        var isStateHoliday = stateHolidays.find(function (holiday) {
            return holiday.uf === stateUF && (0, moment_1.default)(holiday.date).isSame(selectedDate);
        });
        if (isStateHoliday)
            return isStateHoliday;
    }
    if (town) {
        var townHolidays = (0, municipal_1.getMunicipalHolidays)(year, town);
        var isTownHolidays = townHolidays.find(function (holiday) {
            return holiday.town === town && (0, moment_1.default)(holiday.date).isSame(selectedDate);
        });
        if (isTownHolidays)
            return isTownHolidays;
    }
    return false;
};
exports.isHoliday = isHoliday;
var isWorkday = function (_a) {
    var dateString = _a.dateString, stateUF = _a.stateUF, town = _a.town;
    var selectedDate = (0, moment_1.default)(dateString, "DD/MM/YYYY").toDate();
    var weekday = selectedDate.getDay();
    if (weekday === 0 || weekday === 6)
        return false;
    var _isHoliday = (0, exports.isHoliday)({ dateString: dateString, stateUF: stateUF, town: town });
    if (_isHoliday)
        return false;
    return true;
};
exports.isWorkday = isWorkday;
