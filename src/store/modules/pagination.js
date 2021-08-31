const state = {};

const getters = {
  sortedPage: (state) => state.sortedProductsPage,
  allProductsPage: (state) => state.allProductsPage,
};

const actions = {
  setSortedProductsPage(context, page) {
    const { commit } = context;

    commit("setSortedProductsPage", page);
  },
  setAllProductsPage(context, page) {
    const { commit } = context;

    commit("setAllProductsPage", page);
  },
};

const mutations = {
  setSortedProductsPage: (state, page) => (state.sortedProductsPage = page),
  setAllProductsPage: (state, page) => (state.allProductsPage = page),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
