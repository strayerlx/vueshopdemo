<template>
  <div id="bottom-tab-bar">
    <router-link
      v-for="(item,index) in bottomBarData"
      :key="index"
      :class="item.class"
      :to="item.routerData"
      v-if="item.title!=='个人中心'&&item.title!=='购物车'"
    >
      <p v-html="item.title"></p>
    </router-link>
    <router-link
      v-for="(item,index) in bottomBarData"
      :key="index"
      :class="item.class"
      :to="item.routerData"
      v-if="item.title==='购物车'"
    >
      <p>
        {{item.title}}
        <mt-badge type="error" v-if="buyQuantity" class="buy-badge" size="small">{{buyQuantity}}</mt-badge>
      </p>
    </router-link>
    <router-link
      v-for="(item,index) in bottomBarData"
      :key="index"
      :class="item.class"
      :to="item.routerData"
      v-if="item.title==='个人中心'"
      @click.native="openLoginRegist"
    >
      <p v-html="item.title"></p>
    </router-link>
    <mt-popup v-model="popupVisible" position="bottom" class="login-regist" ref="loginRegistPopup">
      <login-regist :loginRegistPopup="$refs.loginRegistPopup"></login-regist>
    </mt-popup>
  </div>
</template>
<script>
import "./BottomTabBar.less";
import BottomBarData from "../../config/component-config/BottomBarData";
import MiddleVue from "../../services/MiddleVue";
import { getUserData } from "../../services/UserData";
import {
  getShopcartData,
  setShopcartData,
  removeShopcartData
} from "../../services/ShopcartData";
import { each } from "lodash";
export default {
  data() {
    return {
      bottomBarData: BottomBarData,
      popupVisible: false,
      buyQuantity: 0
    };
  },
  created() {
    if (getUserData()) {
      this.$axios
        .get("getshopcarts?account=" + getUserData())
        .then(res => {
          if (getShopcartData().length === 0) {
            this.buyQuantity = 0;
          }
          each(res.data.message, item => {
            this.buyQuantity += item.quantity;
          });
        })
        .catch(err => console.log(err));
    } else {
      each(getShopcartData(), item => {
        this.buyQuantity += item.quantity;
      });
    }
    MiddleVue.$on("getLoginShopcart", isLogin => {
      if (isLogin) {
        this.$axios
          .get("getshopcarts?account=" + getUserData())
          .then(res => {
            if (getShopcartData().length === 0) {
              this.buyQuantity = 0;
            }
            each(res.data.message, item => {
              this.buyQuantity += item.quantity;
            });
          })
          .catch(err => console.log(err));
      }
    });
    MiddleVue.$on(
      "getBuyQuantity",
      (buyQuantity, goodsId, title, sellPrice, imgUrl, stockQuantity) => {
        if (!goodsId) {
          this.buyQuantity = 0;
          removeShopcartData();
          return;
        } else {
          this.buyQuantity += buyQuantity;
        }

        if (getUserData()) {

          this.$axios.post("add_shopcart", {
            user_name: getUserData(),
            quantity: buyQuantity,
            goodsId
          });
        } else {

          setShopcartData({
            quantity: buyQuantity,
            goodsId,
            title,
            sell_price: sellPrice,
            img_url: imgUrl,
            stock_quantity: stockQuantity
          });
        }
        this.$toast({
          message: "加车成功！",
          position: "bottom"
        });
      }
    );
  },
  methods: {
    openLoginRegist() {
      MiddleVue.$on("getUserData", userData => {
        if (!userData) {
          this.popupVisible = true;
        }
      });
    }
  }
};
</script>