import Vue from 'vue'
import App from './App.vue'

Vue.directive('my-on', {
  bind(el, binding, vnode) {
    // el.addEventListener(binding.arg, binding.value);
    if (binding.arg == 'click') {
      el.onclick = () => {
        binding.value();
      }
    }    
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})