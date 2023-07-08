import { Point, Vector, normalize } from "./app/primitives";
import { Environment, Projectile, fire } from "./app/projectile";

const env: Environment = {
  gravity: new Vector(0, -0.1, 0),
  wind: new Vector(5.01, 0, 0),
};

const proj: Projectile = {
  position: new Point(0, 1, 0),
  velocity: normalize(new Vector(40, 5000, 0)),
};

console.log(
  `Firing projectile: (${proj.position.x}, ${proj.position.y}, ${proj.position.z}) with velocity (${proj.velocity.x}, ${proj.velocity.y}, ${proj.velocity.z})`
);

console.log(`Gravity: (${env.gravity.x}, ${env.gravity.y}, ${env.gravity.z})`);

console.log(`Wind: (${env.wind.x}, ${env.wind.y}, ${env.wind.z})`);

const results = fire(env, proj);

console.log(
  `It took ${results.ticks} ticks to for the projectile to hit the ground: (${results.proj.position.x}, ${results.proj.position.y}, ${results.proj.position.z})`
);
