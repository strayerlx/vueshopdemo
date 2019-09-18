<template>
  <div id="news-detail">
    <nav-header headerTitle="新闻详情"></nav-header>
    <div class="news-detail-content">
      <h3>{{newsDetail.title}}</h3>
      <p>点击次数：{{newsDetail.click}}</p>
      <hr>
      <div v-html="newsDetail.content"></div>
    </div>
  </div>
</template>
<script>
import "./NewsDetail.less";
export default {
  data() {
    return {
      newsDetail: {}
    };
  },
  created() {
    const newsId = this.$route.params.newsId;
    this.$axios
      .get("getnew/" + newsId)
      .then(res => {
        this.newsDetail = res.data.message;
      })
      .catch(err => console.log(err));
  }
};
</script>