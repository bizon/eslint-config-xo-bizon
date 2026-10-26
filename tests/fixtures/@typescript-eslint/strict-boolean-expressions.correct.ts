export function describeCount(count: number | undefined, label: string, note: any): string {
  if (!label) {
    return 'Unknown'
  }

  return count ? `${count} ${label}${note ? ` (${note})` : ''}` : `No ${label}`
}
