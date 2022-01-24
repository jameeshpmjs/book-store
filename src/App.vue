<template>
  <v-app>
    <div class="my-5 container">
      <v-app-bar app fixed dense dark color="primary">
        Book Store

        <v-spacer />

        <Cart />
      </v-app-bar>

      <v-main>
        <transition :name="routeTransition">
          <router-view />
        </transition>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Cart from "./components/Cart.vue";

export default {
  name: "App",

  components: { Cart },

  data: () => ({
    routeTransition: null,
  }),

  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      if (toDepth === fromDepth) this.routeTransition = "fade-transition";
      else
        this.routeTransition =
          toDepth < fromDepth ? "slide-x-reverse-transition" : "slide-x-transition";
    },
  },
};
</script>
