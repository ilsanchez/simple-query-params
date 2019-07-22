import { normalizeValue, getUnderlyingType } from "./utils";

export type QueryParamType = string | number | string[];
export type QueryParamRawType = "string" | "number" | "array";

export class QueryParam {
  private _name: string;
  private _value: QueryParamType;
  private _type: QueryParamRawType;

  constructor(name: string, value: QueryParamType) {
    const underlyingType = getUnderlyingType(value);
    this._name = name;
    this._type = underlyingType;

    if (underlyingType === "string") {
      this._value = value;
    } else if (underlyingType === "number") {
      this._value = Number(value);
    } else if (underlyingType === "array") {
      if (Array.isArray(value)) {
        this._value = value;
      } else {
        this._value = (value as string).split(",");
      }
    } else {
      throw new Error(
        'Invalid value for query param. It must be one of: "string" | "number" | "Array<string>"'
      );
    }
  }

  get stringified(): string {
    return `${this._name}=${normalizeValue(this._value)}`;
  }

  get value(): QueryParamType {
    return this._value;
  }

  get name(): string {
    return this._name;
  }

  get type(): string {
    return this._type;
  }

  get isString(): boolean {
    return this._type === "string";
  }

  get isNumber(): boolean {
    return this._type === "number";
  }

  get isArray(): boolean {
    return this._type === "array";
  }

  public setValue(value: QueryParamType, mode?: 'append' | 'replace') {
    if(this._type === 'number' || this._type === 'string') {
      this._value = value;
    } else {
      const valueIsArray = Array.isArray(value);
      let parsedValue = valueIsArray ? [value] : value as [];
      if(mode === 'append') {
        this._value = (this._value as []).concat(parsedValue as []);
      } else {
        this._value = value;
      }
    }
  }
}
