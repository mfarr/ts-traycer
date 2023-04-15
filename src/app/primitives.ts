export class Tuple {
  x: number;
  y: number;
  z: number;
  readonly w: 0 | 1;

  constructor(x = 0, y = 0, z = 0, w: 0 | 1 = 0) {
    this.x = x;

    this.y = y;

    this.z = z;

    this.w = w;
  }

  equalTo(t: Tuple): boolean {
    return this.x === t.x && this.y === t.y && this.z === t.z && this.w === t.w;
  }
}

export class Point extends Tuple {
  // This works, but it feels like there should be a better way to go about it.
  readonly w = 1;

  constructor(x = 0, y = 0, z = 0) {
    super(x, y, z, 1);
  }
}

export class Vector extends Tuple {
  readonly w = 0;

  constructor(x = 0, y = 0, z = 0) {
    super(x, y, z, 0);
  }
}

export function isPoint(t: Tuple): boolean {
  return t.w === 1;
}

export function isVector(t: Tuple): boolean {
  return t.w === 0;
}

export function add(p: Point | Vector, v: Vector): Point | Vector {
  const x = p.x + v.x;
  const y = p.y + v.y;
  const z = p.z + v.z;

  if (p instanceof Point) {
    return new Point(x, y, z);
  }

  return new Vector(x, y, z);
}
