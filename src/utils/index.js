export const navDelay = 1000;
export const loaderDelay = 2000;

export const throttle = (func, wait = 100) => {
    let timer = null;
    return function (...args) {
      if (timer === null) {
        timer = setTimeout(() => {
          func.apply(this, args);
          timer = null;
        }, wait);
      }
    };
  };
  