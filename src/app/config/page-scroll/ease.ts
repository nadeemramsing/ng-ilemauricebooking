export function easeInOutExpo(t: number, b: number, c: number, d: number): number {
  // From https://github.com/Nolanus/ngx-page-scroll
  // easeInOutExpo easing
  if (t === 0) return b;
  if (t === d) return b + c;
  if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
  return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
}

// From http://gizma.com/easing
export function easeInOutCirc(t: number, b: number, c: number, d: number): number {
  t /= d / 2;
  if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
  t -= 2;
  return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
}

export function easeInOutSine(t: number, b: number, c: number, d: number): number {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}

export function easeInOutQuint(t: number, b: number, c: number, d: number): number {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t * t * t + 2) + b;
}

export function easeInOutQuart(t: number, b: number, c: number, d: number): number {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t * t + b;
  t -= 2;
  return -c / 2 * (t * t * t * t - 2) + b;
}

export function easeInOutCubic(t: number, b: number, c: number, d: number): number {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}

export function easeInOutQuad(t: number, b: number, c: number, d: number): number {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}
