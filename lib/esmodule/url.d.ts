import { QueryParam, QueryParamType } from './query-params';
export declare class Url {
    private _baseUrl;
    private _originalUrl;
    private _params;
    constructor(url: string);
    readonly builtUrl: string;
    readonly originalUrl: string;
    setValue(name: string, value: QueryParamType, mode?: 'append' | 'replace'): this;
    getParam(name: string): QueryParam | undefined;
    private _initialize;
    private _extractUrlParts;
    private _extractQueryParams;
}
