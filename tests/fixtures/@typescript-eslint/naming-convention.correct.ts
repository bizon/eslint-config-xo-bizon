export const MAX_RETRIES = 3

export const UserSchema = {userID: '42'}

export const response = {
  ContactEmail: 'contact@example.com',
}

export function getUserId({user_id}: {user_id: string}, _options?: unknown): string {
  return user_id
}

export type _ByCode = Pick<typeof response, 'ContactEmail'>

export type Pick_<T, K extends keyof T> = Pick<T, K>
