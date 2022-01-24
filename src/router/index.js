import Vue from "vue"
import Router from "vue-router"


import Home from "../modules/home/Home.vue"

const FileNotFound = () =>
  import(/* webpackChunkName: "core" */ "../components/FileNotFound.vue")



Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      component: Home,
      name: "Home",
      meta: { loginRequired: true, module: "home" },
    },


    { path: "*", name: "file-not-found", component: FileNotFound },
  ],
  mode: "history",
  base: process.env.BASE_URL,
})


export default router
