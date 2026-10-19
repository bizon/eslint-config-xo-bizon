export function buildQuery(clientId?: string) {
  const query: Record<string, string> = {}

  if (clientId !== undefined) {
    query.clientId = clientId
  }

  return query
}
