import {describe, expect, it} from '@jest/globals'

import {lintFixture} from './utils/lint-fixture.js'

describe('@stylistic/no-mixed-operators', () => {
  it('correct', async () => {
    expect(await lintFixture('@stylistic/no-mixed-operators.correct.ts')).toEqual([])
  })
})
