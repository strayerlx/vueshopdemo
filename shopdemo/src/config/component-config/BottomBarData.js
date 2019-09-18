export default [{
    class: 'home',
    routerData: {
      name: 'home',
    },
    title: '首页',
  },
  {
    class: 'goods-list',
    routerData: {
      name: 'goods-list',
      query: {
        pageindex: 1,
      },
    },
    title: '商品列表',
  },
  {
    class: 'shopcart',
    routerData: {
      name: 'shopcart',
    },
    title: '购物车',
  },
  {
    class: 'personal-center',
    routerData: {
      name: 'personal-center',
    },
    title: '个人中心',
  },
];
