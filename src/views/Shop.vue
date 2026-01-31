<template>
  <Navbar></Navbar>
  <Filters></Filters>
</template>
<script>
import Filters from "../components/Filters.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Fish",
  components: { Navbar, Filters },
};
</script>
