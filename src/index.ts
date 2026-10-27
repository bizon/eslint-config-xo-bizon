import {jsFilesGlob, tsFilesGlob, type XoConfigItem} from 'xo'

const xoConfig: XoConfigItem[] = [
  // Plugin: @typescript-eslint
  {
    files: tsFilesGlob,
    rules: {
      // Only check the names we declare: properties and destructured bindings mirror third-party APIs
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variableLike',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allowSingleOrDouble',
          trailingUnderscore: 'allow',
        },
        {
          selector: ['variable', 'parameter'],
          modifiers: ['destructured'],
          format: null,
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
      ],

      // This can be too dangerous if not all values exist in the type
      '@typescript-eslint/switch-exhaustiveness-check': 'off',

      // These rules are too restrictive
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',

      // XO relies on TypeScript’s `noUnusedLocals` and `noUnusedParameters`, which
      // `@tsconfig/node*` bases do not enable
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

      // Spelling out truthiness checks as comparisons easily changes behavior on 0, '' or NaN
      '@typescript-eslint/strict-boolean-expressions': 'off',

      // We prefer interfaces
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      // Warn about deprecated APIs instead of erroring
      '@typescript-eslint/no-deprecated': 'warn',

      // Update restricted types
      // This removes `null` from https://github.com/xojs/eslint-config-xo/blob/main/source/typescript-rules.js
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

  // Plugin: @stylistic
  {
    rules: {
      // Prettier removes the parentheses it asks for, as in `a - (b * c) / d`
      '@stylistic/no-mixed-operators': 'off',
    },
  },

  // Plugin: import-x
  {
    settings: {
      // `@/` path aliases are internal, even when they resolve outside the nearest package.json
      'import-x/internal-regex': '^@/',
    },
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
      // Express routers and SDK clients are set up when their module loads
      'unicorn/no-top-level-side-effects': 'off',

      // Jest matchers, Joi schemas and date-fns helpers nest calls by design
      'unicorn/max-nested-calls': 'off',

      // It only reports the first mutation, which leaves conditionally built objects half inlined
      'unicorn/no-immediate-mutation': 'off',

      // An `is` or `has` prefix rarely makes names like `success` or `value` clearer
      'unicorn/consistent-boolean-name': 'off',

      // `Number()` turns '' and null into 0 and '12px' into NaN, unlike `Number.parseFloat()`
      'unicorn/prefer-number-coercion': 'off',

      // Separate guards read better than one combined, often negated, condition
      'unicorn/prefer-combined-guards': 'off',

      // Let’s only warn one using reduce
      'unicorn/no-array-reduce': 'warn',

      // Joi `when()` and MongoDB `$cond` take a `then` key
      'unicorn/no-thenable': 'off',

      // Its suggested names are rarely better
      'unicorn/name-replacements': 'off',

      // Single-line JSDoc comments are fine
      'unicorn/single-line-block-comment-style': 'off',
    },
  },

  // Plugin: package-json
  {
    files: '**/package.json',
    rules: {
      // `@types/aws-lambda` types the Lambda runtime, which has no npm package
      'package-json/no-orphan-types': ['error', {ignore: ['@types/aws-lambda']}],

      // Publishing with pnpm rewrites `workspace:` ranges
      'package-json/no-workspace-protocol-in-published-package': 'off',
    },
  },

  // Core ESLint rules
  {
    rules: {
      // Pagination, rate-limited APIs and ordered writes need sequential awaits
      'no-await-in-loop': 'off',

      // This sorts named imports
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
    },
  },
  {
    // XO disables `camelcase` in TypeScript in favor of `@typescript-eslint/naming-convention`
    files: jsFilesGlob,
    rules: {
      // Only check the names we choose, not the ones third-party APIs impose
      camelcase: ['error', {properties: 'never', ignoreDestructuring: true, ignoreImports: true}],
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
