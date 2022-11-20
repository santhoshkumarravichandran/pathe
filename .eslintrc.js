// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    'plugin:vue/strongly-recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "vue/html-indent": ["error", 4, {
      "attribute": 1,
      "closeBracket": 0,
      "switchCase": 0,
      "ignores": []
  }],
  "vue/max-attributes-per-line": [2, {
    "singleline": 10,
    "multiline": {
      "max": 1,
      "allowFirstLine": false
    }
  }],
  'indent': ['error', 4],
  'space-before-function-paren': ['error', 'never'],
  'semi': [2, "never"],
  'vue/singleline-html-element-content-newline': 'off',
  'vue/multiline-html-element-content-newline': 'off'
  }
}
