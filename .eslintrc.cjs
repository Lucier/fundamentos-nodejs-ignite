module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': 'off',
    'no-useless-escape': 'off',
    'no-param-reassign': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'max-classes-per-file': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': 'off',
    'no-undef': 'off',
    'no-shadow': 'off',
  },
};
