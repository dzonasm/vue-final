import axios from "axios";

const state = {};

const getters = {
  allProducts: (state) => state.products,
};

const actions = {
  async fetchProducts(context, url) {
    console.log(url);
    const { commit } = context;
    const response = await axios.get(url);

    commit("setProducts", response.data);
  },
};

const mutations = {
  setProducts: (state, products) => (state.products = products),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
