type Language = 'de' | 'fr' | 'it'

export function getGreeting(language: Language): string {
  let greeting = 'Hello'

  switch (language) {
    case 'de': {
      greeting = 'Hallo'
      break
    }

    case 'fr': {
      greeting = 'Bonjour'
      break
    }
  }

  return greeting
}
