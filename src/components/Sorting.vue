<template>
  <form @submit.prevent="handleSubmit">
    <select name="type" v-model="type">
      <option v-for="type in types" :key="type">{{ type }}</option>
    </select>
    <select v-model="platform" name="platform">
      <option v-for="platform in platforms" :key="platform">
        {{ platform }}
      </option>
    </select>
    <select name="sortBy" v-model="sortBy">
      <option v-for="sortBy in sortBys" :key="sortBy">{{ sortBy }}</option>
    </select>
    <input type="submit" />
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Sorting",
  data: function () {
    return {
      types: ["game", "loot", "beta"],
      platforms: [
        "pc",
        "steam",
        "epic-games-store",
        " ubisoft",
        "gog",
        "itchio",
        " ps4",
        "xbox-one",
        " switch",
        " android",
        " ios",
        "vr",
        " battlenet",
        " origin",
        "drm-free",
      ],
      sortBys: ["date", "value", "popularity"],
      type: "game",
      platform: "pc",
      sortBy: "date",
      sortingProductsUrl:
        "http://167.99.138.67:4545/giveaways/sort/:platform/:type/:sortBy",
    };
  },
  methods: {
    ...mapActions(["fetchSortedProducts"]),
    handleSubmit: function () {
      const { sortBy, type, platform } = this;
      console.log(sortBy, type, platform);
      const url = `http://167.99.138.67:4545/giveaways/sort/${platform}/${type}/${sortBy}`;
      this.fetchSortedProducts(url);
    },
  },
};
</script>

<style scoped>
form {
  padding: 3rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 600px;
}
</style>
