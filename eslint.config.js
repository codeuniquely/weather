import globals from 'globals';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import ts from 'typescript-eslint';

const IS_CI = !!process.env.CI;

const eslintRules = {
  complexity: ['error', { max: 5 }],
  eqeqeq: ['error', 'always', { null: 'ignore' }],
  'max-depth': ['error', { max: 3 }],
  'max-lines': ['error', { max: 200, skipBlankLines: true, skipComments: true }],
  'max-lines-per-function': ['error', { max: 50, skipBlankLines: true, skipComments: true }],
  'max-nested-callbacks': ['error', { max: 3 }],
  'max-params': ['error', { max: 3 }],
  'max-statements': ['error', { max: 15 }],
  'no-duplicate-imports': 'error',
  'no-useless-assignment': 'error',
  'no-empty-function': 'error',
  'no-warning-comments': 'error',
  'prefer-object-spread': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'sort-keys': 'error',
  'sort-vars': 'error',
};

const importRules = {
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',
};

const typescriptRules = {
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      argsIgnorePattern: '^_',
    },
  ],
};

const config = ts.config(
  {
    files: ['src/**/*.ts'],
    ignores: ['**/__tests__/**/*.*', '**/__spec__/**/*.*'],

    extends: [js.configs.recommended, ...ts.configs.recommended],

    languageOptions: {
      ecmaVersion: 2024,
      globals: {
        ...globals.node,
      },
    },

    plugins: {
      'simple-import-sort': simpleImportSort,
    },

    settings: {
      'import/resolver': {
        node: true,
        typescript: {
          project: ['./tsconfig.json'],
        },
      },
    },
    rules: {
      ...prettier.rules,
      ...eslintRules,
      ...importRules,
      ...typescriptRules,
    },
  },
  {
    // linting of *.spec.ts files
    files: ['src/**/__spec__/**/*.ts'],

    extends: [js.configs.recommended, ...ts.configs.recommended],

    languageOptions: {
      ecmaVersion: 2024,
      globals: {
        ...globals.node,
      },
    },

    plugins: {
      'simple-import-sort': simpleImportSort,
    },

    settings: {
      'import/resolver': {
        node: true,
        typescript: {
          project: ['./tsconfig.spec.json'],
        },
      },
    },

    rules: {
      ...eslintRules,
      'max-statements': 'off',
      ...importRules,
      ...typescriptRules,
    },
  }
);

export default config;
