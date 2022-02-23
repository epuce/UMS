import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue'
import axios from "axios";
import VueI18n from 'vue-i18n';
import 'bootstrap/dist/css/bootstrap.css';
import translations from './config/translations'
import routes from './config/routes.js'

console.log(translations)

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueI18n);
Vue.prototype.$axios = axios

const resolvers = [];
const router = new VueRouter({
  routes,
  mode: 'history',
})

Vue.filter('uppercase', function (value) {
  return value.toUpperCase()
})

const i18n = new VueI18n({
  locale: localStorage.language || 'lv',
  fallbackLocale: 'eng',
  messages: translations,
});

function hasQueryParams(route) {
  return !!Object.keys(route.query).length
}

router.beforeEach((to, from, next) => {
  if (!hasQueryParams(to) && hasQueryParams(from)) {
    next({ path: to.path, query: from.query });
  } else {
    next()
  }
})

const loadLanguages = axios.post("/api/language/list").then((response) => {
  Vue.prototype.$languages = response.data.content;
});

resolvers.push(loadLanguages);

Promise.all(resolvers).then(() => {
  new Vue({
    i18n,
    router,
    render: h => h(App),
  }).$mount('#app')
})
