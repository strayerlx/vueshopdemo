<template>
  <div id="login-regist">
    <h3>
      <span @click="toggleLoginOrRegist(loginTitle)">{{loginTitle}}</span>|
      <span @click="toggleLoginOrRegist(registTitle)">{{registTitle}}</span>
    </h3>
    <form ref="login" v-if="isLogin">
      <fieldset>
        <legend>登录页面</legend>
        <label for="login-account">
          帐号：
          <input type="text" v-model="loginAccount" id="login-account" placeholder="请输入帐号">
        </label>
        <br>
        <label for="login-pwd">
          密码：
          <input type="password" v-model="loginPwd" id="login-pwd" placeholder="请输入密码">
        </label>
        <br>
        <button @click="login">登录</button>
      </fieldset>
    </form>
    <form ref="regist" v-if="isRegist">
      <fieldset>
        <legend>注册页面</legend>
        <label for="regist-account">
          帐号：
          <input type="text" v-model="registAccount" id="regist-account" placeholder="请输入帐号">
        </label>
        <br>
        <label for="regist-pwd">
          密码：
          <input type="password" v-model="registPwd" id="regist-pwd" placeholder="请输入密码">
        </label>
        <br>
        <button @click="regist">注册</button>
      </fieldset>
    </form>
  </div>
</template>
<script>
import "./LoginRegist.less";
import { setUserData } from "../../services/UserData";
import MiddleVue from "../../services/MiddleVue";
import {
  getShopcartData,
  removeShopcartData
} from "../../services/ShopcartData";
export default {
  data() {
    return {
      registAccount: "",
      registPwd: "",
      loginAccount: "",
      loginPwd: "",
      loginTitle: "登录",
      registTitle: "注册",
      isLogin: false,
      isRegist: false
    };
  },
  created() {
    this.isLogin = true;
  },
  methods: {
    toggleLoginOrRegist(title) {
      switch (title) {
        case "登录":
          this.isLogin = true;
          this.isRegist = false;
          break;
        case "注册":
          this.isLogin = false;
          this.isRegist = true;
          break;
      }
    },
    login() {
      this.$axios
        .post("login", {
          account: this.loginAccount,
          pwd: this.loginPwd
        })
        .then(res => {
          if (res.data.code === "1") {
            setUserData(this.loginAccount);
            MiddleVue.$emit("getUserData");
            this.$toast({
              message: res.data.msg,
              position: "bottom"
            });
            if (getShopcartData().length > 0) {
              this.$axios
                .post("add_shopcart", {
                  user_name: this.loginAccount,
                  localShopcarts: getShopcartData()
                })
                .then(res => {
                  removeShopcartData();
                  MiddleVue.$emit("getLoginShopcart", true);
                })
                .catch(err => console.log(err));
            } else {
              MiddleVue.$emit("getLoginShopcart", true);
            }
            this.loginRegistPopup.close();
          } else if (res.data.code === "2") {
            this.$toast({
              message: res.data.msg,
              position: "bottom"
            });
          }
          this.loginAccount = "";
          this.loginPwd = "";
        })
        .catch(err => console.log(err));
    },
    regist() {
      this.$axios
        .post("regist", {
          account: this.registAccount,
          pwd: this.registPwd
        })
        .then(res => {
          if (res.data.code === "1") {
            this.$toast({
              message: res.data.msg,
              position: "bottom"
            });
            this.registAccount = "";
          } else if (res.data.code === "2") {
            setUserData(this.registAccount);
            MiddleVue.$emit("getUserData");
            this.$toast({
              message: res.data.msg,
              position: "bottom"
            });
            if (getShopcartData().length > 0) {
              this.$axios
                .post("add_shopcart", {
                  user_name: this.loginAccount,
                  localShopcarts: getShopcartData()
                })
                .then(res => {
                  removeShopcartData();
                  MiddleVue.$emit("getLoginShopcart", true);
                })
                .catch(err => console.log(err));
            } else {
              MiddleVue.$emit("getLoginShopcart", true);
            }
            this.loginRegistPopup.close();
            this.registAccount = "";
            this.registPwd = "";
          }
        })
        .catch(err => console.log(err));
    }
  },
  props: ["loginRegistPopup"]
};
</script>

