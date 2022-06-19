import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import './sass/main.scss';

const app = createApp(App);

app.use(router);

app.directive("click-outside", {
    beforeMount(el, binding, vnode) {
        el.clickOutsideEvent = (event) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event);
            }
        };
        document.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted(el) {
        document.removeEventListener("click", el.clickOutsideEvent);
    },
});

app.mount("#app");
