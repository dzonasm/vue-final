import axios from "axios";

const state = {};

const getters = {
  allProducts: (state) => state.products,
  singleProduct: (state) => state.singleProduct,
  sortedProducts: (state) => state.sortedProducts,
};

const actions = {
  async fetchProducts(context, url) {
    const { commit } = context;
    const response = await axios.get(url);

    commit("setProducts", response.data);
  },
  async fetchSingleProduct(context, id) {
    const { commit } = context;
    const response = await axios.get(
      `http://167.99.138.67:4545/giveaways/id/${id}`
    );
    commit("setSingleProduct", response.data);
  },
  async fetchSortedProducts(context, url) {
    console.log(url);
    const { commit } = context;
    const response = await axios.get(url);
    commit("setSortedProducts", response.data);
  },
};

const mutations = {
  setProducts: (state, products) => (state.products = products),

  setSingleProduct: (state, singleProduct) =>
    (state.singleProduct = singleProduct),

  setSortedProducts: (state, sortedProducts) =>
    (state.sortedProducts = sortedProducts),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
