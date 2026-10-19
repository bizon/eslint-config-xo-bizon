import {describe, expect, it} from '@jest/globals'

import {lintFixture} from './utils/lint-fixture.js'

describe('import-x/order', () => {
  it('correct', async () => {
    expect(await lintFixture('import-x/order.correct.ts')).toEqual([])
  })

  it('incorrect', async () => {
    expect(await lintFixture('import-x/order.incorrect.ts')).toEqual([
      {line: 1, ruleId: 'import-x/order', severity: 'error'},
      {line: 2, ruleId: 'import-x/order', severity: 'error'},
    ])
  })
})

describe('import-x/internal-regex', () => {
  it('correct', async () => {
    expect(await lintFixture('import-x/internal-regex.correct.ts')).toEqual([])
  })
})
