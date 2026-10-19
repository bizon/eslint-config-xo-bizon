function format(value: string): string {
  return value.trim()
}

export function readSellerId(body: string): string {
  const payload = JSON.parse(body)
  payload.validate()

  return format(payload.seller.id)
}

export function readSeller(body: string): {id: string} {
  return JSON.parse(body)
}
