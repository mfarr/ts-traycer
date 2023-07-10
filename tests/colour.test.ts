import { Colour, add, equal, multiply, subtract } from "../src/app/colour";

test("equal should return true if two colours are the same", () => {
  const c1 = new Colour(0.9, 0.6, 0.75);
  const c2 = new Colour(0.9, 0.6, 0.75);

  const eq = equal(c1, c2);

  expect(eq).toBeTruthy();
});

test("equal should return false if two colours are not the same", () => {
  const c1 = new Colour(0.9, 0.6, 0.75);
  const c2 = new Colour(0.7, 0.1, 0.25);

  const eq = equal(c1, c2);

  expect(eq).toBeFalsy();
});

test("add should return the sum of two colours", () => {
  const c1 = new Colour(0.9, 0.6, 0.75);
  const c2 = new Colour(0.7, 0.1, 0.25);

  const expected = new Colour(1.6, 0.7, 1.0);

  const sum = add(c1, c2);

  const eq = equal(expected, sum);

  expect(eq).toBeTruthy();
});

test("subtract should return the difference between two colours", () => {
  const c1 = new Colour(0.9, 0.6, 0.75);
  const c2 = new Colour(0.7, 0.1, 0.25);

  const expected = new Colour(0.2, 0.5, 0.5);

  const difference = subtract(c1, c2);

  const eq = equal(expected, difference);

  expect(eq).toBeTruthy();
});

test("multiplying a colour by a colour should return the correct result", () => {
  const c1 = new Colour(1, 0.2, 0.4);
  const c2 = new Colour(0.9, 1, 0.1);

  const expected = new Colour(0.9, 0.2, 0.04);

  const product = multiply(c1, c2);

  const eq = equal(expected, product);

  expect(eq).toBeTruthy();
});

test("multiplying a colour by a scalar should return the correct result", () => {
  const c = new Colour(0.2, 0.3, 0.4);

  const expected = new Colour(0.4, 0.6, 0.8);

  const product = multiply(c, 2);

  const eq = equal(expected, product);

  expect(eq).toBeTruthy();
});
