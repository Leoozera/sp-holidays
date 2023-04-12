"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHoliday = void 0;
var data_json_1 = require("./data.json");
var isHoliday = function (date) {
    var formattedDate = date.toLocaleDateString("pt-br");
    var result = data_json_1.holidays.find(function (date) { return date === formattedDate; });
    if (result)
        return true;
    return false;
};
exports.isHoliday = isHoliday;
