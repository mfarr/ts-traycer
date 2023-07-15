import { Canvas } from "../app/canvas";
import { Image, toPPM } from "../app/image";

test("generated PPMs should have the correct header", () => {
  const canvas = new Canvas(5, 3);
  const image = new Image(canvas, 256);

  const expected = `P3\n${canvas.width} ${canvas.height}\n${
    image.colours - 1
  }\n`;

  const ppm = toPPM(image);

  expect(ppm).toEqual(expected);
});

test("generated PPMs should be terminated by a newline character", () => {
  const image = new Image(new Canvas(5, 3), 256);
  const ppm = toPPM(image);

  expect(ppm.endsWith("\n")).toBe(true);
});
