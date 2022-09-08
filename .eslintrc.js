module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-trailing-spaces': 'warn',
    'no-unused-vars': 'warn',
    'padded-blocks': 'warn',
    'spaced-comment': 'warn',
    'comma-dangle': 'warn',
    'no-unreachable': 'warn',
    'vue/no-v-html': 'off',
    quotes: 'warn',
    'quote-props': 'warn',
    'array-bracket-spacing': 'warn',
    'no-useless-catch': 'warn',
    'no-async-promise-executor': 'warn',
    'vue/no-mutating-props': 'warn',
    'prefer-regex-literals': 'warn',
    'multiline-ternary': 'warn',
    'no-case-declarations': 'warn',
    'object-curly-newline': 'warn',
    indent: 'warn',
    'space-before-function-paren': 'warn',
    'block-spacing': 'warn',
    'brace-style': 'warn',
    'vue/order-in-components': ['warn', {
      order: [
        'el',
        'name',
        'key',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        ['provide', 'inject'],
        'ROUTER_GUARDS',
        'layout',
        'middleware',
        'validate',
        'scrollToTop',
        'transition',
        'loading',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'emits',
        'setup',
        'data',
        'fetch',
        'head',
        'computed',
        'watch',
        'watchQuery',
        'asyncData',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }]
  }
}
