import { createWebHistory, createRouter } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Events from "../views/Events.vue";

const routes = [
    {
        path: "/",
        name: "dashboard",
        component: Dashboard,
        props: {
            events: {
                type: Array,
                required: true
            },
            getData: {
                type: Function,
                required: true
            }
        }
    },
    {
        path: "/events",
        name: "events",
        component: Events,
        props: {
            events: {
                type: Array,
                required: true
            },
            getData: {
                type: Function,
                required: true
            }
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;