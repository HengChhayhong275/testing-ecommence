import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductsVue from "../views/Products.vue";
import AboutViewVue from "../views/AboutView.vue";
import Index from "../views/Index.vue"
import Men from "../components/Men.vue"
import Women from "../components/Women.vue"
import Kid from "../components/Kid.vue"
import Accessories from "../components/Accessories.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutViewVue,
    },
    {
      path: "/product",
      name: "product",
      component: ProductsVue,
    },
    {
      path: "/index",
      name: "index",
      component: Index,
    },
    {
      path: "/men",
      name: "men",
      component: Men,
    },
    {
      path: "/women",
      name: "women",
      component: Women,
    },
    {
      path: "/kid",
      name: "kid",
      component: Kid,
    },
    {
      path: "/accessories",
      name: "accessories",
      component: Accessories,
    },

  ],
});

export default router;
