module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "indent": ["error", 4],
        // 使用单引号
        "quotes": ["error", "single"],
        // 使用绝等于
        "eqeqeq": "error",
        // 句末添加分号
        "semi": [2, "always"],
        "no-console": 1,
        // 禁止在代码行后使用内联注释
        "no-inline-comments": "error",
        // 可以使用let v1,v2,v3连续(1不可以)
        "one-var": 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}