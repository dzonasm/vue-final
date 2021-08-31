import { createStore } from "vuex";
import products from "./modules/products";
import pagination from "./modules/pagination";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { products, pagination },
});
