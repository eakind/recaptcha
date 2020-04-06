module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off', // process.env.NODE_ENV === 'production' ? 'error' : 
    'no-debugger': 'off', // process.env.NODE_ENV === 'production' ? 'error' : 
    'prefer-const': 'off',
    'camelcase': 2,
    'eqeqeq': 2,
    'no-dupe-args': 2,
    "semi":[2,'always'],
    "comma-dangle": ["error", "never"],
  }
}
