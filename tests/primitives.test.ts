import {
  Point,
  Vector,
  add,
  isPoint,
  isVector,
  subtract,
  equal,
} from "../src/app/primitives";

test("vector should have 0 value for w field", () => {
  const v: Vector = { x: 4.3, y: -4.2, z: 3.1, w: 0 };

  expect(v.w).toBe(0);
});

test("point should have 1 value for w field", () => {
  const p = new Point(1, 1, 1);

  expect(p.w).toBe(1);
});

test("isPoint returns true when coordinate is a point", () => {
  const p = new Point(1, 1, 1);
  const point = isPoint(p);

  expect(point).toBeTruthy();
});

test("isPoint returns false when coordinate is not a point", () => {
  const v = new Vector(1, 1, 1);
  const point = isPoint(v);

  expect(point).toBeFalsy();
});

test("isVector returns true when coordinate is a vector", () => {
  const v = new Vector(1, 1, 1);
  const vector = isVector(v);

  expect(vector).toBeTruthy();
});

test("isVector returns false when coordinate is not a vector", () => {
  const p = new Point(1, 1, 1);
  const vector = isVector(p);

  expect(vector).toBeFalsy();
});

test("equalTo should return true if coordinates are equal", () => {
  const v1 = new Vector(1, 1, 1);
  const v2 = new Vector(1, 1, 1);

  const eq = equal(v1, v2);

  expect(eq).toBeTruthy();
});

test("equalTo should return false if coordinates are not equal", () => {
  const c1 = new Point(1, 1, 1);
  const c2 = new Vector(1, 1, 1);

  const eq = equal(c1, c2);

  expect(eq).toBeFalsy();
});

test("adding two vectors should return correct results", () => {
  const v1 = new Vector(1, 1, 1);
  const v2 = new Vector(2, 2, 2);
  const expected = new Vector(3, 3, 3);

  const sum = add(v1, v2);
  const eq = equal(sum, expected);

  expect(sum).toBeInstanceOf(Vector);
  expect(eq).toBeTruthy();
});

test("adding a point to a vector should return correct results", () => {
  const p = new Point(1, 1, 1);
  const v = new Vector(2, 2, 2);
  const expected = new Point(3, 3, 3);

  const sum = add(p, v);
  const eq = equal(sum, expected);

  expect(sum).toBeInstanceOf(Point);
  expect(eq).toBeTruthy();
});

test("subtracting two points should return resulting vector", () => {
  const p1 = new Point(1, 1, 1);
  const p2 = new Point(2, 2, 2);
  const expected = new Vector(-1, -1, -1);

  const difference = subtract(p1, p2);
  const eq = equal(difference, expected);

  expect(difference).toBeInstanceOf(Vector);
  expect(eq).toBeTruthy();
});

test("subtracting a vector from a point should return resulting point", () => {
  const p = new Point(3, 2, 1);
  const v = new Vector(5, 6, 7);
  const expected = new Point(-2, -4, -6);

  const difference = subtract(p, v);
  const eq = equal(difference, expected);

  expect(difference).toBeInstanceOf(Point);
  expect(eq).toBeTruthy();
});

test("subtracting two vectors should return resulting vector", () => {
  const v1 = new Vector(3, 2, 1);
  const v2 = new Vector(5, 6, 7);
  const expected = new Vector(-2, -4, -6);

  const difference = subtract(v1, v2);
  const eq = equal(difference, expected);

  expect(difference).toBeInstanceOf(Vector);
  expect(eq).toBeTruthy();
});

test("subtracting a point from a vector should throw an error", () => {
  const p = new Point(1, 1, 1);
  const v = new Vector(2, 2, 2);

  expect(() => subtract(v, p)).toThrowError(
    "Subtraction would result in an invalid coordinate."
  );
});

test("adding two points should throw an error", () => {
  const p1 = new Point(1, 1, 1);
  const p2 = new Point(2, 2, 2);

  expect(() => add(p1, p2)).toThrowError(
    "Addition would result in an invalid coordinate."
  );
});
