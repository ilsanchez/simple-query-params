import { QueryParam } from "../src/query-params";

test("QueryParam with plain string value", () => {
  const qParamStr = new QueryParam("name", "value");

  expect(qParamStr).toBeInstanceOf(QueryParam);

  expect(qParamStr.value).toBe("value");

  expect(qParamStr.isString).toBeTruthy();

  expect(qParamStr.isArray).toBeFalsy();

  expect(qParamStr.isNumber).toBeFalsy();

  expect(qParamStr.stringified).toBe("name=value");

  expect(qParamStr.type).toBe("string");

  expect(qParamStr.name).toBe("name");

  qParamStr.setValue(['v', 'a', 'l', 'u', 'e']);

  expect(qParamStr.isArray).toBeTruthy();
});

test("QueryParam with number value", () => {
  const qParamNmb = new QueryParam("name", 420);

  expect(qParamNmb).toBeInstanceOf(QueryParam);

  expect(qParamNmb.value).toBe(420);

  expect(qParamNmb.isString).toBeFalsy();

  expect(qParamNmb.isArray).toBeFalsy();

  expect(qParamNmb.isNumber).toBeTruthy();

  expect(qParamNmb.stringified).toBe("name=420");

  expect(qParamNmb.type).toBe("number");

  expect(qParamNmb.name).toBe("name");

  qParamNmb.setValue("v,a,l,u,e");

  expect(qParamNmb.isArray).toBeTruthy();
});

test("QueryParam with plain array value", () => {
  const value = ["v", "a", "l", "u", "e"];

  const qParamArr = new QueryParam("name", value);

  expect(qParamArr).toBeInstanceOf(QueryParam);

  expect(qParamArr.value).toEqual(value);

  expect(qParamArr.isString).toBeFalsy();

  expect(qParamArr.isArray).toBeTruthy();

  expect(qParamArr.isNumber).toBeFalsy();

  expect(qParamArr.stringified).toBe("name=v,a,l,u,e");

  expect(qParamArr.type).toBe("array");

  expect(qParamArr.name).toBe("name");

  qParamArr.setValue(420);

  expect(qParamArr.isNumber).toBeTruthy();
});

test("QueryParam with stringified array value", () => {
  const qParamArrStr = new QueryParam("name", "v, a, l, u, e");

  expect(qParamArrStr).toBeInstanceOf(QueryParam);

  expect(qParamArrStr.value).toEqual(["v", "a", "l", "u", "e"]);

  expect(qParamArrStr.isString).toBeFalsy();

  expect(qParamArrStr.isArray).toBeTruthy();

  expect(qParamArrStr.isNumber).toBeFalsy();

  expect(qParamArrStr.stringified).toBe("name=v,a,l,u,e");

  expect(qParamArrStr.type).toBe("array");

  expect(qParamArrStr.name).toBe("name");

  qParamArrStr.setValue("stringValue");

  expect(qParamArrStr.isString).toBeTruthy();
});

test("QueryParam should throw an error if invalid value is passed", () => {
  expect(() => new QueryParam("name", { foo: "bar" } as any)).toThrowError();
  expect(() => new QueryParam("name", (() => ({})) as any)).toThrowError();
});

test('QueryParam should throw an error when invalid value is passed to "setValue"', () => {
  const qp = new QueryParam("name", "value");

  expect(() => qp.setValue({ foo: "bar" } as any)).toThrowError();
});

test('"setValue" should work as expected ¯\_(ツ)_/¯', () => {
  const qp = new QueryParam('name', 'value');

  qp.setValue(420);
  expect(qp.isNumber).toBeTruthy();
  expect(qp.value).toEqual(420);

  qp.setValue(['v', 'a']);
  qp.setValue(['l', 'u', 'e'], 'append');
  expect(qp.value).toEqual(['v', 'a', 'l', 'u', 'e']);
  expect(qp.isArray).toBeTruthy();
})
