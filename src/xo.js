import config from './config.js'

/** @type {import('xo').FlatXoConfig} */
export const xoConfig = [
  ...config,

  {
    semicolon: false,
    space: 2,
    prettier: true,
  },
]

export default xoConfig
