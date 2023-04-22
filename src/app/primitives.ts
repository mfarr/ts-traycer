export class Point {
  readonly w = 1;

  constructor(public x = 0, public y = 0, public z = 0) {}
}

export class Vector {
  readonly w = 0;

  constructor(public x = 0, public y = 0, public z = 0) {}
}

export type Coordinate = Point | Vector;
export type CoordinateType<T> = T extends Point
  ? Point
  : T extends Vector
  ? Vector
  : never;

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

export function negate<T extends Coordinate>(t: T): Coordinate {
  return t.w === 0 ? new Vector(-t.x, -t.y, -t.z) : new Point(-t.x, -t.y, -t.z);
}
