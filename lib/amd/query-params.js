define(["require", "exports", "./utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class QueryParam {
        constructor(name, value) {
            const underlyingType = utils_1.getUnderlyingType(value);
            this._name = name;
            this._type = underlyingType;
            if (underlyingType === 'string') {
                this._value = value;
            }
            else if (underlyingType === 'number') {
                this._value = Number(value);
            }
            else {
                this._value = Array.isArray(value)
                    ? value.map(v => v.trim())
                    : value.split(',').map(v => v.trim());
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
            return this._type === 'string';
        }
        get isNumber() {
            return this._type === 'number';
        }
        get isArray() {
            return this._type === 'array';
        }
        setValue(value, mode) {
            const underlyingType = utils_1.getUnderlyingType(value);
            this._type = underlyingType;
            if (this._type === 'number' || this._type === 'string') {
                this._value = value;
            }
            else {
                const valueIsArray = Array.isArray(value);
                const parsedValue = valueIsArray ? [value] : value;
                this._value =
                    mode === 'append'
                        ? this._value.concat(...parsedValue)
                        : value;
            }
        }
    }
    exports.QueryParam = QueryParam;
});
//# sourceMappingURL=query-params.js.map