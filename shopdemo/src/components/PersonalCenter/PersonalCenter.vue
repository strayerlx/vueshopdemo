<template>
  <div id="personal-center">
    <h1>个人中心组件</h1>
    <h3 v-if="userData">欢迎：{{this.userData}}</h3>
    <mt-button type="primary" @click="logout">退出登录</mt-button>
  </div>
</template>
<script>
import "./PersonalCenter.less";
import { getUserData, removeUserData } from "../../services/UserData";
import MiddleVue from "../../services/MiddleVue";
export default {
  data() {
    return {
      userData: ""
    };
  },
  created() {
    this.userData = getUserData();
  },
  methods: {
    logout() {
      if (confirm("是否退出登录")) {
        removeUserData();
        MiddleVue.$emit("getBuyQuantity");
        this.$toast({
          message: "退出登录成功",
          position: "bottom"
        });
        this.$router.push({
          name: "home"
        });
      }
    }
  },
  beforeRouteEnter: (to, from, next) => {
    const userData = getUserData();
    if (userData) {
      next();
    } else {
      MiddleVue.$emit("getUserData", userData);
      next(false);
    }
  }
};
</script>
