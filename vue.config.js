module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-pxtorem')({
                        rootValue: 16,
                        propList: ['*']
                    })
                ]
            }
        }
    }
};
