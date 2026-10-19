/**
Returns the seller ID.

@deprecated Use `getSellerId()` instead.
*/
function getId(): string {
  return 'A1B2C3'
}

export function getSellerId(): string {
  return getId()
}
