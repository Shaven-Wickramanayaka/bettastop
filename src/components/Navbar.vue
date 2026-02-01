<script>
import gsap from "gsap";
export default {
  methods: {
    enlarge(event) {
      gsap.to(event.currentTarget, {
        scale: 1.3,
        duration: 0.2,
        ease: "back.in",
      });
    },
    delarge(event) {
      gsap.to(event.currentTarget, {
        scale: 1,
        duration: 0.2,
        ease: "back.out",
      });
    },
  },
};
</script>
<template>
  <nav
    class="fixed inset-x-0 top-0 mx-auto w-full max-w-5xl z-40 backdrop-blur-sm border border-gray-200 rounded-lg py-3 shadow md:top-6 md:rounded-xl lg:max-w-5xl"
  >
    <div class="flex">
      <div class="flex-1 px-3 font-[Pacifico]">
        <router-link
          @mouseenter="enlarge"
          @mouseleave="delarge"
          class="inline-block"
          to="/"
          >BettaStop</router-link
        >
      </div>
      <div class="grow px-2 text-center">
        <!-- Is delarge a word? -->
        <router-link
          @mouseenter="enlarge"
          @mouseleave="delarge"
          class="inline-block px-2 text-white decoration-0 font-[Pacifico]"
          to="/shop"
          >Fish</router-link
        >
        <router-link
          @mouseenter="enlarge"
          @mouseleave="delarge"
          class="inline-block px-2 text-white decoration-0 font-[Pacifico]"
          to="/shop"
          >Shrimp</router-link
        >
        <router-link
          @mouseenter="enlarge"
          @mouseleave="delarge"
          class="inline-block px-2 text-white decoration-0 font-[Pacifico]"
          to="/shop"
          >Equipment</router-link
        >
      </div>
      <div class="flex-1 px-3 text-end">
        <a href="">
          <font-awesome-icon
            @mouseenter="enlarge"
            @mouseleave="delarge"
            icon="cart-shopping"
        /></a>
      </div>
    </div>
  </nav>
</template>
