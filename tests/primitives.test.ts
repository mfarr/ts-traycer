import {
  Point,
  Vector,
  add,
  isPoint,
  isVector,
  subtract,
  equal,
  negate,
  multiply,
  divide,
  magnitude,
  dot,
  cross,
  normalize,
} from "../src/app/primitives";

const v = new Vector(1, -2, 3);
const p = new Point(1, -2, 3);

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

test("negating a point should return resulting point", () => {
  const p = new Point(1, 1, 1);
  const expected = new Point(-1, -1, -1);

  const negated = negate(p);
  const eq = equal(negated, expected);

  expect(negated).toBeInstanceOf(Point);
  expect(eq).toBeTruthy();
});

test("negating a vector should return resulting vector", () => {
  const v = new Vector(2, 2, 2);
  const expected = new Vector(-2, -2, -2);

  const negated = negate(v);
  const eq = equal(negated, expected);

  expect(negated).toBeInstanceOf(Vector);
  expect(eq).toBeTruthy();
});

test("multiplying a vector by a scalar should return the resulting vector", () => {
  const expected = new Vector(3.5, -7, 10.5);

  const multiplied = multiply(v, 3.5);
  const eq = equal(multiplied, expected);

  expect(multiplied).toBeInstanceOf(Vector);
  expect(eq).toBeTruthy();
});

test("multiplying a point by a scalar should return the resulting point", () => {
  const expected = new Point(3.5, -7, 10.5);

  const multiplied = multiply(p, 3.5);
  const eq = equal(multiplied, expected);

  expect(multiplied).toBeInstanceOf(Point);
  expect(eq).toBeTruthy();
});

test("dividing a point by a scalar should return the resulting point", () => {
  const expected = new Point(0.5, -1, 1.5);

  const divided = divide(p, 2);
  const eq = equal(divided, expected);

  expect(divided).toBeInstanceOf(Point);
  expect(eq).toBeTruthy();
});

test("dividing a vector by a scalar should return the resulting vector", () => {
  const expected = new Vector(0.5, -1, 1.5);

  const divided = divide(v, 2);
  const eq = equal(divided, expected);

  expect(divided).toBeInstanceOf(Vector);
  expect(eq).toBeTruthy();
});

test("dividing by zero should throw an error", () => {
  expect(() => divide(v, 0)).toThrowError("Coordinate divide by zero error.");
});

test("magnitude should return 1 for a unit vector", () => {
  const expected = 1;

  const v = new Vector(0, 1, 0);
  const m = magnitude(v);

  expect(m).toBeCloseTo(expected, 4);
});

test("magnitude should return correct value for a positive vector", () => {
  const expected = Math.sqrt(14);

  const v = new Vector(1, 2, 3);
  const m = magnitude(v);

  expect(m).toBeCloseTo(expected, 4);
});

test("magnitude should return correct value for a negative vector", () => {
  const expected = Math.sqrt(14);

  const v = new Vector(-1, -2, -3);
  const m = magnitude(v);

  expect(m).toBeCloseTo(expected, 4);
});

test("dot should return the dot product of two vectors", () => {
  const expected = 20;

  const v1 = new Vector(1, 2, 3);
  const v2 = new Vector(2, 3, 4);

  const dp = dot(v1, v2);

  expect(dp).toBeCloseTo(expected);
});

test("cross should return the cross product of two vectors", () => {
  const expected = new Vector(-1, 2, -1);

  const v1 = new Vector(1, 2, 3);
  const v2 = new Vector(2, 3, 4);

  const cp = cross(v1, v2);

  const eq = equal(cp, expected);

  expect(eq).toBeTruthy();
});

test("normalizing Vector(4, 0, 0) should return Vector(1, 0, 0)", () => {
  const expected = new Vector(1, 0, 0);

  const v = new Vector(4, 0, 0);

  const n = normalize(v);

  const eq = equal(n, expected);

  expect(eq).toBeTruthy();
});

test("normalizing Vector(1, 2, 3) should return correct value", () => {
  const expected = new Vector(0.26726, 0.53452, 0.80178);

  const v = new Vector(1, 2, 3);

  const n = normalize(v);

  expect(n.x).toBeCloseTo(expected.x);
  expect(n.y).toBeCloseTo(expected.y);
  expect(n.z).toBeCloseTo(expected.z);
});

test("normalizing a vector should result in vector with magnitude of 1", () => {
  const expected = 1;

  const v = new Vector(1, 2, 3);

  const n = normalize(v);

  const m = magnitude(n);

  expect(m).toBe(expected);
});

test("normalizing a vector with magnitude of 0 should throw an error", () => {
  const v = new Vector(0, 0, 0);

  expect(() => {
    normalize(v);
  }).toThrowError("Can't normalize a vector with 0 magnitude.");
});
