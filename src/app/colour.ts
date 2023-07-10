const PRECISION = 0.00001;

export class Colour {
  constructor(public r: number, public g: number, public b: number) {}
}

export function add(c1: Colour, c2: Colour): Colour {
  return new Colour(c1.r + c2.r, c1.g + c2.g, c1.b + c2.b);
}

export function subtract(c1: Colour, c2: Colour): Colour {
  return new Colour(c1.r - c2.r, c1.g - c2.g, c1.b - c2.b);
}

export function multiply(c: Colour, factor: number | Colour) {
  if (factor instanceof Colour) {
    return new Colour(c.r * factor.r, c.g * factor.g, c.b * factor.b);
  }

  return new Colour(c.r * factor, c.g * factor, c.b * factor);
}

export function equal(c1: Colour, c2: Colour): boolean {
  return (
    Math.abs(c1.r - c2.r) < PRECISION &&
    Math.abs(c1.g - c2.g) < PRECISION &&
    Math.abs(c1.b - c2.b) < PRECISION
  );
}
