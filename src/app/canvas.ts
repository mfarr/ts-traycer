import { Colour } from "./colour";

type PixelMap = Colour[][];

export const COORDINATE_ERROR = "Coordinates outside of canvas.";

export class Canvas {
  private pixels: PixelMap;

  constructor(public readonly width: number, public readonly height: number) {
    this.pixels = new Array<Colour>(this.width)
      .fill({ r: 0, g: 0, b: 0 })
      .map(() => new Array<Colour>(this.height).fill({ r: 0, g: 0, b: 0 }));
  }

  public pixelAt(x: number, y: number): Colour {
    if (!this.validCoord(x, y)) {
      throw Error(COORDINATE_ERROR);
    }

    return this.pixels[x][y];
  }

  public writePixel(x: number, y: number, c: Colour) {
    if (!this.validCoord(x, y)) {
      throw Error(COORDINATE_ERROR);
    }

    this.pixels[x][y] = c;
  }

  public validCoord(x: number, y: number): boolean {
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
  }
}
