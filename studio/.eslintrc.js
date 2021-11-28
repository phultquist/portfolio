module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'semi': false
  },
  settings: {
    react: {
      pragma: 'React',
      version: '16.8.6'
    }
  },
};
