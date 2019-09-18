<template>
  <div id="news-list">
    <nav-header headerTitle="新闻列表"></nav-header>
    <div class="news-list-content">
      <router-link
        class="news-list-item"
        v-for="item in newsList"
        :key="item.id"
        :to="{name:'news-detail',params:{newsId:item.id}}"
      >
        <div>
          <img :src="item.img_url">
        </div>
        <div>
          <p>{{item.title | strLimit}}</p>
          <p>{{item.add_time | formatDate}}</p>
          <p>点击次数：{{item.click}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import "./NewsList.less";
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.$axios
      .get("getnewslist")
      .then(res => {
        this.newsList = res.data.message;
      })
      .catch(err => console.log(err));
  }
};
</script>
