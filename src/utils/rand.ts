
export function rand(a: number, b: number): number {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}