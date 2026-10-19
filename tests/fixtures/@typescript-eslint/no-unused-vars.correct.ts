export function withoutId(record: {id: string; name: string}, _options?: unknown) {
  const {id, ...rest} = record

  return rest
}
