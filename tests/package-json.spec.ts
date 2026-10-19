import {describe, expect, it} from '@jest/globals'

import {lintFixture} from './utils/lint-fixture.js'

describe('package-json/no-orphan-types', () => {
  it('correct', async () => {
    expect(await lintFixture('package-json/no-orphan-types/package.json')).toEqual([])
  })
})

describe('package-json/no-workspace-protocol-in-published-package', () => {
  it('correct', async () => {
    expect(
      await lintFixture('package-json/no-workspace-protocol-in-published-package/package.json'),
    ).toEqual([])
  })
})
