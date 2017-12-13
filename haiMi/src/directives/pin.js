import utils from '@/utils/utils'
export default {
  inserted (el, binding) {
    var initOffset = {
      top: el.offsetTop,
      height: el.offsetHeight
    }
    el.parentNode.addEventListener('scroll', function () {
      let scrollTop = this.scrollTop
      if (scrollTop >= initOffset.top - binding.value) {
        utils.css(el, {
          'position': 'fixed',
          'top': binding.value + 'px',
          'z-index': 100
        })
        utils.css(el.parentNode, {
          'padding-top': initOffset.height
        })
      } else {
        utils.css(el, {
          'position': 'relative',
          'top': 0
        })
        utils.css(el.parentNode, {
          'padding-top': 0
        })
      }
    }, false)
  }
}
