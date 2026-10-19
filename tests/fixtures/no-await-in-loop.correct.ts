export async function fetchAllPages(fetchPage: (token?: string) => Promise<{nextToken?: string}>) {
  let nextToken: string | undefined

  do {
    const page = await fetchPage(nextToken)
    nextToken = page.nextToken
  } while (nextToken)
}
