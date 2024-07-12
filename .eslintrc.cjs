module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/no-anonymous-default-export': 0,
    '@typescript-eslint/no-explicit-any': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    'no-debugger': 'error',
    'no-console': 'error',
    'no-unused-vars': ['error', { vars: 'local' }],
    '@typescript-eslint/no-unused-vars':
      ['error',
        { vars: 'local',
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_"
        }
      ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
}