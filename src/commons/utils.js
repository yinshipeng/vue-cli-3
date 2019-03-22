/**
 * @description 公共工具类，命名方式为 methodNameUtil
 * @author yinshipeng
 */

let cloneDeep = require('lodash/cloneDeep');

/**
 * 将对象重新封装成{code:'',label:''}型对象
 * 原对象属性为code 原对象属性值为label
 * @param obj
 * @returns {Array}
 */
export const packSelectObjUtil = function (obj) {
    var objArr = [];
    for (var p in obj) {
        var object = {};
        object.code = p;
        object.label = obj[p];
        objArr.push(object);
    }
    return objArr;
};

/**
 * 获取URL中的参数
 * @param {*} name
 */
export const getParamString = function (name) {
    let url = document.location.toString();
    let arrObj = url.split('?');
    if (arrObj.length > 1) {
        let arrPara = arrObj[1].split('&');
        let arr;
        for (let i = 0; i < arrPara.length; i++) {
            arr = arrPara[i].split('=');
            if (arr != null && arr[0] === name) {
                return arr[1];
            }
        }
    }
    return '';
};

/**
 * 获取token
 */
export const getToken = function () {
    var t = getParamString('token');
    if (!t) {
        t = localStorage.getItem('token');
    }
    return t;
};

/**
 * 深拷贝
 * @param {要深拷贝的值} value
 */
export const copyDeep = function (value) {
    return cloneDeep(value);
};
