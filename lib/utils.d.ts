import { QueryParamType, QueryParamRawType } from './query-params';
export declare const normalizeValue: (value: QueryParamType) => string;
export declare const getUnderlyingType: (value: QueryParamType) => QueryParamRawType;
