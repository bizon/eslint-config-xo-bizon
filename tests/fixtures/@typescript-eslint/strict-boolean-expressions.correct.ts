export function describeStock(quantity: number | undefined, sku: string, note: any): string {
  if (!sku) {
    return 'Unknown product'
  }

  return quantity ? `${quantity} in stock${note ? ` (${note})` : ''}` : 'Out of stock'
}
