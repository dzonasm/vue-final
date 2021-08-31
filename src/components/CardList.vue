<template>
  <ul class="card-wrapper">
    <Card
      v-for="product in products"
      @click="this.fetchSingleProduct(product.id)"
      :key="product.id"
      :image="product.image"
      :title="product.title"
      :worth="product.worth"
    />
  </ul>
</template>

<script>
import { mapActions } from "vuex";
import Card from "./Card.vue";
export default {
  name: "CardList",
  methods: {
    ...mapActions(["fetchProducts", "fetchSingleProduct"]),
  },
  components: { Card },

  props: {
    products: Array,
  },
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
