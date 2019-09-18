<template>
  <div id="nav-header" ref="navHeader">
    <div class="nav-header-content">
      <h3>
        <span @click="back">&lt;&nbsp;返回</span>
        {{this.headerTitle}}
      </h3>
    </div>
  </div>
</template>
<script>
import "./NavHeader.less";
export default {
  methods: {
    back() {
      if (this.isPopup) {
        this.homeRefs.close();
      } else {
        this.$router.history.go(-1);
      }
    }
  },
  props: ["headerTitle", "isPopup", "homeRefs"]
};
</script>