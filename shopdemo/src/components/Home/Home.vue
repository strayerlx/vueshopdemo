<template>
  <div id="home">
    <!-- 轮播图的子组件 -->
    <common-swipe :apiUrl="apiUrl" swipeClass="home-swipe"/>
    <!-- 九宫格的子组件 -->
    <nine-grid>
      <!-- <router-link v-for="(item,index) in homeRouterData" :key="index" :to="item.routerData">
        <img :src="item.src">
        <p v-html="item.title"></p>
      </router-link>-->
      <div v-for="(item,index) in homeRouterData" :key="index">
        <router-link :to="item.routerData" v-if="!item.clickName">
          <img :src="item.src">
          <p v-html="item.title"></p>
        </router-link>
        <!-- 
          @click后边绑定动态值时，结果的字符串值会绑定到@click里，导致@click
          应该使用组件里的methods模块里的值
          所以这里只能通过判断配置的值，来打开不同方法，因为不同方法控制了不同的弹层
        -->
        <div v-if="item.clickName&&item.clickName==='openPhotoShare'" @click="openPhotoShare">
          <img :src="item.src">
          <p v-html="item.title"></p>
        </div>
      </div>
    </nine-grid>
    <!-- 显示登录或注册成功的用户信息 -->
    <h3 v-if="userData">欢迎：{{userData}}</h3>
    <!-- popup在打开后，会默认创建一个遮罩层modal，可以通过设置modal属性为false来默认不创建遮罩层 -->
    <mt-popup
      v-model="popupVisible"
      position="right"
      v-bind-size
      ref="photoSharePopup"
      :modal="isModal"
    >
      <photo-share-list :homeRefs="$refs.photoSharePopup"/>
    </mt-popup>
  </div>
</template>
<script>
import "./Home.less";
import HomeRouterData from "../../config/component-config/HomeRouterData";
import MiddleVue from "../../services/MiddleVue";
import { getUserData } from "../../services/UserData";
export default {
  data() {
    return {
      apiUrl: "getlunbo",
      homeRouterData: HomeRouterData,
      popupVisible: false,
      isModal: false,
      userData: ""
    };
  },
  created() {
    this.userData = getUserData();
    MiddleVue.$on("getUserData", () => {
      this.userData = getUserData();
    });
  },
  methods: {
    openPhotoShare() {
      this.popupVisible = true;
    }
  },
  directives: {

  }
};
</script>
