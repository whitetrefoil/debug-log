/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,

  extends: [
    '@whitetrefoil/eslint-config/base',
  ],

  rules: {
    'no-console': [0],
  },
}
