import {
  Point,
  Tuple,
  Vector,
  add,
  isPoint,
  isVector,
  subtract,
} from "../src/app/primitives";

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

test("adding two vectors should return correct results", () => {
  const v1 = new Vector(1, 1, 1);
  const v2 = new Vector(2, 2, 2);
  const expected = new Vector(3, 3, 3);

  const sum = add(v1, v2);

  expect(sum).toBeInstanceOf(Vector);
  expect(sum.equalTo(expected)).toBeTruthy();
});

test("adding a point to a vector should return correct results", () => {
  const p = new Point(1, 1, 1);
  const v = new Vector(2, 2, 2);
  const expected = new Point(3, 3, 3);

  const sum = add(p, v);

  expect(sum).toBeInstanceOf(Point);
  expect(sum.equalTo(expected)).toBeTruthy();
});

test("subtracting two points should return resulting vector", () => {
  const p1 = new Point(1, 1, 1);
  const p2 = new Point(2, 2, 2);
  const expected = new Vector(-1, -1, -1);

  const difference = subtract(p1, p2);

  expect(difference).toBeInstanceOf(Vector);
  expect(difference.equalTo(expected)).toBeTruthy();
});

test("subtracting a vector from a point should return resulting point", () => {
  const p = new Point(3, 2, 1);
  const v = new Vector(5, 6, 7);
  const expected = new Point(-2, -4, -6);

  const difference = subtract(p, v);

  expect(difference).toBeInstanceOf(Point);
  expect(difference.equalTo(expected)).toBeTruthy();
});

test("subtracting two vectors should return resulting vector", () => {
  const v1 = new Vector(3, 2, 1);
  const v2 = new Vector(5, 6, 7);
  const expected = new Vector(-2, -4, -6);

  const difference = subtract(v1, v2);

  expect(difference).toBeInstanceOf(Vector);
  expect(difference.equalTo(expected)).toBeTruthy();
});

test("subtracting a point from a vector should throw an error", () => {
  const p = new Point(1, 1, 1);
  const v = new Vector(2, 2, 2);

  expect(() => subtract(v, p)).toThrowError(
    "Subtraction would result in an invalid coordinate."
  );
});
