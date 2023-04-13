"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Holiday = void 0;
var Holiday = /** @class */ (function () {
    function Holiday(init) {
        this.name = init.name;
        this.description = init.description;
        this.date = init.date;
        this.type = init.type;
        this.isOptional = init.isOptional;
        this.uf = init.uf;
        this.town = init.town;
    }
    return Holiday;
}());
exports.Holiday = Holiday;
