import { normalizeValue, getUnderlyingType } from "../src/utils";

test('"normalizeValue" should return same value as string for string or number parameter', () => {
  const strValue = normalizeValue("StringValue");
  const nmbValue = normalizeValue(420);

  expect(typeof strValue).toBe("string");
  expect(strValue).toBe("StringValue");
  expect(typeof nmbValue).toBe("string");
  expect(nmbValue).toBe("420");
});

test('"normalizeValue" should return joined values separated by a "," when parameter is an array', () => {
  const strArr = ["A", "B", "C", "D"];

  const rStrArr = normalizeValue(strArr);

  expect(typeof rStrArr).toBe("string");
  expect(rStrArr).toBe("A,B,C,D");
});

test('"normalizeValue" shold throw an error when parameter passed isn`t of type string, number or array', () => {
  expect(() => normalizeValue({ foo: "bar" } as any)).toThrowError();
});

test('"getUnderlyingValue" should return string for string value', () => {
  const res = getUnderlyingType("param");
  expect(res).toBe("string");
});

test('"getUnderlyingValue" should return number for number value', () => {
  const res = getUnderlyingType(420);
  expect(res).toBe("number");
});

test('"getUnderlyingValue" should return array for string value which includes ","', () => {
  const res = getUnderlyingType("p,a,r,a,m");
  expect(res).toBe("array");
});

test('"getUnderlyingValue" should return array for array value', () => {
  const res = getUnderlyingType(["p", "a", "r", "a", "m"]);
  expect(res).toBe("array");
});

test('"getUnderlyingValue" shold throw an error when parameter passed isn`t of type string, number or array', () => {
  expect(() => getUnderlyingType({ foo: "bar" } as any)).toThrowError();
});
