<script>
import Hero from "../components/Hero.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
  },
};
</script>

<template>
  <Navbar></Navbar>
  <Hero></Hero>
</template>
