export declare type QueryParamType = string | number | string[];
export declare type QueryParamRawType = 'string' | 'number' | 'array';
export declare class QueryParam {
    private _name;
    private _value;
    private _type;
    constructor(name: string, value: QueryParamType);
    readonly stringified: string;
    readonly value: QueryParamType;
    readonly name: string;
    readonly type: string;
    readonly isString: boolean;
    readonly isNumber: boolean;
    readonly isArray: boolean;
    setValue(value: QueryParamType, mode?: 'append' | 'replace'): void;
}
