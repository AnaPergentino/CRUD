import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import CriarProduto from "./views/criar-produto.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "inicio",
      component: Home
    },
    {
      path: "/criar-produto",
      name: "Criar produto",
      component: CriarProduto
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
//      component: () =>
  //      import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
