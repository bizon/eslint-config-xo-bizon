type Marketplace = 'de' | 'fr' | 'it'

export function getDomain(marketplace: Marketplace): string {
  let domain = 'amazon.com'

  switch (marketplace) {
    case 'de': {
      domain = 'amazon.de'
      break
    }

    case 'fr': {
      domain = 'amazon.fr'
      break
    }
  }

  return domain
}
