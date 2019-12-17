'use strict'

// 📐 eslint-plugin-unicorn: https://github.com/sindresorhus/eslint-plugin-unicorn
module.exports = {
  plugins: ['unicorn'],
  rules: {
    // 'no-nested-ternary': 'off',
    'no-process-exit': 'off',
    'no-warning-comments': 'off',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': 'warn',
    // 'unicorn/explicit-length-check': 'off',
    'unicorn/filename-case': [
      'error',
      { cases: { kebabCase: true, pascalCase: true } },
    ],
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-console-spaces': 'error',
    // 'unicorn/no-fn-reference-in-iterator': 'off',
    'unicorn/no-for-loop': 'warn',
    'unicorn/no-hex-escape': 'error',
    // 'unicorn/no-keyword-prefix': 'off',
    // 'unicorn/no-nested-ternary': 'off',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-process-exit': 'warn',
    // 'unicorn/no-unreadable-array-destructuring': 'off',
    // 'unicorn/no-unsafe-regex': 'off',
    // 'unicorn/no-unused-properties': 'off',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error', // ✘ disabled by eslint-config-prettier
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-dataset': 'error',
    'unicorn/prefer-event-key': 'error',
    // 'unicorn/prefer-exponentiation-operator': 'off',
    // 'unicorn/prefer-flat-map': 'off',
    // 'unicorn/prefer-includes': 'off',
    'unicorn/prefer-negative-index': 'error',
    // 'unicorn/prefer-node-append': 'off',
    // 'unicorn/prefer-node-remove': 'off',
    'unicorn/prefer-query-selector': 'error',
    // 'unicorn/prefer-reflect-apply': 'off',
    // 'unicorn/prefer-spread': 'off',
    // 'unicorn/prefer-starts-ends-with': 'off',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-text-content': 'error',
    'unicorn/prefer-type-error': 'error',
    // 'unicorn/prevent-abbreviations': 'off',
    'unicorn/regex-shorthand': 'error',
    'unicorn/throw-new-error': 'error',
  },
}
