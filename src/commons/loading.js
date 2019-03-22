import {
    Loading
} from 'element-ui';
let debounce = require('lodash/debounce');

let options = {
    lock: true,
    text: '加载中……',
    background: 'rgba(0, 0, 0, 0.7)'
};
let loadingInstance = null;

const loading = {
    open: function () {
        loadingInstance = Loading.service(options);
    },
    close: function () {
        debounce(() => {
            loadingInstance.close();
        }, 300)();
    }
};

const install = function (Vue) {
    Vue.prototype.$loading = loading;
};

export default install;
