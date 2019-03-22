<template>
  <div id="header">
    <h3 @click="goHome">商户云平台管理系统</h3>
    <ul class="welcome">
      <li>
        <span>欢迎，{{username}}</span>
      </li>
    </ul>
    <ul class="nav">
      <li><a href="javascript:;" @click="logout"><i class="fa fa-sign-out-alt"></i>&nbsp;&nbsp;退出系统</a></li>
    </ul>
  </div>
</template>
<script>
export default {
    data () {
        return {
            username: '尹士鹏'
        };
    },
    methods: {
        logout () {},
        goHome () {
            this.$router.push('/');
        }
    }
};

</script>
<style lang="scss" scoped>
  h3 {
    color: #ffffff;
    margin-left: 10px;
    font-size: 16px;
    float: left;
  }

  h3:hover {
    cursor: pointer;
  }

  #header {
    background-color: #3c8dbc;
  }

  .welcome {
    float: left;
    margin-left: 50px;
  }

  .nav {
    float: right;
    padding-right: 40px;
  }

  .welcome>li,
  .nav>li {
    position: relative;
    float: left;
    padding: 0 15px;
  }

  .welcome>li>a,
  .welcome>li>span,
  .nav>li>a {
    color: #fff;
  }

  .nav>li:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

</style>
