"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class QueryParam {
    constructor(name, value) {
        const underlyingType = utils_1.getUnderlyingType(value);
        this._name = name;
        this._type = underlyingType;
        if (underlyingType === "string") {
            this._value = value;
        }
        else if (underlyingType === "number") {
            this._value = Number(value);
        }
        else if (underlyingType === "array") {
            if (Array.isArray(value)) {
                this._value = value;
            }
            else {
                this._value = value.split(",");
            }
        }
        else {
            throw new Error('Invalid value for query param. It must be one of: "string" | "number" | "Array<string>"');
        }
    }
    get stringified() {
        return `${this._name}=${utils_1.normalizeValue(this._value)}`;
    }
    get value() {
        return this._value;
    }
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    get isString() {
        return this._type === "string";
    }
    get isNumber() {
        return this._type === "number";
    }
    get isArray() {
        return this._type === "array";
    }
    setValue(value, mode) {
        if (this._type === 'number' || this._type === 'string') {
            this._value = value;
        }
        else {
            const valueIsArray = Array.isArray(value);
            let parsedValue = valueIsArray ? [value] : value;
            if (mode === 'append') {
                this._value = this._value.concat(parsedValue);
            }
            else {
                this._value = value;
            }
        }
    }
}
exports.QueryParam = QueryParam;
//# sourceMappingURL=query-params.js.map