import { ARRAY_PARAMETER_JOIN_TOKEN } from './constants';
export const normalizeValue = (value) => {
    if ('string' === typeof value) {
        return value;
    }
    else if ('number' === typeof value) {
        return value.toString();
    }
    else if (Array.isArray(value)) {
        return value.join(ARRAY_PARAMETER_JOIN_TOKEN);
    }
    else {
        throw new Error('Invalid value for query param. It must be one of: "string" | "number" | "Array<string>"');
    }
};
export const getUnderlyingType = (value) => {
    if ('string' === typeof value) {
        if (value.includes(',')) {
            return 'array';
        }
        else if (Number(value)) {
            return 'number';
        }
        return 'string';
    }
    else if (Number(value)) {
        return 'number';
    }
    else {
        if (Array.isArray(value)) {
            return 'array';
        }
    }
    throw new Error('Invalid value for query param. It must be one of: "string" | "number" | "Array<string>"');
};
//# sourceMappingURL=utils.js.map