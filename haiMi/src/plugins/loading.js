import Loading from '@/components/Loading'
export default {
  install (Vue, options) {
    let Loadingvm = Vue.extend(Loading)
    let loadcom = ''
    Vue.prototype.$loading = {
      show () {
        if (!loadcom) {
          loadcom = new Loadingvm()
          loadcom.$mount('#loadingBox')
        }
        loadcom.show()
      },
      hide () {
        loadcom.hide()
      }
    }
  }
}
