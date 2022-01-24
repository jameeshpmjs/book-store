<template>
  <div>
    <v-btn small icon @click="dialog = true">
      <v-badge bordered overlap color="primary">
        <v-icon>mdi-cart</v-icon>
        <span slot="badge">{{ cart.length }}</span>
      </v-badge>
    </v-btn>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-toolbar dense elevation="2" color="primary" dark>Cart Items</v-toolbar>

        <v-card-text>
          <div v-if="cart.length > 0">
            <v-simple-table :key="key">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Book</th>
                    <th class="text-left">Units</th>
                    <th class="text-left">Units Price</th>
                    <th class="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in reducedCart" :key="i">
                    <td v-text="books.find((book) => book.id === i).title"></td>
                    <td>{{ item }}</td>
                    <td v-text="books.find((book) => book.id === i).price"></td>
                    <td>
                      <v-icon @click="reduceFromCart(i)">mdi-minus-thick</v-icon>
                      <v-icon @click="removeFromCart(i)">mdi-delete</v-icon>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <v-divider />

            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Combo</th>
                    <th class="text-left">Actual cost</th>
                    <th class="text-left">%discount</th>
                    <th class="text-left">price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(combo, i) in combos" :key="'book' + i">
                    <td v-text="getComboName(combo)"></td>
                    <td>{{comboSum[i].actual}}</td>
                    <td>{{comboSum[i].percentage}}</td>
                    <td>{{comboSum[i].price}}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>

            <v-divider />

            <p class="text-right total">Total: {{this.getArraySum(this.comboSum)}}</p>
          </div>

          <span v-else align="end"> Cart is empty </span>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { get, sync } from "vuex-pathify";
export default {
  name: "Cart",

  data: () => ({
    dialog: false,
    key: Math.random(0, 100),
    total: 0,
  }),

  computed: {
    cart: sync("cart"),
    books: get("books"),
    offerPercetage: get("offerPercetage"),
    

    cartItems() {
      return 1;
    },

    reducedCart() {
      let counts = this.cart.reduce((acc, it) => {
        acc[it.id] = acc[it.id] + 1 || 1;
        return acc;
      }, {});

      return counts;
    },

    totalCost() {
      return this.getArraySum(this.cart);
    },

    comboAvailable() {
      const unique = [...new Set(this.cart.map((item) => item.id))];
      return unique.length;
    },

    combos() {
      let combos = [];
      let cart = this.cart;

      while (cart.length > 0) {
        let combo = [];
        let duplicates = cart.filter((item) => {
          if (combo.find((i) => i.id === item.id)) {
            return true;
          }

          combo.push(item);
          return false;
        });

        combos.push(combo);

        cart = duplicates;
      }
      return combos;
    },

    comboSum() {
      let combosum = [];
      this.combos.forEach((combo) => {
        let actual = this.getArraySum(combo);
        let percentage = this.getOfferPercentage(combo.length);
        let price = percentage === 0 ? actual : actual-  (actual * 1/percentage)
        let obj = { actual, percentage, price};
        combosum.push(obj);
      });
      return combosum;
    },
  },

  methods: {
    removeFromCart(id) {
      this.cart = this.cart.filter((ele) => ele.id !== id);
    },
    reduceFromCart(id) {
      let cart = [];
      let foundOne = false;
      this.cart.forEach((element) => {
        if (element.id === id && !foundOne) foundOne = true;
        else cart.push(element);
      });
      this.cart = cart;
      this.key = Math.random(0, 100);
    },

    getComboName(combo) {
      let name = "";
      combo.forEach((book, i) => {
        name = i === 0 ? book.title : name + "," + book.title;
      });
      return name;
    },
    getArraySum(arr) {
      return arr.map((item) => item.price).reduce((prev, next) => prev + next);
    },
    getOfferPercentage(count) {
      return this.offerPercetage.find((item) => item.count === count).percentage;
    },
  },
};
</script>
