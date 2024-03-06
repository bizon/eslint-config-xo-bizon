module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

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

    // Enable Typescript version of no-unused-vars
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

    // Let’s enable this when we switch to ESM
    'import/extensions': 'off',

    // Arbitrary import order rules
    'import/order': [
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

    // Disable in favor of @typescript-eslint/no-unused-vars
    'no-unused-vars': 'off',

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

    // Let’s not use ESM yet
    'unicorn/prefer-module': 'off',

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

    // Broken rule, let’s not use
    'n/file-extension-in-import': 'off',
  },
}
