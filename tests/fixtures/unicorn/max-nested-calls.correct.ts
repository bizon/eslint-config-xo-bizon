export function clamp(value: number) {
  return Math.max(0, Math.min(100, Math.round(Math.abs(value))))
}
