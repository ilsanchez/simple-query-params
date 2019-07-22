"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query_params_1 = require("./query-params");
const constants_1 = require("./constants");
class Url {
    constructor(url) {
        this._originalUrl = url;
        this._initialize(url);
    }
    get builtUrl() {
        return `${this._baseUrl}${constants_1.URL_SPLIT_TOKEN}${this._params
            .map((param) => param.stringified)
            .join(constants_1.PARAMETER_SPLIT_TOKEN)}`;
    }
    get originalUrl() {
        return this._originalUrl;
    }
    setValue(name, value, mode) {
        const param = this._params.find(p => p.name === name);
        if (param) {
            param.setValue(value, mode);
        }
        else {
            this._params.concat([new query_params_1.QueryParam(name, value)]);
        }
        return this;
    }
    _initialize(url) {
        const [baseUrl, rawParams] = this._extractUrlParts(url);
        this._baseUrl = baseUrl;
        this._params = this._extractQueryParams(rawParams);
    }
    _extractUrlParts(url) {
        const splitted = url.split(constants_1.URL_SPLIT_TOKEN);
        return splitted.length === 2
            ? [splitted[0], splitted[1]]
            : [splitted[0], ""];
    }
    _extractQueryParams(rawParams) {
        const splittedQP = rawParams.split(constants_1.PARAMETER_SPLIT_TOKEN);
        return splittedQP.map((param) => {
            const [name, value] = param.split("=");
            return new query_params_1.QueryParam(name, value);
        });
    }
}
exports.Url = Url;
//# sourceMappingURL=url.js.map