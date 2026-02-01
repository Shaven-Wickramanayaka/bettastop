<script>
import Filters from "../components/Filters.vue";
import Navbar from "../components/Navbar.vue";
import ProductGrid from "../components/ProductGrid.vue";

export default {
  name: "Shop",
  components: { Navbar, Filters, ProductGrid },
};
</script>
<template>
  <div class="bg-[#121212] h-fit w-screen">
    <div class="pt-30"></div>
    <Navbar></Navbar>
    <Filters></Filters>
    <ProductGrid></ProductGrid>
  </div>
</template>
