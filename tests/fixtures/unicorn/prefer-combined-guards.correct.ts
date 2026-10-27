export function isBlank(value: string | undefined) {
  if (value === undefined) {
    return true
  }

  if (value.trim() === '') {
    return true
  }

  return false
}
