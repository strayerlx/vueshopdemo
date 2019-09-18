<template>
  <div id="goods-detail">
    <nav-header headerTitle="商品详情页"></nav-header>
    <common-swipe
      class="goods-img-swipe"
      swipeClass="goods-swipe"
      :apiUrl="`getgoodsthumimages/${goodsId}`"
    ></common-swipe>
    <mt-button type="danger" @click="addShopcart">加入购物车</mt-button>
    <div class="goods-detail-content">
      <h3>{{goodsInfo.title}}</h3>
      <p class="goods-common">商品编号：{{goodsInfo.goods_no}}</p>
      <del class="goods-market-price">原价：{{goodsInfo.market_price}}</del>
      <p class="goods-common">售价：{{goodsInfo.sell_price}}</p>
      <p class="goods-common">库存数量：{{goodsInfo.stock_quantity}}</p>
      <p class="goods-buy">
        数量：
        <button @click="reduceQuantity">-</button>
        <input type="number" class="buy-quantity" v-model="buyQuantity" readonly>
        <button @click="addQuantity">+</button>
      </p>
    </div>
    <router-link :to="{name:'comment',query:{goodsId:$route.params.goodsId}}">
      <mt-button type="primary">查看评论列表</mt-button>
    </router-link>
    <keep-alive>
      <transition name="ball" @after-enter="afterEnter">
        <div class="ball" v-if="isShow"></div>
      </transition>
    </keep-alive>
  </div>
</template>
<script>
import "./GoodsDetail.less";
import MiddleVue from "../../services/MiddleVue";
import { getUserData } from "../../services/UserData";
import { getShopcartData } from "../../services/ShopcartData";
import { find } from "lodash";
export default {
  data() {
    return {
      goodsId: this.$route.params.goodsId,
      imgUrl: this.$route.params.imgUrl,
      goodsInfo: {},
      buyQuantity: 0,
      isShow: false,
      shopcartQuantity: 0
    };
  },
  created() {
    this.$axios
      .get("goods/getinfo/" + this.goodsId)
      .then(res => {
        this.goodsInfo = res.data.message;
      })
      .catch(err => console.log(err));
  },
  methods: {
    reduceQuantity() {
      if (this.buyQuantity === 0) {
        return;
      }
      this.buyQuantity--;
    },
    addQuantity() {
      if (this.buyQuantity >= this.goodsInfo.stock_quantity) {
        return;
      }
      this.buyQuantity++;
    },
    async addShopcart() {
      if (this.buyQuantity === 0) {
        this.$toast({
          message: "至少添加一个商品到购物车中",
          position: "bottom"
        });
        return;
      }
      if (getUserData()) {

        const getShopcarts = () => {
          return this.$axios.get("getshopcarts", {
            params: {
              account: getUserData()
            }
          });
        };
        const result = await getShopcarts();
        const userShopcartItem = find(
          result.data.message,
          item => item.goodsId === this.goodsId
        );
        if (
          userShopcartItem &&
          userShopcartItem.quantity + this.buyQuantity >
            userShopcartItem.stock_quantity
        ) {
          this.$toast({
            message: "库存不足！",
            position: "bottom"
          });
          return;
        }
      } else {
        if (getShopcartData().length > 0) {
          const localShopcartItem = find(
            getShopcartData(),
            item => item.goodsId === this.goodsId
          );
          if (
            localShopcartItem &&
            localShopcartItem.quantity + this.buyQuantity >
              this.goodsInfo.stock_quantity
          ) {
            this.$toast({
              message: "库存不足！",
              position: "bottom"
            });
            return;
          }
        }
      }
      this.isShow = true;
    },
    afterEnter() {
      this.isShow = false;
      MiddleVue.$emit(
        "getBuyQuantity",
        this.buyQuantity,
        this.goodsId,
        this.goodsInfo.title,
        this.goodsInfo.sell_price,
        this.imgUrl,
        this.goodsInfo.stock_quantity
      );
    }
  }
};
</script>