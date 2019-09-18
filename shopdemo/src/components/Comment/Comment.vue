<template>
  <div id="comment" :style="`height:${commentHeight}px`">
    <nav-header headerTitle="评论列表"></nav-header>
    <div class="comment-main">
      <textarea v-model="commentContent" rows="5" cols="45"></textarea>
      <br>
      <mt-button type="primary" @click="submitComment">提交评论</mt-button>
      <hr>
      <h3>评论列表</h3>
      <mt-loadmore
        ref="loadmore"
        :auto-fill="autoFill"
        :top-method="loadTop"
        :bottom-all-loaded="allLoaded"
        :bottom-method="loadBottom"
      >
        <ul class="comment-list">
          <li v-for="item in commentList" :key="item.id">
            <div class="comment-title">
              <p>{{item.user_name}}：</p>
              <p>{{item.add_time | fromNow}}</p>
            </div>
            <p v-html="item.content"></p>
            <hr>
          </li>
        </ul>
      </mt-loadmore>
    </div>
  </div>
</template>
<script>
import "./Comment.less";
import { getUserData } from "../../services/UserData";
export default {
  data() {
    return {
      commentContent: "",
      commentList: [],
      pageindex: 1,
      goodsId: this.$route.query.goodsId,
      photoShareId: this.$route.query.photoShareId,
      commentHeight: 0,
      autoFill: false,
      allLoaded: false
    };
  },
  created() {
    this.$axios
      .get("getcomments", {
        params: {
          pageindex: this.pageindex,
          goodsId: this.goodsId,
          photoShareId: this.photoShareId
        }
      })
      .then(res => {
        this.commentList = res.data.message;
        this.pageindex = 2;
      })
      .catch(err => console.log(err));
  },
  mounted() {
    this.commentHeight =
      document.body.clientHeight -
      this.$refs.loadmore.$el.offsetTop -
      this.appRefs.$el.offsetHeight;
  },
  methods: {
    loadTop() {
      this.$axios
        .get("getcomments", {
          params: {
            pageindex: 1,
            goodsId: this.goodsId,
            photoShareId: this.photoShareId
          }
        })
        .then(res => {
          this.commentList = res.data.message;
          this.$refs.loadmore.onTopLoaded();
          this.$toast({
            message: "下拉刷新完成",
            position: "bottom"
          });
          this.pageindex = 2;
          this.allLoaded = false;
        })
        .catch(err => console.log(err));
    },
    loadBottom() {
      this.$axios
        .get("getcomments", {
          params: {
            pageindex: this.pageindex,
            goodsId: this.goodsId,
            photoShareId: this.photoShareId
          }
        })
        .then(res => {
          if (res.data.message.length === 0) {
            this.$toast({
              message: "已经到底部了",
              position: "bottom"
            });
            this.$refs.loadmore.onBottomLoaded();
            this.allLoaded = true;
            return;
          }
          this.commentList = this.commentList.concat(res.data.message);
          this.pageindex++;
          this.$refs.loadmore.onBottomLoaded();
        })
        .catch(err => console.log(err));
    },
    submitComment() {
      const account = getUserData();
      this.$axios
        .post("add_comment", {
          user_name: account,
          goodsId: this.goodsId,
          photoShareId: this.photoShareId,
          content: this.commentContent
        })
        .then(res => {
          this.$toast({
            message: res.data.msg,
            position: "bottom"
          });
          this.commentContent = "";

          this.$axios
            .get("getcomments", {
              params: {
                pageindex: 1,
                goodsId: this.goodsId,
                photoShareId: this.photoShareId
              }
            })
            .then(res => {
              this.commentList = res.data.message;
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    }
  },
  props: ["appRefs"]
};
</script>