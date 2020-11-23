'use strict'

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'babel',
    'eslint',
    'import',
    'jest',
    'json',
    'node',
    'promise',
    'react',
    'react-hooks',
    'unicorn',
    'prettier', // prettier must go last to disable styling rules
  ].map((x) => require.resolve(`./rules/${x}`)),
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  root: true,
}
