import path from 'node:path'

import xo from 'xo'

const fixturesPath = path.resolve('tests/fixtures')
const configPath = path.resolve('src/index.ts')

export async function lintFixture(fixture: string) {
  // Without `ts: true`, TypeScript files outside a tsconfig fail to parse
  const {results} = await xo.lintFiles(fixture, {cwd: fixturesPath, configPath, ts: true})

  return results[0].messages.map(({line, ruleId, severity}) => ({
    line,
    ruleId,
    severity: severity === 2 ? 'error' : 'warn',
  }))
}
