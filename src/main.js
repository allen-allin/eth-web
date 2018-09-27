import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import Element from 'element-ui'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import 'element-ui/lib/theme-chalk/index.css'
import {zh,en} from './lang/'


Vue.use(VueI18n)
Vue.use(Element)

Vue.config.lang = 'en'
Vue.locale('zh', {...zhLocale,...zh})
Vue.locale('en', {...enLocale,...en})




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
