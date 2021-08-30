<template>
  <li class="card">
    <img :src="image" alt="" />
    <h3 class="truncate">
      {{ title }}
    </h3>
    <p>
      <b>{{ worth }}</b>
    </p>
  </li>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    worth: String,
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
  max-width: 300px;
}

.truncate {
  padding: 0 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
</style>
