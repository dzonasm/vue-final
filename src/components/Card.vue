<template>
  <router-link to="/about">
    <li class="card grow">
      <img :src="image" alt="" />
      <h3 class="truncate">
        {{ title }}
      </h3>
      <p v-bind:class="[getNumbers(worth) > 5 ? yellow : green]">
        <b>{{ worth }}</b>
      </p>
    </li>
  </router-link>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    worth: String,
  },
  methods: {
    getNumbers: function (numberString) {
      let untilDot = numberString.match(/[^.]*/, "");
      let num = untilDot[0].replace(/[^0-9]/g, "");
      return Number(num.substring(0, 2));
    },
  },
  data() {
    return {
      green: "green",
      yellow: "yellow",
    };
  },
};
</script>

<style scoped>
.card {
  --card-gradient: rgba(0, 0, 0, 0);
  --card-gradient: #5e9ad9, #e271ad;
  --card-gradient: tomato, orange;
  --card-blend-mode: overlay;
  --card-blend-mode: multiply;

  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45);
  padding-bottom: 1rem;
  background-image: linear-gradient(
    var(--card-gradient),
    white max(9.5rem, 27vh)
  );
  overflow: hidden;
  width: 80%;
  max-width: 300px;
  cursor: pointer;
}

.green {
  background-color: green;
}

.yellow {
  background-color: yellow;
}

.truncate {
  padding: 0 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.grow {
  transition: all 0.3s ease-in-out;
}
.grow:hover {
  transform: scale(1.05);
}

.green {
  background: rgb(0, 185, 0);
}

img {
  border-radius: 0.5rem 0.5rem 0 0;
  width: 100%;
  object-fit: cover;
  height: max(10rem, 25vh);
  max-height: max(10rem, 30vh);
  aspect-ratio: 4/3;
  mix-blend-mode: var(--card-blend-mode);
  filter: grayscale(100);
}

.card h3 {
  margin-top: 1rem;
  font-size: 1.25rem;
}

.card a {
  color: inherit;
}

a {
  display: grid;
  place-items: center;
}
</style>
