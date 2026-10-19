import {describe, expect, it} from '@jest/globals'

import {lintFixture} from './utils/lint-fixture.js'

describe('unicorn/no-array-reduce', () => {
  it('incorrect', async () => {
    expect(await lintFixture('unicorn/no-array-reduce.incorrect.ts')).toEqual([
      {line: 2, ruleId: 'unicorn/no-array-reduce', severity: 'warn'},
    ])
  })
})

describe('unicorn/no-thenable', () => {
  it('correct', async () => {
    expect(await lintFixture('unicorn/no-thenable.correct.ts')).toEqual([])
  })
})

describe('unicorn/name-replacements', () => {
  it('correct', async () => {
    expect(await lintFixture('unicorn/name-replacements.correct.ts')).toEqual([])
  })
})

describe('unicorn/single-line-block-comment-style', () => {
  it('correct', async () => {
    expect(await lintFixture('unicorn/single-line-block-comment-style.correct.ts')).toEqual([])
  })
})
