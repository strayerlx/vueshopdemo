import Vue from 'vue';

// 主程入口组件
import App from './components/App/App';

// 导入通用样式
import './assets/less/common.less';

// 导入路由配置
import RouterComponent from './config/RouterComponent';
const router = RouterComponent();

// 导入公共组件配置
import CommonComponent from './config/CommonComponent';
CommonComponent();

// 导入mint-ui组件配置
import MintUIComponent from './config/MintUIComponent';
MintUIComponent();

// 导入Axios的配置
import AxiosConfig from './config/AxiosConfig';
Vue.prototype.$axios = AxiosConfig();

// 导入全局过滤器filter
import GlobalFilters from './config/GlobalFilters';
GlobalFilters();

// 导入全局自定义directive
import GlobalDirectives from './config/GlobalDirectives';
GlobalDirectives();


import VuePreview from 'vue-preview';
Vue.use(VuePreview);


new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
