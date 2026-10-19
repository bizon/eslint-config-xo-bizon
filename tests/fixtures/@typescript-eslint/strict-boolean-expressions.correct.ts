import process from 'node:process'

export function getSentryDsn(): string {
  if (!process.env.SENTRY_DSN) {
    throw new Error('Missing SENTRY_DSN')
  }

  return process.env.SENTRY_DSN
}
