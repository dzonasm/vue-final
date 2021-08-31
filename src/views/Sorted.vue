<template>
  <div class="container">
    <Sorting />
    <CardList :products="sortedProducts" />
  </div>
</template>

<script>
import Sorting from "../components/Sorting.vue";
import CardList from "../components/CardList.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Sorted",
  components: {
    CardList,
    Sorting,
  },
  methods: {
    ...mapActions(["fetchSortedProducts"]),
  },
  computed: mapGetters(["sortedProducts"]),
  created() {
    this.fetchSortedProducts(
      "http://167.99.138.67:4545/giveaways/sort/pc/game/date"
    );
  },
};
</script>

<style></style>
