import { COORDINATE_ERROR, Canvas } from "../src/app/canvas";
import { Colour, equal } from "../src/app/colour";

const width = 5;
const height = 5;
const black = new Colour(0, 0, 0);
let canvas: Canvas;

beforeEach(() => {
  canvas = new Canvas(width, height);
});

test("canvas should initialize with each pixel set to black", () => {
  let eq = true;

  width_loop: for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      eq = equal(black, canvas.pixelAt(i, j));

      if (!eq) {
        break width_loop;
      }
    }
  }

  expect(eq).toBeTruthy();
});

test("validCoord should return false if x coordinate is ouside canvas bounds", () => {
  expect(canvas.validCoord(5, 4)).toBe(false);
});

test("validCoord should return false if y coordinate is outside canvas bounds", () => {
  expect(canvas.validCoord(4, 5)).toBe(false);
});

test("validCoord should return false if x coordinate is negative", () => {
  expect(canvas.validCoord(-1, 4)).toBe(false);
});

test("validCoord should return false if y coordinate is negative", () => {
  expect(canvas.validCoord(4, -1)).toBe(false);
});

test("validCoord should return true for a valid coordinate", () => {
  expect(canvas.validCoord(1, 1)).toBe(true);
});

test("pixelAt should throw coordinate error for invalid coordinates", () => {
  expect(() => {
    canvas.pixelAt(-1, 0);
  }).toThrowError(COORDINATE_ERROR);
});

test("pixelAt should return the pixel colour for valid coordinates", () => {
  const c = canvas.pixelAt(1, 1);

  expect(equal(black, c)).toBe(true);
});

test("writePixel should set the pixel for valid coordinates", () => {
  const c = new Colour(1, 2, 3);

  canvas.writePixel(1, 2, c);

  const cNew = canvas.pixelAt(1, 2);

  expect(equal(c, cNew)).toBe(true);
});

test("writePixel should throw coordinate error for invalid coordinates", () => {
  expect(() => {
    canvas.writePixel(-1, 0, black);
  }).toThrowError(COORDINATE_ERROR);
});
