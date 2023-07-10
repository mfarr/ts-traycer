import { Colour } from "./colour";

type PixelMap = Colour[][];

export const COORDINATE_ERROR = "Coordinates outside of canvas.";

export class Canvas {
  private pixels: PixelMap;

  constructor(public readonly width: number, public readonly height: number) {
    this.pixels = new Array<Array<Colour>>(width).fill(
      new Array<Colour>(height).fill(new Colour(0, 0, 0))
    );
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
