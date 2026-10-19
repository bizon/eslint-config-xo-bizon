interface SearchHit {
  inner_hits?: {
    listings: string[]
  }
}

export function getListings(hit: SearchHit): string[] {
  const {inner_hits} = hit

  return inner_hits?.listings ?? []
}
