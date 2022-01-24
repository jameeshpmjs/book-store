<template>
  <v-container>
    <h3 class="display-1 mb-4">Books available</h3>
    <v-row>
      <v-col v-for="(book, index) in books" :key="index" cols="12" md="4">
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            class="md-4"
            color="gray lighten-4"
            max-width="600"
          >
            <v-img :src="book.src" :aspect-ratio="16 / 9">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out orange draken-2 display-3 v-card--reveal display3 black--text"
                  style="height: 100%"
                >
                  ${{ book.price }}
                </div>
              </v-expand-transition>
            </v-img>

            <v-card-text class="pt-4" style="position: relative">
              <v-btn
                small
                absolute
                color="orange"
                class="white--text"
                fab
                medium
                right
                top
                @click="cart.push(book)"
              >
                <v-icon>mdi-cart</v-icon>
              </v-btn>

              <div class="font-weight-light grey--text title mb-2">
                {{ book.title }}
              </div>
              <p class="font-weight-light grey--text title2 mb-2">
                {{ book.description }}
              </p>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { get, sync } from "vuex-pathify";
export default {
  name: "Home",
  data: () => ({
    loading: false,
  }),

  computed: {
    books: get("books"),
    cart: sync("cart"),
  },
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
.v-card h3.display-1 {
  font-size: 24px !important;
}
</style>
