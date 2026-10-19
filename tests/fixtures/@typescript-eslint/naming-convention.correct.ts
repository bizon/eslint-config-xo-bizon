export const MAX_RETRIES = 3

export const SellerSchema = {userID: '42'}

export const order = {
  BuyerEmail: 'buyer@example.com',
}

export function getSellerId({seller_id}: {seller_id: string}, _options?: unknown): string {
  return seller_id
}

export type _ByCode = Pick<typeof order, 'BuyerEmail'>

export type Pick_<T, K extends keyof T> = Pick<T, K>
