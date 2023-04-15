export class Tuple {
  x: number;
  y: number;
  z: number;
  readonly w: number;

  constructor(x = 0, y = 0, z = 0, w = 0) {
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
  constructor(x = 0, y = 0, z = 0) {
    super(x, y, z, 1);
  }
}

export class Vector extends Tuple {
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
