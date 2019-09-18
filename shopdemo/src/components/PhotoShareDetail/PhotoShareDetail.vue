<template>
  <div id="photo-share-detail">
    <nav-header headerTitle="图文分享详情" :isPopup="isPopup" :homeRefs="homeRefs"></nav-header>
    <div class="detail-info" ref="detailInfo" :style="`height:${detaiInfoHeight}px`">
      <h3>{{imgInfo.title}}</h3>
      <div class="detail-micro-info">
        <p>点击次数：{{imgInfo.click}}</p>
        <p>{{imgInfo.add_time | formatDate}}</p>
      </div>
      <hr>
      <vue-preview :slides="imgList" class="preview-imgs"></vue-preview>
      <div v-html="imgInfo.content"></div>
      <router-link :to="{name:'comment',query:{photoShareId:imgId}}">
        <mt-button type="primary">查看评论列表</mt-button>
      </router-link>
    </div>
  </div>
</template>
<script>
import "./PhotoShareDetail.less";
import MiddleVue from "../../services/MiddleVue";
export default {
  data() {
    return {
      isPopup: true,
      imgInfo: {},
      imgList: [],
      detaiInfoHeight: 0,
      imgId: "0"
    };
  },
  created() {
    MiddleVue.$on("getImgId", imgId => {
      this.imgId = imgId;
      this.$axios("getimageInfo/" + imgId)
        .then(res => {
          this.imgInfo = res.data.message;
        })
        .catch(err => console.log(err));

      this.$axios("getthumimages/" + imgId)
        .then(res => {
          this.imgList = res.data.message;
          this.imgList.forEach((item, index) => {
            item.msrc = item.src;
            item.w = 600;
            item.h = 400;
          });
        })
        .catch(err => console.log(err));
    });
  },
  updated() {
    this.detaiInfoHeight =
      document.body.clientHeight - this.$refs.detailInfo.offsetTop;
  },
  props: ["homeRefs"]
};
</script>
