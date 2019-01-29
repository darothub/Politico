module.exports = {
    "extends": "airbnb-base",
    "parserOptions": {
        "ecmaVersion": 2017,
        "sourceType": "module"
    },
    "ecmaFeatures": {
        "modules": true,
        "jsx": true
    },
    "env": {
        "node": true,
        "browser": true,
        "es6":true
    },
    "rules": {
        "linebreak-style": 0,
        "global-require": 0,
        "indent": ["error", 2],
    }
}