import Vue from "vue"

import Vuex from "vuex"

import pathify from "@/plugins/pathify"
import { make } from "vuex-pathify"

const state = {
  loading: true,
  books:[
      {
        price: 8.0,
        src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        title: "Book 1",
        id: "001",
        description:
          "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      },
      {
        price: 8.0,
        src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        title: "Book 2",
        id: "002",
        description:
          "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      },
      {
        price: 8.0,
        src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        title: "Book 3",
        id: "003",
        description:
          "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      },
      {
        price: 8.0,
        src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        title: "Book 4",
        id: "004",
        description:
          "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      },
      {
        price: 8.0,
        src: "https://cdn.vuetifyjs.com/images/parallax/material.jpg",
        title: "Book 5",
        id: "005",
        description:
          "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
      },
  ],
  cart:[],
  offerPercetage:[{
    count: 1,
    percentage:0,
  },{
    count: 2,
    percentage:5,
  },{
    count: 3,
    percentage:10,
  },{
    count: 4,
    percentage:20,
  },{
    count: 5,
    percentage:25,
  }]
}

const mutations = make.mutations(state)

const getters = {
  ...make.getters(state),
}

const actions = {
  
}

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [pathify.plugin],
  modules: { },
  state,
  mutations,
  getters,
  actions,
})
