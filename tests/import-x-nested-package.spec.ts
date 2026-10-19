import {describe, expect, it} from '@jest/globals'

import {lintFixtureProject} from './utils/lint-fixture.js'

// Kept apart from import-x.spec.ts: the TypeScript import resolver caches the first tsconfig it finds
describe('import-x/internal-regex', () => {
  it('treats `@/` aliases resolving outside the nearest package.json as internal', async () => {
    expect(await lintFixtureProject('import-x/nested-package', 'scripts/backfill.ts')).toEqual([])
  })
})
