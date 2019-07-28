import { QueryParam, QueryParamType } from "./query-params";
import { URL_SPLIT_TOKEN, PARAMETER_SPLIT_TOKEN } from "./constants";

export class Url {
  private _baseUrl!: string;
  private _originalUrl: string;
  private _params!: QueryParam[];

  constructor(url: string) {
    this._originalUrl = url;
    this._initialize(url);
  }

  get builtUrl() {
    return `${this._baseUrl}${URL_SPLIT_TOKEN}${this._params
      .map((param: QueryParam) => param.stringified)
      .join(PARAMETER_SPLIT_TOKEN)}`;
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  get originalUrl(): string {
    return this._originalUrl;
  }

  public setValue(
    name: string,
    value: QueryParamType,
    mode?: "append" | "replace"
  ): this {
    const param = this._params.find((p: QueryParam) => p.name === name);
    if (param) {
      param.setValue(value, mode);
    } else {
      this._params.concat([new QueryParam(name, value)]);
    }
    return this;
  }

  public getParam(name: string): QueryParam | undefined {
    return this._params.find((p: QueryParam) => p.name === name);
  }

  private _initialize(url: string): void {
    const [baseUrl, rawParams] = this._extractUrlParts(url);
    this._baseUrl = baseUrl;
    if (rawParams !== "") {
      this._params = this._extractQueryParams(rawParams);
    } else {
      this._params = [];
    }
  }

  private _extractUrlParts(url: string): [string, string] {
    const splitted = url.split(URL_SPLIT_TOKEN);
    return splitted.length === 2
      ? [splitted[0], splitted[1]]
      : [splitted[0], ""];
  }

  private _extractQueryParams(rawParams: string): QueryParam[] {
    const splittedQP = rawParams.split(PARAMETER_SPLIT_TOKEN);
    return splittedQP.map((param: string) => {
      const [name, value] = param.split("=");
      return new QueryParam(name, value);
    });
  }
}
