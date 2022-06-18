import { createApp } from 'vue';
import App from './App.vue';
import './sass/main.scss';

const app = createApp(App);

app.directive("click-outside", {
    beforeMount(el, binding, vnode) {
        el.clickOutsideEvent = (event) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event);
            }
        };
        document.body.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener("click", el.clickOutsideEvent);
    },
});

app.mount("#app");
