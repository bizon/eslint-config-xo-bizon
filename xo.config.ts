import {type FlatXoConfig} from 'xo'

import xoBizon from './src/index.js'

export default [
  ...xoBizon,

  {
    ignores: ['tests/fixtures/**'],
  },
] satisfies FlatXoConfig
