import { Vector, Point, add } from "./primitives";

export interface Projectile {
  position: Point;
  velocity: Vector;
}

export interface Environment {
  gravity: Vector;
  wind: Vector;
}

function tick(env: Environment, proj: Projectile): Projectile {
  const position = add(proj.position, proj.velocity) as Point;
  const velocity = add(add(proj.velocity, env.gravity), env.wind) as Vector;

  return { position: position, velocity: velocity };
}

export function fire(
  env: Environment,
  proj: Projectile,
): { ticks: number; proj: Projectile } {
  let ticks = 0;

  while (proj.position.y > 0) {
    ++ticks;
    proj = tick(env, proj);
  }

  return { ticks: ticks, proj: proj };
}
