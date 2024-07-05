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
  plugins: ['react-refresh', 'simple-import-sort'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/no-anonymous-default-export': 0,
    '@typescript-eslint/no-explicit-any': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/ban-ts-comment': 'error',
    'no-debugger': 'error',
    'no-console': 'error',
    'no-unused-vars': ['error', { vars: 'local' }],
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'local' }],
    'react/no-multi-comp': 'error',
    'simple-import-sort/imports': ['error', {
      overrides: [
        {
          files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
          rules: {
            'simple-import-sort/imports': [
              'error',
              {
                groups: [
                  // Packages `react` related packages come first.
                  ['^react', '^@?\\w'],
                  // Internal packages.
                  ['^(@|components)(/.*|$)'],
                  // Side effect imports.
                  ['^\\u0000'],
                  // Parent imports. Put `..` last.
                  ['^\\.\\.(?!/?$)', '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                  // Style imports.
                  ['^.+\\.?(css)$'],
                ],
              },
            ],
          },
        },
      ],
    }],
    'simple-import-sort/exports': 'error',
  },
};