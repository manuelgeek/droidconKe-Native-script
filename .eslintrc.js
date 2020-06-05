module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        'airbnb-base',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'vue',
    ],
    rules: {
        'no-console': 'off',
        'import/extensions': 'off',
        "import/no-unresolved": [
            0,
            { "caseSensitive": false }
        ],
        "vue/require-prop-types":0,
        'max-len': 'off',
        'no-param-reassign': 'off',
        'import/no-extraneous-dependencies': ['off', {'devDependencies': false, 'optionalDependencies': false, 'peerDependencies': false,  'packageDir': "./"}],
        'import/no-self-import': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-named-as-default': 'off',
        'import/no-cycle': 'off',
        'import/order': 'off',
        'import/no-duplicates': 'off',
        'import/named': 'off',
        'no-undef': 'off',
        'no-useless-concat': 'off',
        'import/prefer-default-export': 'off',
        'vue/no-use-v-if-with-v-for': 'off',
        'vue/attribute-hyphenation': 'off',
        "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]

    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['~', './app']
                ],
                extensions: ['.ts', '.js', '.vue', '.json']
            }
        }
    }
};
