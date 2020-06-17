/**
 * 节流
 * @param {*} fn
 * @param {Number} wait
 */
export function throttle(fn, wait) {
  var timer, previous, now, diff;
  return function () {
    var _args = [].slice.call(arguments)
    var context = this
    now = Date.now()
    var _fn = function () {
      timer = null
      previous = Date.now()
      fn.apply(context, _args)
    }
    clearTimeout(timer);
    if (previous !== undefined) {
      diff = now - previous
      if (diff <= wait) {
        timer = setTimeout(_fn, wait)
      } else {
        fn.apply(context, _args)
        previous = Date.now()
      }
    } else {
      _fn()
    }
  }
}

/**
 * 防抖
 * @param {*} fn
 * @param {Number} delay
 * @param {Boolean} isImmdeiate
 */

export function debounce(fn, delay, isImmdeiate) {
  var timer = null
  return function () {
    var _args = [].slice.call(arguments)
    var context = this
    var _fn = function () {
      timer = null
      if (!isImmdeiate) {
        fn.apply(context, _args)
      }
    }
    clearTimeout(timer)
    if (!timer && isImmdeiate) {
      fn.apply(context, _args)
    }
    timer = setTimeout(_fn, delay)
  }
}
