<template>
  <div id="app">
    <transition mode="out-in" :name="transitionName">
      <router-view class="home-router-view" :appRefs="$refs.bottomBar"></router-view>
    </transition>
    <!-- 底部主导航 -->
    <bottom-tab-bar ref="bottomBar"/>
  </div>
</template>
<script>
import "./App.less";
export default {

  data() {
    return {
      transitionName: "slide-right",
    };
  },
  watch: {

    $route(to, from) {

      switch (to.name) {
        case "news-list":
          this.transitionName = "slide-right";
          break;
        case "home":
          if (from.name === "news-list") {
            this.transitionName = "slide-left";
          } else {
            this.transitionName = "fade";
          }
          break;
        default:
          this.transitionName = "fade";
          break;
      }
    }
  }
};
</script>
