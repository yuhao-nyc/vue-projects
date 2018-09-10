import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.root = 'https://test-1101e.firebaseio.com/data.json'

Vue.http.interceptors.push((request, next) => {
  if (request.method == 'POST') {
    request.method == 'PUT'
    //replace the old data instead of append
  }
  next(response => {
    response.json = () => {
      return {
        messages: response.body
      }
    }
  });
})

new Vue({
  el: '#app',
  render: h => h(App)
})