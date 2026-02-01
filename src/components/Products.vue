<script>
import gsap from "gsap";
export default {
  methods: {
    lift(event) {
      gsap.to(event.currentTarget, { y: -20, duration: 0.5 });
    },
    drop(event) {
      gsap.to(event.currentTarget, { y: 20, duration: 0.5 });
    },
  },
};
</script>
<template>
  <section class="flex flex-col h-auto w-full p-15">
    <div class="grid grid-cols-4 grid-rows-5 h-90">
      <div
        @mouseenter="lift"
        @mouseleave="drop"
        class="col-span-2 rounded-xl transition duration-500 ease-in-out row-span-2 row-start-1 col-start-1 my-2 h-48 px-2 h-fill bg-linear-to-r from-cyan-500 to-red-500 hover:z-20 w-auto"
      ></div>
      <div
        @mouseenter="lift"
        @mouseleave="drop"
        class="col-span-2 rounded-xl transition duration-500 ease-in-out row-span-2 row-start-2 col-start-2 my-2 h-48 px-2 h-fill bg-linear-to-r from-cyan-500 to-red-500 hover:z-20 w-auto"
      ></div>
      <div
        @mouseenter="lift"
        @mouseleave="drop"
        class="col-span-2 rounded-xl transition duration-500 ease-in-out row-span-2 row-start-3 col-start-3 my-2 h-48 px-2 h-fill bg-linear-to-r from-cyan-500 to-red-500 hover:z-20 w-auto"
      ></div>
    </div>
  </section>
</template>
