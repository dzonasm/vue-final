<template>
  <div class="home container">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CardList></CardList>
  </div>
</template>

<script>
// @ is an alias to /src
import CardList from "../components/CardList.vue";

export default {
  name: "Home",
  components: {
    CardList,
  },
};
</script>
