/**
Returns the user ID.

@deprecated Use `getUserId()` instead.
*/
function getId(): string {
  return '42'
}

export function getUserId(): string {
  return getId()
}
