import constants from '@/commons/constants';
const filters = {
    /**
     * 常量过滤器，接受常量代码
     * @param classCode
     * @param input
     * @returns {*}
     */
    constantsFilter (input, classCode) {
        if (!input && input !== 0 && input !== '0') {
            return '';
        }
        if (classCode !== undefined && input !== undefined) {
            return constants[classCode][input];
        } else {
            return '';
        }
    }
};

const install = function (Vue) {
    for (let key of Object.keys(filters)) {
        Vue.filter(key, filters[key]);
    }
};

export default install;
