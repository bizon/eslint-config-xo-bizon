export function getDiscountedTotal(total: number, discount: number, quantity: number) {
  return total - (discount * quantity) / 100
}
