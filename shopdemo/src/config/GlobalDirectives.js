import Vue from 'vue';
export default () => {
  Vue.directive('bindSize', {
    bind(el, binding) {
      if (binding.value) {
        el.style.width = binding.value;
      } else {
        el.style.width = screen.width + "px";
      }
      el.style.height = "100%";
    }
  });
};
