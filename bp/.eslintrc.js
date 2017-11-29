module.exports = {
  plugins: ['jsx-a11y', 'prettier'],
  env: {
    browser: true,
    es6: true,
    jquery: true
  },
  extends: [
    'eslint:recommended',
    // We extend from create-react-app defaults here
    // https://github.com/facebookincubator/create-react-app/blob/master/packages/eslint-config-react-app/README.md
    'react-app',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    // Override to avoid a conflict with react-app above
    // Can be removed once https://github.com/facebookincubator/create-react-app/pull/2930 has been merged
    'jsx-a11y/href-no-hash': 'off',
    'no-console': 'warn'
  }
};
