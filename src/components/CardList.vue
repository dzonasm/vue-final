<template>
  <ul class="card-wrapper">
    <Card
      v-for="product in allProducts"
      @click="this.fetchSingleProduct(product.id)"
      :key="product.id"
      :image="product.image"
      :title="product.title"
      :worth="product.worth"
    />
  </ul>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "./Card.vue";
export default {
  name: "CardList",
  data: function () {
    return {
      allProductsUrl: "http://167.99.138.67:4545/giveaways/all",
    };
  },
  methods: {
    ...mapActions(["fetchProducts", "fetchSingleProduct"]),
  },
  computed: mapGetters(["allProducts"]),
  components: { Card },
  created() {
    this.fetchProducts(this.allProductsUrl);
  },
  props: {},
};
</script>

<style scoped>
.card-wrapper {
  margin: 0 auto;
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
  grid-gap: 1.5rem;
  max-width: 100vw;
  width: 120ch;
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
