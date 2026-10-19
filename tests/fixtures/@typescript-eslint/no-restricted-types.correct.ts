export function findName(names: Map<string, string>, id: string): string | null {
  return names.get(id) ?? null
}
