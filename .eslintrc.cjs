/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:svelte/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['*.cjs', '*.js', '*.mjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: ['./tsconfig.json'],
    sourceType: 'module',
    ecmaVersion: 2020,
    extraFileExtensions: ['.svelte'],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  globals: {
    NodeJS: 'readable',
    $$Generic: 'readable',
  },
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  rules: {
    // when using @ts-ignore you need to also include a description next to it
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-ignore': 'allow-with-description',
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        // allow unused function parameters that start with an underscore
        argsIgnorePattern: '^_',
        // allow destructuring of unused array elements that start with an underscore
        destructuredArrayIgnorePattern: '^_',
        // allow destructuring of unused fields in order to shrink an object shape
        ignoreRestSiblings: true,
      },
    ],
  },
}
