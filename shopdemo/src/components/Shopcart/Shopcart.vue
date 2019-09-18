<template>
  <div id="shopcart">
    <nav-header headerTitle="购物车列表"></nav-header>
    <ul class="shopcart-list">
      <li v-for="item in shopcartList" :key="item.id">
        <div class="goods-img">
          <img :src="item.img_url">
        </div>
        <div class="goods-info">
          <h3>{{item.title | strLimit}}</h3>
          <p>售价：&yen;{{item.sell_price}}</p>
          <div>
            <button @click="reduceQuantity(item.goodsId)" ref="reduceBtn">-</button>
            <span>{{item.quantity}}</span>
            <button @click="addQuantity(item.goodsId)" ref="addBtn">+</button>
          </div>
        </div>
      </li>
    </ul>
    <h3 style="text-align:right" v-if="shopcartList.length>0">总价：&yen;{{getTotalPrice}}</h3>
    <h3 v-if="shopcartList.length<=0">购物车空无一物~</h3>
  </div>
</template>
<script>
import "./Shopcart.less";
import { getUserData } from "../../services/UserData";
import { getShopcartData, setShopcartData } from "../../services/ShopcartData";
import { each, map, find } from "lodash";
import MiddleVue from "../../services/MiddleVue";
export default {
  data() {
    return {
      shopcartList: []
    };
  },
  created() {
    MiddleVue.$on("getLoginShopcart", isLogin => {
      if (isLogin) {
        this.$axios
          .get("getshopcarts?account=" + getUserData())
          .then(res => {
            this.shopcartList = res.data.message;
          })
          .catch(err => console.log(err));
      }
    });
    if (!getUserData()) {
      this.shopcartList = getShopcartData();
    } else {
      this.$axios
        .get("getshopcarts?account=" + getUserData())
        .then(res => {
          this.shopcartList = res.data.message;
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    map(this.shopcartList, (item, index) => {
      if (item.quantity === 1) {
        this.$refs.reduceBtn[index].disabled = "disabled";
      }
      if (item.quantity === item.stock_quantity) {
        this.$refs.addBtn[index].disabled = "disabled";
      }
    });
  },
  computed: {
    getTotalPrice() {
      let totalPrice = 0;
      each(this.shopcartList, item => {
        totalPrice += item.sell_price * item.quantity;
      });
      return totalPrice;
    }
  },
  methods: {
    reduceQuantity(goodsId) {
      map(this.shopcartList, (item, index) => {
        if (item.goodsId === goodsId) {
          if (getUserData()) {
            MiddleVue.$emit("getBuyQuantity", -1, goodsId);
          } else {
            MiddleVue.$emit(
              "getBuyQuantity",
              -1,
              goodsId,
              item.title,
              item.sell_price,
              item.img_url,
              item.stock_quantity
            );
          }
          item.quantity--;
          if (item.quantity === 1) {
            this.$refs.reduceBtn[index].disabled = "disabled";
          } else {
            this.$refs.reduceBtn[index].disabled = "";
          }
          if (item.quantity < item.stock_quantity) {
            this.$refs.addBtn[index].disabled = "";
          }
          return item;
        } else {
          return item;
        }
      });
    },
    addQuantity(goodsId) {
      map(this.shopcartList, (item, index) => {
        if (item.goodsId === goodsId) {
          if (getUserData()) {
            MiddleVue.$emit("getBuyQuantity", 1, goodsId);
          } else {
            MiddleVue.$emit(
              "getBuyQuantity",
              1,
              goodsId,
              item.title,
              item.sell_price,
              item.img_url,
              item.stock_quantity
            );
          }
          item.quantity++;
          if (item.quantity >= item.stock_quantity) {
            this.$refs.addBtn[index].disabled = "disabled";
          } else {
            this.$refs.addBtn[index].disabled = "";
          }
          if (item.quantity > 1) {
            this.$refs.reduceBtn[index].disabled = "";
          }
          return item;
        } else {
          return item;
        }
      });
    }
  }
};
</script>
