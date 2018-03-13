// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    'globals': {
        
    },
    env: {
        browser: true,
        'es6': true,
        'commonjs': true,
        'node': true
    },
    extends: [
      'plugin:vue/essential', 
      'eslint:recommended'
    ],
    // required to lint *.vue files
    //   plugins: [
    //     'html'
    //   ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        'no-console': ['off'],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
