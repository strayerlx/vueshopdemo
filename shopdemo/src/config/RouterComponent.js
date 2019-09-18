import Vue from 'vue';
import VueRouter from 'vue-router';
export default () => {
  const Home = () => import('../components/Home/Home');
  const GoodsList = () => import('../components/GoodsList/GoodsList');
  const GoodsDetail = () => import('../components/GoodsDetail/GoodsDetail');
  const Shopcart = () => import('../components/Shopcart/Shopcart');
  const PersonalCenter = () => import('../components/PersonalCenter/PersonalCenter');
  const NewsList = () => import('../components/NewsList/NewsList');
  const NewsDetail = () => import('../components/NewsDetail/NewsDetail');
  const CollectionList = () => import('../components/CollectionList/CollectionList');
  const GetMoney = () => import('../components/GetMoney/GetMoney');
  const PlusVIP = () => import('../components/PlusVIP/PlusVIP');
  const Search = () => import('../components/Search/Search');
  const Service = () => import('../components/Service/Service');
  const TimeoutBuy = () => import('../components/TimeoutBuy/TimeoutBuy');
  const Comment = () => import('../components/Comment/Comment');

  const router = new VueRouter();
  router.addRoutes([{
      path: '/',
      redirect: {
        name: 'home',
      }
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
    },
    {
      name: 'goods-list',
      path: '/goods-list',
      component: GoodsList,
    },
    {
      name: 'goods-detail',
      path: '/goods-detail/:goodsId/:imgUrl',
      component: GoodsDetail,
    },
    {
      name: 'shopcart',
      path: '/shopcart',
      component: Shopcart,
    },
    {
      name: 'personal-center',
      path: '/personal-center',
      component: PersonalCenter,
    },
    {
      name: 'news-list',
      path: '/news-list',
      component: NewsList,
    },
    {
      name: 'news-detail',
      path: '/new-detail/:newsId',
      component: NewsDetail,
    },
    {
      name: 'search',
      path: '/search',
      component: Search,
    },
    {
      name: 'service',
      path: '/service',
      component: Service,
    },
    {
      name: 'timeout-buy',
      path: '/timeout-buy',
      component: TimeoutBuy,
    },
    {
      name: 'get-money',
      path: '/get-money',
      component: GetMoney,
    },
    {
      name: 'plus-vip',
      path: '/plus-vip',
      component: PlusVIP,
    },
    {
      name: 'collection-list',
      path: '/collection-list',
      component: CollectionList,
    },
    {
      name: 'comment',
      path: '/comment',
      component: Comment,
    }
  ]);


  Vue.use(VueRouter);

  return router;
};
