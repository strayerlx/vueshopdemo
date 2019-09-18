import CryptoJS from 'crypto-js';
import {
  find,
  map
} from 'lodash';


const getShopcartData = () => {
  const cryptoResult = localStorage.getItem('goudan555');
  let shopcartData = [];
  if (cryptoResult) {
    const decryptResult = CryptoJS.AES.decrypt(cryptoResult, 'goudan888');

    shopcartData = JSON.parse(decryptResult.toString(CryptoJS.enc.Utf8));
  }
  return shopcartData;
};


const setShopcartData = (data) => {

  const shopcartData = getShopcartData();

  const shopcartItem = find(shopcartData, item => item.goodsId === data.goodsId);
  if (shopcartItem) {
  
    map(shopcartData, item => {
      if (item.goodsId === shopcartItem.goodsId) {
        item.quantity += data.quantity;
        return item;
      } else {
        return item;
      }
    });
  } else {
    shopcartData.push(data);
  }
  const cryptoResult = CryptoJS.AES.encrypt(JSON.stringify(shopcartData), 'goudan888').toString();
  localStorage.setItem('goudan555', cryptoResult);
};

const removeShopcartData = () => {
  localStorage.removeItem('goudan555');
};

export {
  getShopcartData,
  setShopcartData,
  removeShopcartData,
};
