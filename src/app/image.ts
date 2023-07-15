import { Canvas } from "./canvas";

export class Image {
  constructor(
    public readonly canvas: Canvas,
    public readonly colours: number
  ) {}
}

export function toPPM(image: Image): string {
  const ppm = `${generatePPMHeader(image)}\n`;
  return ppm;
}

function generatePPMHeader(image: Image): string {
  return `P3\n${image.canvas.width} ${image.canvas.height}\n${
    image.colours - 1
  }`;
}
