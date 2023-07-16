import { Canvas } from "./canvas";
import { Colour } from "./colour";

export class Image {
  public readonly maxColour: number;

  constructor(
    private readonly canvas: Canvas,
    public readonly colours: number
  ) {
    this.maxColour = this.colours - 1;
  }

  get height() {
    return this.canvas.height;
  }

  get width() {
    return this.canvas.width;
  }

  public pixelAt(w: number, h: number): Colour {
    const pixel = this.canvas.pixelAt(w, h);

    return {
      r: this.clamp(Math.round(pixel.r * this.maxColour)),
      g: this.clamp(Math.round(pixel.g * this.maxColour)),
      b: this.clamp(Math.round(pixel.b * this.maxColour)),
    };
  }

  public clamp(value: number): number {
    return value < 0 ? 0 : value > this.maxColour ? this.maxColour : value;
  }
}

export function toPPM(image: Image): string {
  return `${generatePPMHeader(image)}\n${generatePPMBody(image)}\n`;
}

function generatePPMHeader(image: Image): string {
  return `P3\n${image.width} ${image.height}\n${image.maxColour}`;
}

function generatePPMBody(image: Image): string {
  let body = "";

  for (let h = 0; h < image.height; h++) {
    for (let w = 0; w < image.width; w++) {
      const c = image.pixelAt(w, h);
      body += `${c.r} ${c.g} ${c.b} `;
    }
    body = body.trimEnd() + "\n";
  }

  return body.trimEnd();
}
