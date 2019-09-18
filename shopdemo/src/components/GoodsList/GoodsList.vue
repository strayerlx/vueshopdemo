<template>
  <div id="goods-list" :style="`height:${loadmoreHeight}px`">
    <nav-header headerTitle="商品列表"></nav-header>
    <mt-loadmore
      ref="loadmore"
      class="goods-list-content"
      :top-method="loadTop"
      top-pull-text="玩命加载中..."
      :bottom-method="loadBottom"
      :auto-fill="autoFill"
      :bottom-all-loaded="allLoaded"
    >
      <ul>
        <li v-for="item in goodsList" :key="item.id">
          <router-link :to="{name:'goods-detail',params:{goodsId:item.id,imgUrl:item.img_url}}">
            <div class="goods-img">
              <img :src="item.img_url">
            </div>
            <h3>{{item.title | goodsTitleLimit}}</h3>
            <del>原价：&yen;{{item.market_price}}</del>
            <p class="goods-sell-price">售价：&yen;{{item.sell_price}}</p>
            <p class="goods-stock-quantity">库存：{{item.stock_quantity}}</p>
          </router-link>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>
<script>
import "./GoodsList.less";
export default {
  data() {
    return {
      goodsList: [],
      pageindex: this.$route.query.pageindex,
      loadmoreHeight: 0,
      autoFill: false,
      allLoaded: false
    };
  },
  created() {
    this.$axios
      .get("getgoods", {
        params: {
          pageindex: this.pageindex
        }
      })
      .then(res => {
        this.goodsList = res.data.message;
        this.pageindex++;
      })
      .catch(err => console.log(err));
  },
  mounted() {
    this.loadmoreHeight =
      document.body.clientHeight -
      this.$refs.loadmore.$el.offsetTop -
      this.appRefs.$el.offsetHeight;
  },
  methods: {
    loadTop() {
      this.$axios
        .get("getgoods?pageindex=1")
        .then(res => {
          this.goodsList = res.data.message;
          this.$refs.loadmore.onTopLoaded();
          this.$toast({
            message: "下拉刷新完成",
            position: "bottom"
          });
          this.allLoaded = false;
          this.pageindex = 2;
        })
        .catch(err => console.log(err));
    },
    loadBottom() {
      this.$axios
        .get("getgoods", {
          params: {
            pageindex: this.pageindex
          }
        })
        .then(res => {
          if (res.data.message.length === 0) {
            this.allLoaded = true;
            this.$refs.loadmore.onBottomLoaded();
            this.$toast({
              message: "亲，已经到底了，表折磨我了~",
              position: "bottom"
            });
            return;
          }

          this.goodsList = this.goodsList.concat(res.data.message);
          this.pageindex++;
          this.$refs.loadmore.onBottomLoaded();
        })
        .catch(err => console.log(err));
    }
  },
  props: ["appRefs"]
};
</script>
