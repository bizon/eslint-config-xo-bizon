export function buildQuery(name?: string) {
  const query: Record<string, string> = {}

  if (name !== undefined) {
    query.name = name
  }

  return query
}
