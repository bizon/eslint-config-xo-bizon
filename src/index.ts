import {type XoConfigItem} from 'xo'

const TS_FILES_GLOB = '**/*.{ts,mts,cts,tsx}'

const xoConfig: XoConfigItem[] = [
  // Plugin: @typescript-eslint
  {
    files: TS_FILES_GLOB,
    rules: {
      // This reverts the "no null" decision from xo
      '@typescript-eslint/ban-types': 'off',

      // This would be nice in an ideal world, even warnings are too much
      '@typescript-eslint/naming-convention': 'off',

      // This can be too dangerous if not all values exist in the type
      '@typescript-eslint/switch-exhaustiveness-check': 'off',

      // These rules are too restrictive
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',

      // Disable no-unused-vars in favor of @typescript-eslint/no-unused-vars
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_$',
        },
      ],

      // This rule is too restrictive
      '@typescript-eslint/restrict-template-expressions': 'off',

      // We prefer interfaces
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // Warn about deprecated APIs instead of erroring
      '@typescript-eslint/no-deprecated': 'warn',

      // Update restricted types
      // This removes `null` from https://github.com/xojs/eslint-config-xo-typescript/blob/main/index.js#L96-L121
      '@typescript-eslint/no-restricted-types': [
        'error',
        {
          types: {
            object: {
              message:
                'The `object` type is hard to use. Use `Record<string, unknown>` instead. See: https://github.com/typescript-eslint/typescript-eslint/pull/848',
              fixWith: 'Record<string, unknown>',
            },
            Buffer: {
              message:
                'Use Uint8Array instead. See: https://sindresorhus.com/blog/goodbye-nodejs-buffer',
              suggest: ['Uint8Array'],
            },
            '[]': "Don't use the empty array type `[]`. It only allows empty arrays. Use `SomeType[]` instead.",
            '[[]]':
              "Don't use `[[]]`. It only allows an array with a single element which is an empty array. Use `SomeType[][]` instead.",
            '[[[]]]': "Don't use `[[[]]]`. Use `SomeType[][][]` instead.",
            '[[[[]]]]': 'ur drunk 🤡',
            '[[[[[]]]]]': '🦄💥',
          },
        },
      ],
    },
  },

  // Plugin: import-x
  {
    rules: {
      // Arbitrary import order rules
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '@/lib/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/tests/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/types/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@/!(lib|tests|types)/**',
              group: 'internal',
              position: 'after',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },

  // Plugin: unicorn
  {
    rules: {
      // Let’s only warn one using reduce
      'unicorn/no-array-reduce': 'warn',

      // These rules are broken
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-method-this-argument': 'off',
      'unicorn/no-thenable': 'off',

      'unicorn/prevent-abbreviations': [
        'error',
        {
          replacements: {
            // We don’t want fnSku to be replaced anywhere
            fn: false,
            // This is ok
            i: false,
            props: false,
          },
        },
      ],
    },
  },

  // Plugin: n
  {
    rules: {
      // Broken rule, let’s not use
      'n/file-extension-in-import': 'off',
    },
  },

  // Core ESLint rules
  {
    rules: {
      // This sorts named imports
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],

      // Some dependencies do not respect this, let’s only warn
      camelcase: 'warn',
    },
  },

  // XO defaults
  {
    semicolon: false,
    space: 2,
    prettier: true,
  },
]

export default xoConfig
