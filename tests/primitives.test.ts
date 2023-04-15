import { Point, Tuple, Vector, isPoint, isVector } from "../src/app/primitives";

test("vector should have 0 value for w field", () => {
  const v = new Vector(4.3, -4.2, 3.1);

  expect(v.w).toBe(0);
});

test("point should have 1 value for w field", () => {
  const p = new Point();

  expect(p.w).toBe(1);
});

test("isPoint returns true when tuple is a point", () => {
  const t = new Tuple(1, 1, 1, 1);
  const point = isPoint(t);

  expect(point).toBeTruthy();
});

test("isPoint returns false when tuple is not a point", () => {
  const t = new Tuple(1, 1, 1, 0);
  const point = isPoint(t);

  expect(point).toBeFalsy();
});

test("isVector returns true when tuple is a vector", () => {
  const t = new Tuple(1, 1, 1, 0);
  const vector = isVector(t);

  expect(vector).toBeTruthy();
});

test("isVector returns false when tuple is not a vector", () => {
  const t = new Tuple(1, 1, 1, 1);
  const vector = isVector(t);

  expect(vector).toBeFalsy();
});

test("equalTo should return true if tuples are equal", () => {
  const t1 = new Tuple(1, 1, 1, 1);
  const t2 = new Tuple(1, 1, 1, 1);

  const equal = t1.equalTo(t2);

  expect(equal).toBeTruthy();
});

test("equalTo should return false if tuples are not equal", () => {
  const t1 = new Point(1, 1, 1);
  const t2 = new Vector(1, 1, 1);

  const equal = t1.equalTo(t2);

  expect(equal).toBeFalsy();
});
