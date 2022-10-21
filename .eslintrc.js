module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // Disabled because react native uses js, not jsx
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    // Disabled because style prop can be object or string
    'react/style-prop-object': 'off',
    // fix linebreak errors
    'linebreak-style': 0,
    // disable prop validation
    'react/prop-types': 'off',
  },
};
