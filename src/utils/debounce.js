const debounce = (inpFun, wait) => {
  let timeout;
  return function () {
    if (!timeout) {
      // eslint-disable-next-line prefer-rest-params
      inpFun.apply(this, arguments);
      timeout = setTimeout(() => {
        timeout = undefined;
      }, wait);
    }
  };
};

export default debounce;
