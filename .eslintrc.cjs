/* eslint-env node */
module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
  env: {
    'vue/setup-compiler-macros': true,
  },
  parserOptions: {
    parser: 'espree',
    ecmaVersion: 2022,
    sourceType: 'module',
  },
};
