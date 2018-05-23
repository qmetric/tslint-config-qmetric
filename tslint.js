module.exports = {
  extends: 'tslint-config-airbnb',
  rules: {
    // diverge from airbnb: rules we do not want
    'align': false,
    'import-name': false,
    'max-line-length': false,
    'object-literal-key-quotes': [true, 'as-needed'],
    'quotemark': ['single', 'avoid-template', 'avoid-escape'],
    'ter-arrow-parens': false,
    'variable-name': false,

    // diverge from airbnb: rules we will want
    'object-curly-spacing': false,
    'object-shorthand-properties-first': false,
    'trailing-comma': [false, {'esSpecCompliant': true}],
    'radix': false,
  }
};