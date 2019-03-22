let menu = require('./menu');
var Mock = require('mockjs');

module.exports = () => {
    var data = Mock.mock({
        menu
    });
    for (let key in data) {
        let o = {
            code: 0,
            message: '',
            data: data[key]
        };
        data[key] = o;
    }
    return data;
};
