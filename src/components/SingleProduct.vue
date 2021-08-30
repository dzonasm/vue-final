<template>
  <div v-if="singleProduct" id="container">
    <div class="product-details">
      <h1>{{ singleProduct.title }}</h1>

      <p class="information">
        {{ singleProduct.description }}
      </p>

      <div class="control">
        <button class="btn">
          <span class="price">{{ singleProduct.worth }}</span>
          <span class="buy">Buy Now</span>
        </button>
      </div>
    </div>
    <div class="product-image">
      <img :src="singleProduct.thumbnail" :alt="singleProduct.title" />

      <div class="info">
        <h2>Details</h2>
        <ul>
          <li><strong>Type: </strong>{{ singleProduct.type }}</li>
          <li><strong>Status: </strong>{{ singleProduct.status }}</li>
          <li><strong>Users: </strong>{{ singleProduct.users }}</li>
          <li><strong>Sale end date: </strong>{{ singleProduct.endDate }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SingleProduct",
  computed: mapGetters(["singleProduct"]),
};
</script>

<style scoped>
/* fonts  */
@import url("https://fonts.googleapis.com/css?family=Abel|Aguafina+Script|Artifika|Athiti|Condiment|Dosis|Droid+Serif|Farsan|Gurajada|Josefin+Sans|Lato|Lora|Merriweather|Noto+Serif|Open+Sans+Condensed:300|Playfair+Display|Rasa|Sahitya|Share+Tech|Text+Me+One|Titillium+Web");

#container {
  box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 5em auto;
  height: 350px;
  width: 700px;
}

/* 	Product details  */
.product-details {
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 30px;
  height: 100%;
  float: left;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;
}

/* 	Product Name */
#container .product-details h1 {
  font-family: "Old Standard TT", serif;
  display: inline-block;
  position: relative;
  font-size: 34px;
  color: #344055;
  margin: 0;
}

/* The most important information about the product */
#container .product-details > p {
  font-family: "Farsan", cursive;
  text-align: center;
  font-size: 20px;
  color: #7d7d7d;
}

/* control */

.control {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
}
/* the Button */
.btn {
  transition: 0.3s linear;
  background: #ee8f00;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  border: none;
  color: #eee;
  padding: 0;
  margin: 0;
}

.btn:hover {
  transform: translateY(-4px);
}

.btn span {
  font-family: "Farsan", cursive;
  transition: transform 0.3s;
  display: inline-block;
  padding: 10px 20px;
  font-size: 1.2em;
  margin: 0;
}

/* buy */
.btn .buy {
  z-index: 3;
  font-weight: bolder;
}

/* product image  */
.product-image {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;
  float: right;
  width: 50%;
  display: inline-block;
}

#container img {
  width: 100%;
  height: 100%;
}

.info {
  background: rgba(27, 26, 26, 0.9);
  transition: all 0.3s ease-out;
  transform: translateX(-100%);
  position: absolute;
  line-height: 1.9;
  text-align: left;
  font-size: 120%;
  cursor: no-drop;
  color: #fff;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  padding-left: 2rem;
}

.info h2 {
  text-align: center;
}
.product-image:hover .info {
  transform: translateX(0);
}

.info ul li {
  transition: 0.3s ease;
}
.info ul li:hover {
  transform: translateX(50px) scale(1.3);
}

.product-image:hover img {
  transition: all 0.3s ease-out;
}
.product-image:hover img {
  transform: scale(1.2, 1.2);
}
</style>
