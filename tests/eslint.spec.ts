import {describe, expect, it} from '@jest/globals'

import {lintFixture} from './utils/lint-fixture.js'

describe('sort-imports', () => {
  it('correct', async () => {
    expect(await lintFixture('sort-imports.correct.ts')).toEqual([])
  })

  it('incorrect', async () => {
    expect(await lintFixture('sort-imports.incorrect.ts')).toEqual([
      {line: 1, ruleId: 'sort-imports', severity: 'error'},
    ])
  })
})

describe('camelcase', () => {
  it('correct', async () => {
    expect(await lintFixture('camelcase.correct.js')).toEqual([])
  })

  it('incorrect', async () => {
    expect(await lintFixture('camelcase.incorrect.js')).toEqual([
      {line: 1, ruleId: 'camelcase', severity: 'error'},
      {line: 2, ruleId: 'camelcase', severity: 'error'},
    ])
  })

  it('is not enforced in TypeScript', async () => {
    expect(await lintFixture('camelcase.correct.ts')).toEqual([])
  })
})
