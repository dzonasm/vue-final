<template>
  <div class="about container">
    <h1>This is an about page</h1>
    <SingleProduct></SingleProduct>
    <router-link to="/">Go To All products</router-link>
  </div>
</template>

<script>
import SingleProduct from "../components/SingleProduct.vue";
export default {
  components: { SingleProduct },
};
</script>
