import Vue from 'vue';
Vue.directive('tooltip', {
  bind (el, binding) {
    el.style.position = 'relative';
    let tip = document.createElement('div');
    el.addEventListener('mouseover', function () {
      tip.style.display = 'block';
    });
    el.addEventListener('mouseout', function () {
      // tip.style.display = 'none';
    });
    tip.className = `v-tooltip v-tooltip-${binding.value.pos}`;
    tip.textContent = binding.value.content;
    el.appendChild(tip);
  }
});
