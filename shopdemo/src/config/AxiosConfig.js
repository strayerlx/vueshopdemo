import Axios from 'axios';
import {
  Indicator
} from 'mint-ui';
import 'mint-ui/lib/spinner/style.css';
import 'mint-ui/lib/indicator/style.css';
export default () => {

  Axios.defaults.baseURL = 'http://localhost:8888/api/';

  Axios.interceptors.request.use((options) => {
    Indicator.open({
      text: '玩命加载中......',
      spinnerType: 'fading-circle',
    });
    return options;
  });
  Axios.interceptors.response.use((options) => {
    Indicator.close();
    return options;
  });
  return Axios;
};
