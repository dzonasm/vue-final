<template>
  <div id="nav">
    <router-link to="/">All Products</router-link> |
    <router-link to="/sorted">Sorted</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  // mounted() {
  //   this.$nextTick(function () {
  //     // Code that will run only after the
  //     // entire view has been rendered
  //   });
  // },
  // data(){
  // }
};
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.container {
  margin: 0 auto;
  min-width: 90vw;
  max-width: 1000px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
