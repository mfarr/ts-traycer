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

export function add(t1: Tuple, t2: Tuple): Point | Vector {
  const x = t1.x + t2.x;
  const y = t1.y + t2.y;
  const z = t1.z + t2.z;

  if (isPoint(t1)) {
    return new Point(x, y, z);
  }

  return new Vector(x, y, z);
}

export function subtract(t1: Tuple, t2: Tuple): Point | Vector {
  const x = t1.x - t2.x;
  const y = t1.y - t2.y;
  const z = t1.z - t2.z;
  const w = t1.w - t2.w;

  if (w !== 0 && w !== 1) {
    throw new Error("Subtraction would result in an invalid coordinate.");
  }

  const t = new Tuple(x, y, z, w as 0 | 1);

  if (isPoint(t)) {
    return new Point(x, y, z);
  }

  return new Vector(x, y, z);
}
