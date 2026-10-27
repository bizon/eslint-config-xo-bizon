export function scale(base: number, factor: number, count: number) {
  return base - (factor * count) / 100
}
