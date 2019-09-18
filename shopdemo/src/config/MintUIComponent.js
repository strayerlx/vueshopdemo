import Vue from 'vue';

import {
  Swipe,
  SwipeItem,
  Popup,
  Lazyload,
  Loadmore,
  Toast,
  Button,
  Badge,
} from 'mint-ui';
import 'mint-ui/lib/swipe/style.css';
import 'mint-ui/lib/swipe-item/style.css';
import 'mint-ui/lib/popup/style.css';
import 'mint-ui/lib/lazyload/style.css';
import 'mint-ui/lib/loadmore/style.css';
import 'mint-ui/lib/toast/style.css';
import 'mint-ui/lib/button/style.css';
import 'mint-ui/lib/badge/style.css';

export default () => {
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  Vue.component(Popup.name, Popup);

  Vue.use(Lazyload);
  Vue.component(Loadmore.name, Loadmore);

  Vue.prototype.$toast = Toast;
  Vue.component(Button.name, Button);
  Vue.component(Badge.name, Badge);
};
