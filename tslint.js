module.exports = {
  extends: 'tslint-config-airbnb',
  rules: {
    // diverge from airbnb: rules we do not want
    'ter-arrow-parens': false,
    'import-name': false,
    'variable-name': false,
    'align': false,
    'max-line-length': false,

    // diverge from airbnb: rules we will want
    'object-shorthand-properties-first': false,
    'object-curly-spacing': false,
    'trailing-comma': [false, {'esSpecCompliant': true}],
  }
};