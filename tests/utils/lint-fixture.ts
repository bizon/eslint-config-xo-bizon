import path from 'node:path'
import process from 'node:process'

import xo from 'xo'

const fixturesPath = path.resolve('tests/fixtures')
const configPath = path.resolve('src/index.ts')

type LintResults = Awaited<ReturnType<typeof xo.lintFiles>>['results']

function getMessages(results: LintResults) {
  return results[0].messages.map(({line, ruleId, severity}) => ({
    line,
    ruleId,
    severity: severity === 2 ? 'error' : 'warn',
  }))
}

export async function lintFixture(fixture: string) {
  // Without `ts: true`, TypeScript files outside a tsconfig fail to parse
  const {results} = await xo.lintFiles(fixture, {cwd: fixturesPath, configPath, ts: true})

  return getMessages(results)
}

export async function lintFixtureProject(project: string, fixture: string) {
  const cwd = path.join(fixturesPath, project)
  const originalCwd = process.cwd()

  // The TypeScript import resolver reads the tsconfig of the process working directory, not XO's `cwd`
  process.chdir(cwd)

  try {
    const {results} = await xo.lintFiles(fixture, {cwd, configPath, ts: true})

    return getMessages(results)
  } finally {
    process.chdir(originalCwd)
  }
}
