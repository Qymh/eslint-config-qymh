const path = require('path');
const cwd = process.cwd();
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve(cwd, 'tsconfig.json'),
    sourceType: 'module'
  },
  plugins: ['react-hooks', 'import', '@typescript-eslint'],
  extends: ['plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, jsxSingleQuote: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
