import Vue from 'vue';
import store from '@/store';
import axios from 'axios';
import apis from './apis';
import {
    LOADING
} from '@/store/mutation-types';
import {
    Message
} from 'element-ui';
import { getToken } from '@/commons/utils';

let httpCount = 0;

axios.interceptors.request.use(function (config) {
    httpCount += 1;
    config.headers['token'] = getToken();
    config.timeout = 3000;
    if (!store.getters.loading) {
        store.commit(LOADING, true);
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

/**
 * 查找服务
 * @param apiName
 * @returns {Array}
 */
function getApi (apiName) {
    const item = apis.filter((item) => {
        if (item['name'] === apiName) {
            return item;
        }
    });
    if (item.length === 1) {
        item[0].baseURL = process.env['VUE_APP_' + item[0].baseURL.toUpperCase()];
        delete item.name;
        return item[0];
    } else {
        throw new Error(`无法找到该服务${apiName}`);
    }
}

/**
 * 接口处理
 * @param resp
 * @param resolve
 * @param reject
 */
function successHandler (resp, resolve, reject) {
    if (resp.status === 200) {
        if (resp.data.code === 0 || resp.data.code === '0') {
            resolve(resp.data.data);
        } else {
            errorHandler(reject, resp.data);
        }
    } else {
        errorHandler(reject);
    }
}

/**
 * 错误接口处理
 * @param error
 * @param reject
 */
function errorHandler (reject, data = {}) {
    Message({
        title: '提示',
        message: data.message || '系统异常，请联系管理员',
        type: 'error',
        duration: 3000
    });
    reject(data);
}

/**
 * 为全局对象Vue绑定$request函数
 * @param apiName
 * @param params
 * @returns {*}
 */
Vue.prototype.$request = (apiName = '', params = {}) => {
    const item = getApi(apiName);
    return new Promise((resolve, reject) => {
        item.params = params;
        axios(item).then(resp => {
            successHandler(resp, resolve, reject);
        }).catch(err => {
            errorHandler(reject, err);
        });
    })
        .finally(() => {
            httpCount -= 1;
            if (httpCount === 0) {
                store.commit(LOADING, false);
            }
        });
};
