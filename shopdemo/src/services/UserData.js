import CryptoJS from 'crypto-js';

// 获取用户数据
const getUserData = () => {
  const cryptoResult = localStorage.getItem('goudan');
  let decryptResult = '';
  if (cryptoResult) {
    const decryptBytes = CryptoJS.AES.decrypt(cryptoResult, 'goudan666');
    decryptResult = decryptBytes.toString(CryptoJS.enc.Utf8);
  }
  return decryptResult;
};

// 删除用户数据
const removeUserData = () => {
  localStorage.removeItem('goudan');
};

// 设置用户数据
const setUserData = (value) => {
  const cryptoResult = CryptoJS.AES.encrypt(value, 'goudan666').toString();
  localStorage.setItem('goudan', cryptoResult);
};

export {
  getUserData,
  removeUserData,
  setUserData,
};
