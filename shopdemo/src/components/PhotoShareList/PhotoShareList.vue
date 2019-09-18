<template>
  <div id="photo-share-list">
    <nav-header headerTitle="图文分享列表" :isPopup="isPopup" :homeRefs="homeRefs"/>

    <ul class="category-list" ref="categoryList">
      <li
        v-for="item in categoryList"
        :key="item.id"
        @click="getSummaryList(item.id)"
      >{{item.title}}</li>
    </ul>

    <ul class="summary-list" :style="`height:${summaryListHeight}px`">
      <li v-for="item in summaryList" :key="item.id" @click="openDetail(item.id)">
        <img v-lazy="item.img_url">
        <div class="summary-content">
          <h3>{{item.title | strLimit}}</h3>
          <p>{{item.zhaiyao | summaryLimit}}</p>
        </div>
      </li>
    </ul>
    <mt-popup v-model="popupVisible" position="right" v-bind-size ref="photoShareDetailPopup">
      <photo-share-detail :homeRefs="$refs.photoShareDetailPopup"/>
    </mt-popup>
  </div>
</template>
<script>
import "./PhotoShareList.less";
import MiddleVue from "../../services/MiddleVue";
export default {
  data() {
    return {
      isPopup: true,
      categoryList: [],
      summaryList: [],
      summaryListHeight: 0,
      popupVisible: false
    };
  },
  created() {

    this.$axios
      .get("getimgcategory")
      .then(res => {
        this.categoryList = res.data.message;
        this.categoryList.unshift({
          id: "0",
          title: "全部"
        });
      })
      .catch(err => console.log(err));

    this.$axios
      .get("getimages/0")
      .then(res => {
        this.summaryList = res.data.message;
      })
      .catch(err => console.log(err));
  },
  updated() {
    const categoryListHeight = this.$refs.categoryList.offsetHeight;
    const categoryListTop = this.$refs.categoryList.offsetTop;
    this.summaryListHeight =
      screen.height - categoryListHeight - categoryListTop;
  },
  methods: {
    getSummaryList(categoryId) {
      this.$axios
        .get("getimages/" + categoryId)
        .then(res => {
          this.summaryList = res.data.message;
        })
        .catch(err => console.log(err));
    },

    openDetail(imgId) {
      this.popupVisible = true;
      MiddleVue.$emit("getImgId", imgId);
    }
  },
  props: ["homeRefs"]
};
</script>
