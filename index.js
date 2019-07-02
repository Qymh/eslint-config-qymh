module.exports = {
  extends: ['standard', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, jsxSingleQuote: true }],
    // 单引号
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    // 函数前不需要空格
    'space-before-function-paren': ['error', 'never'],
    // promise不需要必有reject
    'prefer-promise-reject-errors': 'off',
    // new 可以直接使用
    'no-new': 'off',
    // 不要console
    'no-console': 'error',
    // 不要debugger
    'no-debugger': 'error',
    // if else 可以分段
    'brace-style': [0]
  }
};
