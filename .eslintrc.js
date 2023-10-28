module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/self-closing-comp': 'off',
    'react-native/no-inline-styles': 'off',
  },
};
