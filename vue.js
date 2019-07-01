module.exports = {
  extends: [
    // prettier
    'plugin:prettier/recommended',
    // 基础
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended'
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, jsxSingleQuote: true }],
    // 单引号
    quotes: ['error', 'single'],
    // 函数名前不需要空格
    'space-before-function-paren': ['error', 'never'],
    // promise不一定有reject
    'prefer-promise-reject-errors': 'off',
    // new创建实例不需要赋值
    'no-new': 'off',
    // 生产环境下可以输入console.warn error
    'no-console': 'error',
    // 生产环境禁止输入debugger
    'no-debugger': 'error',
    // 不检查v-if v-else 换行
    'brace-style': [0],
    // 闭合规则
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any'
        }
      }
    ],
    // 避免和prettier重复
    'vue/html-closing-bracket-spacing': [0],
    // 最大行
    'vue/max-attributes-per-line': [0],
    // 属性命名用驼峰式
    'vue/attribute-hyphenation': ['error', 'never'],
    // 顺序
    'vue/order-in-components': [
      'error',
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          'data',
          ['props', 'propsData'],
          'computed',
          'watch',
          'LIFECYCLE_HOOKS',
          'methods',
          ['template', 'render'],
          'renderError'
        ]
      }
    ],
    // 可以使用v-html
    'vue/no-v-html': [0]
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  }
};
