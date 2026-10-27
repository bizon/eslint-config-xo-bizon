import {describe, expect, it} from '@jest/globals'

import {lintFixture} from './utils/lint-fixture.js'

describe('@typescript-eslint/naming-convention', () => {
  it('correct', async () => {
    expect(await lintFixture('@typescript-eslint/naming-convention.correct.ts')).toEqual([])
  })

  it('incorrect', async () => {
    expect(await lintFixture('@typescript-eslint/naming-convention.incorrect.ts')).toEqual([
      {line: 1, ruleId: '@typescript-eslint/naming-convention', severity: 'error'},
      {line: 3, ruleId: '@typescript-eslint/naming-convention', severity: 'error'},
    ])
  })
})

describe('@typescript-eslint/switch-exhaustiveness-check', () => {
  it('correct', async () => {
    expect(await lintFixture('@typescript-eslint/switch-exhaustiveness-check.correct.ts')).toEqual(
      [],
    )
  })
})

describe('@typescript-eslint/no-unsafe-*', () => {
  it('correct', async () => {
    expect(await lintFixture('@typescript-eslint/no-unsafe.correct.ts')).toEqual([])
  })
})

describe('@typescript-eslint/no-unused-vars', () => {
  it('correct', async () => {
    expect(await lintFixture('@typescript-eslint/no-unused-vars.correct.ts')).toEqual([])
  })

  it('incorrect', async () => {
    expect(await lintFixture('@typescript-eslint/no-unused-vars.incorrect.ts')).toEqual([
      {line: 2, ruleId: '@typescript-eslint/no-unused-vars', severity: 'error'},
    ])
  })
})

describe('@typescript-eslint/restrict-template-expressions', () => {
  it('correct', async () => {
    expect(
      await lintFixture('@typescript-eslint/restrict-template-expressions.correct.ts'),
    ).toEqual([])
  })
})

describe('@typescript-eslint/strict-boolean-expressions', () => {
  it('correct', async () => {
    expect(await lintFixture('@typescript-eslint/strict-boolean-expressions.correct.ts')).toEqual(
      [],
    )
  })
})

describe('@typescript-eslint/consistent-type-definitions', () => {
  it('correct', async () => {
    expect(await lintFixture('@typescript-eslint/consistent-type-definitions.correct.ts')).toEqual(
      [],
    )
  })

  it('incorrect', async () => {
    expect(
      await lintFixture('@typescript-eslint/consistent-type-definitions.incorrect.ts'),
    ).toEqual([
      {line: 1, ruleId: '@typescript-eslint/consistent-type-definitions', severity: 'error'},
    ])
  })
})

describe('@typescript-eslint/no-deprecated', () => {
  it('incorrect', async () => {
    expect(await lintFixture('@typescript-eslint/no-deprecated.incorrect.ts')).toEqual([
      {line: 11, ruleId: '@typescript-eslint/no-deprecated', severity: 'warn'},
    ])
  })
})

describe('@typescript-eslint/no-restricted-types', () => {
  it('correct', async () => {
    expect(await lintFixture('@typescript-eslint/no-restricted-types.correct.ts')).toEqual([])
  })

  it('incorrect', async () => {
    expect(await lintFixture('@typescript-eslint/no-restricted-types.incorrect.ts')).toEqual([
      {line: 1, ruleId: '@typescript-eslint/no-restricted-types', severity: 'error'},
    ])
  })
})
