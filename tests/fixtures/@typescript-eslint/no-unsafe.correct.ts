function format(value: string): string {
  return value.trim()
}

export function readUserId(body: string): string {
  const payload = JSON.parse(body)
  payload.validate()

  return format(payload.user.id)
}

export function readUser(body: string): {id: string} {
  return JSON.parse(body)
}
