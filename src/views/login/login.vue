<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
<script>
export default {
    data () {
        return {
            errorMsg: '',
            checked: true,
            form: {
                username: '',
                password: ''
            }
        };
    },
    methods: {
        validForm () {
            if (!this.form.username) {
                this.errorMsg = '用户名不能为空';
                return false;
            } else if (!this.form.password) {
                this.errorMsg = '密码不能为空';
                return false;
            } else {
                return true;
            }
        },
        login () {
            if (this.validForm()) {
                this.$router.push('/home');
            }
        }
    }
};
</script>
