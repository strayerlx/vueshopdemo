<template>
  <div id="common-swipe">
    <mt-swipe :auto="4000" :class="swipeClass">
      <mt-swipe-item v-for="item in imgs" :key="item.id">
        <a :href="item.url">
          <img :src="item.src">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import "./CommonSwipe.less";
export default {
  data() {
    return {
      imgs: []
    };
  },
  created() {
    this.$axios
      .get(this.apiUrl)
      .then(res => {
        this.imgs = res.data.message;
      })
      .catch(err => console.log(err));
  },
  props: ["apiUrl", "swipeClass"]
};
</script>
