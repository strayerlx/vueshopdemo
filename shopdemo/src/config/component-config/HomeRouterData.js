export default [{
    routerData: {
      name: 'home',
    },
    src: require('../../assets/images/nav-1.png'),
    title: '首页',
  },
  {
    routerData: {
      name: 'news-list',
    },
    src: require('../../assets/images/nav-2.png'),
    title: '新闻中心',
  },
  {
    src: require('../../assets/images/nav-3.png'),
    title: '图文分享',
    clickName: 'openPhotoShare',
  },
  {
    routerData: {
      name: 'search',
    },
    src: require('../../assets/images/nav-4.png'),
    title: '搜索中心',
  },
  {
    routerData: {
      name: 'goods-list',
      query: {
        pageindex: 1,
      },
    },
    src: require('../../assets/images/nav-5.png'),
    title: '商品列表',
  },
  {
    routerData: {
      name: 'service',
    },
    src: require('../../assets/images/nav-6.png'),
    title: '客服中心',
  },
  {
    routerData: {
      name: 'get-money',
    },
    src: require('../../assets/images/nav-7.png'),
    title: '赚钱',
  },
  {
    routerData: {
      name: 'timeout-buy',
    },
    src: require('../../assets/images/nav-8.png'),
    title: '限时秒杀',
  },
  {
    routerData: {
      name: 'collection-list',
    },
    src: require('../../assets/images/nav-9.png'),
    title: '收藏列表',
  },
  {
    routerData: {
      name: 'plus-vip',
    },
    src: require('../../assets/images/nav-10.png'),
    title: 'PLUS会员',
  },
];
