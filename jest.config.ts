import {type Config} from 'jest'

const config: Config = {
  testMatch: ['<rootDir>/tests/*.spec.ts'],
  transform: {
    '^.+\\.ts$': '@swc/jest',
  },
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  testTimeout: 60_000,
}

export default config
