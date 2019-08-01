import { normalizeValue, getUnderlyingType } from './utils';
export class QueryParam {
    constructor(name, value) {
        const underlyingType = getUnderlyingType(value);
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
        return `${this._name}=${normalizeValue(this._value)}`;
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
        const underlyingType = getUnderlyingType(value);
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
//# sourceMappingURL=query-params.js.map