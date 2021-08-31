<template>
  <div class="home container">
    <CardList :products="allProducts"></CardList>
  </div>
</template>

<script>
// @ is an alias to /src
import CardList from "../components/CardList.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    CardList,
  },
  data: function () {
    return {
      allProductsUrl: "http://167.99.138.67:4545/giveaways/all",
    };
  },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  computed: mapGetters(["allProducts"]),
  created() {
    this.fetchProducts(this.allProductsUrl);
  },
};
</script>
