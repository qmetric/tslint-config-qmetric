const ALL_WHITESPACE_CHECKS = [true,
  'check-branch',
  'check-decl',
  'check-operator',
  'check-module',
  'check-separator',
  'check-rest-spread',
  'check-type',
  'check-typecast',
  'check-type-operator',
  'check-preblock'
];

module.exports = {
  extends: [
    'tslint-config-airbnb',
    'tslint-react',
    'tslint-eslint-rules'
  ],
  rules: {
    // Differences from preset
    'curly': true,
    'trailing-comma': [false, {'esSpecCompliant': true}],
    'no-constant-condition': true,
    // no-extra-parens: N/A
    'whitespace': ALL_WHITESPACE_CHECKS,
    'triple-equals': true,
    'no-use-before-declare': true,
    // strict: N/A
    // space-infix-ops: N/A
    'no-unused-variable': true,
    // func-style: N/A
    'ter-arrow-parens': [true, "as-needed"],
    // no-mixed-operators: N/A
    // flowtype/space-before-type-colon: N/A
    // flowtype/space-after-type-colon: N/A
    // react/jsx-indent: N/A
    // react/jsx-indent-props: N/A
    // react/jsx-first-prop-new-line: N/A
    'jsx-space-before-trailing-slash': false,
    // react/default-props-match-prop-types: N/A
    // no-param-reassign: N/A
    // key-spacing: N/A
    'quotemark': ['single', 'avoid-template', 'avoid-escape'],
    'ter-indent': [true, {"SwitchCase": 1}],
    'no-console': true,

    // Rules we do not want to enforce
    'jsx-key': false,
    'object-curly-spacing': false,
    // no-plusplus: N/A
    'ter-max-len': false, 'max-line-length': false,
    // import/imports-first: N/A
    // import/no-extraneous-dependencies: N/A
    // react/require-extension: N/A
    // new-cap: N/A
    'react-a11y-role': false,
    'jsx-wrap-multiline': false,
    // no-else-return: N/A
    // jsx-a11y/label-has-for: N/A
    // jsx-a11y/no-static-element-interactions: N/A
    // jsx-a11y/anchor-has-content: N/A
    'align': false,
    'import-name': false,
    'object-literal-key-quotes': [true, 'as-needed'],
    'variable-name': false,

    // Pending rules
    // no-nested-ternary: N/A
    // no-confusing-arrow: N/A
    'array-bracket-spacing': false,
    // comma-spacing: N/A
    // space-before-function-paren: N/A
    // func-names: N/A
    'object-literal-shorthand': false,
    'ter-padded-blocks': false,
    'ter-arrow-spacing': false,
    'no-unneeded-ternary': false,
    'react-no-dangerous-html': false,
    // newline-per-chained-call: N/A
    // react/no-unused-prop-types: N/A
    'radix': false,
    'react-a11y-img-has-alt': false,
    'eol-last': false,
    'comment-format': false,
    // prefer-template: N/A
    'jsx-no-bind': false,
    // comma-style: N/A
    // class-methods-use-this: N/A
    // react/sort-comp: N/A
    // import/no-unresolved: N/A
    // object-curly-newline: N/A
    // import/first: N/A
    // react/jsx-tag-spacing: N/A
    // prefer-destructuring: N/A
    // react/jsx-closing-tag-location: N/A
    // function-paren-newline: N/A
    // react/jsx-max-props-per-line: N/A
    // react/require-default-props: N/A
    'react-a11y-anchors': false,
    'react-a11y-image-button-has-alt': false,
    'react-a11y-img-has-alt': false,
    'object-shorthand-properties-first': false
  }
};