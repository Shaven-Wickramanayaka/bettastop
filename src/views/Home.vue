<script>
import Products from "../components/Products.vue";
import FooterBar from "../components/FooterBar.vue";
import Hero from "../components/Hero.vue";
import Navbar from "../components/Navbar.vue";
import Newsletter from "../components/Newsletter.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    Products,
    Newsletter,
    FooterBar,
  },
};
</script>

<template>
  <div class="w-screen bg-[#121212]">
    <Navbar></Navbar>
    <Hero></Hero>
    <Products></Products>
    <Newsletter></Newsletter>
    <FooterBar></FooterBar>
  </div>
</template>
