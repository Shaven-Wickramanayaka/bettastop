<script>
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";
import Hero from "../components/Hero.vue";
import Navbar from "../components/Navbar.vue";
import Newsletter from "../components/Newsletter.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    About,
    Newsletter,
    Footer,
  },
};
</script>

<template>
  <Navbar></Navbar>
  <Hero></Hero>
  <About></About>
  <Newsletter></Newsletter>
  <Footer></Footer>
</template>
