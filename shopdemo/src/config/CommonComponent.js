import Vue from 'vue';
import BottomTabBar from '../common-components/BottomTabBar/BottomTabBar';
import CommonSwipe from '../common-components/CommonSwipe/CommonSwipe';
import NineGridContainer from '../common-components/NineGridContainer/NineGridContainer';
import NavHeader from '../common-components/NavHeader/NavHeader';
import PhotoShareList from '../components/PhotoShareList/PhotoShareList';
import PhotoShareDetail from '../components/PhotoShareDetail/PhotoShareDetail';
import LoginRegist from '../common-components/LoginRegist/LoginRegist';
export default () => {
  Vue.component('bottom-tab-bar', BottomTabBar);
  Vue.component('common-swipe', CommonSwipe);
  Vue.component('nine-grid', NineGridContainer);
  Vue.component('nav-header', NavHeader);
  Vue.component('photo-share-list', PhotoShareList);
  Vue.component('photo-share-detail', PhotoShareDetail);
  Vue.component('login-regist', LoginRegist);
};
