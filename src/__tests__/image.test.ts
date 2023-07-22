import { Canvas } from "../app/canvas";
import { Image, toPPM } from "../app/image";

let canvas: Canvas;

beforeEach(() => {
  canvas = new Canvas(5, 3);
});

test("generated PPMs should have the correct header", () => {
  const image = new Image(canvas, 256);

  const expected = `P3\n${canvas.width} ${canvas.height}\n${image.maxColour}`;

  const ppm = toPPM(image);

  const header = ppm.split("\n").slice(0, 3).join("\n");

  expect(header).toEqual(expected);
});

test("generated PPMs should be terminated by a newline character", () => {
  const image = new Image(canvas, 256);
  const ppm = toPPM(image);

  expect(ppm.endsWith("\n")).toBe(true);
});

test("generated PPMs should have the correcy body", () => {
  canvas.writePixel(0, 0, { r: 1.5, g: 0, b: 0 });
  canvas.writePixel(2, 1, { r: 0, g: 0.5, b: 0 });
  canvas.writePixel(4, 2, { r: -0.5, g: 0, b: 1 });

  const image = new Image(canvas, 256);

  const expected =
    "255 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 128 0 0 0 0 0 0 0\n" +
    "0 0 0 0 0 0 0 0 0 0 0 0 0 0 255";

  const ppm = toPPM(image);

  const body = ppm.split("\n").slice(3, 6).join("\n");

  expect(body).toEqual(expected);
});

test("generated PPMs should have the correct structure", () => {
  canvas.writePixel(0, 0, { r: 1.5, g: 0, b: 0 });
  canvas.writePixel(2, 1, { r: 0, g: 0.5, b: 0 });
  canvas.writePixel(4, 2, { r: -0.5, g: 0, b: 1 });

  const image = new Image(canvas, 256);

  const expected =
    "P3\n" +
    "5 3\n" +
    "255\n" +
    "255 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n0 0 0 0 0 0 0 128 0 0 0 0 0 0 0\n" +
    "0 0 0 0 0 0 0 0 0 0 0 0 0 0 255\n";

  const ppm = toPPM(image);

  expect(ppm).toEqual(expected);
});

test("PPM lines longer than 70 characters should be split", () => {
  canvas = new Canvas(10, 2);
  for (let w = 0; w < canvas.width; w++) {
    for (let h = 0; h < canvas.height; h++) {
      canvas.writePixel(w, h, { r: 1, g: 0.8, b: 0.6 });
    }
  }

  const image = new Image(canvas, 256);

  const expected =
    "255 204 153 255 204 153 255 204 153 255 204 153 255 204 153 255 204\n" +
    "153 255 204 153 255 204 153 255 204 153 255 204 153\n" +
    "255 204 153 255 204 153 255 204 153 255 204 153 255 204 153 255 204\n" +
    "153 255 204 153 255 204 153 255 204 153 255 204 153";

  const ppm = toPPM(image);

  const body = ppm.split("\n").slice(3, 7).join("\n");

  expect(body).toEqual(expected);
});
