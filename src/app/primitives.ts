export class Point {
  readonly w = 1;

  constructor(public x = 0, public y = 0, public z = 0) {}
}

export class Vector {
  readonly w = 0;

  constructor(public x = 0, public y = 0, public z = 0) {}
}

export type Coordinate = Point | Vector;

export function isPoint(c: Coordinate): boolean {
  return c.w === 1;
}

export function isVector(c: Coordinate): boolean {
  return c.w === 0;
}

export function add(c1: Coordinate, c2: Coordinate): Coordinate {
  const x = c1.x + c2.x;
  const y = c1.y + c2.y;
  const z = c1.z + c2.z;
  const w = c1.w + c2.w;

  if (w !== 0 && w !== 1) {
    throw new Error("Addition would result in an invalid coordinate.");
  }

  return w === 0 ? new Vector(x, y, x) : new Point(x, y, z);
}

export function subtract(c1: Coordinate, c2: Coordinate): Coordinate {
  const x = c1.x - c2.x;
  const y = c1.y - c2.y;
  const z = c1.z - c2.z;
  const w = c1.w - c2.w;

  if (w !== 0 && w !== 1) {
    throw new Error("Subtraction would result in an invalid coordinate.");
  }

  return w === 0 ? new Vector(x, y, z) : new Point(x, y, z);
}

export function equal(c1: Coordinate, c2: Coordinate): boolean {
  return c1.x === c2.x && c1.y === c2.y && c1.z === c2.z && c1.w === c2.w;
}

export function negate<T extends Coordinate>(c: T): Coordinate {
  return c.w === 0 ? new Vector(-c.x, -c.y, -c.z) : new Point(-c.x, -c.y, -c.z);
}

export function multiply<T extends Coordinate>(c: T, f: number): Coordinate {
  if (isPoint(c)) {
    return new Point(c.x * f, c.y * f, c.z * f);
  }

  return new Vector(c.x * f, c.y * f, c.z * f);
}

export function divide<T extends Coordinate>(c: T, d: number): Coordinate {
  if (d === 0) {
    throw new Error("Coordinate divide by zero error.");
  }

  if (isPoint(c)) {
    return new Point(c.x / d, c.y / d, c.z / d);
  }

  return new Vector(c.x / d, c.y / d, c.z / d);
}

export function magnitude(v: Vector): number {
  let magnitude = 0;

  const sum = v.x ** 2 + v.y ** 2 + v.z ** 2 + v.w ** 2;
  magnitude = Math.sqrt(sum);

  return magnitude;
}

export function dot(v1: Vector, v2: Vector): number {
  const dp = v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;

  return dp;
}

export function cross(v1: Vector, v2: Vector): Vector {
  const cp = new Vector(
    v1.y * v2.z - v1.z * v2.y,
    v1.z * v2.x - v1.x * v2.z,
    v1.x * v2.y - v1.y * v2.x
  );

  return cp;
}

export function normalize(v: Vector): Vector {
  const m = magnitude(v);
  if (m === 0) {
    throw new Error("Can't normalize a vector with 0 magnitude.");
  }

  return new Vector(v.x / m, v.y / m, v.z / m);
}
