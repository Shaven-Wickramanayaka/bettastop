<script>
import gsap from "gsap";
export default {
  methods: {
    lift(event) {
      gsap.to(event.currentTarget, {
        y: -10,
        duration: 0.3,
        ease: "power4.in",
      });
    },
    drop(event) {
      gsap.to(event.currentTarget, {
        y: 10,
        duration: 0.3,
        ease: "power4.out",
      });
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
        class="col-span-2 rounded-xl flex align-middle row-span-2 row-start-1 col-start-1 my-2 h-48 px-2 h-fill bg-cover bg-[url('/assets/betta1_598x399.webp')] bg-center hover:z-30 w-auto"
      >
        <span
          class="justify-center my-auto font-bold font-[Raleway] text-4xl p-3"
        >
          Fish
        </span>
      </div>
      <div
        @mouseenter="lift"
        @mouseleave="drop"
        class="col-span-2 rounded-xl flex row-span-2 row-start-2 col-start-2 my-2 h-48 px-2 h-fill bg-cover bg-[url('/assets/betta1_598x399.webp')] bg-center hover:z-30 w-auto"
      >
        <span
          class="justify-center my-auto font-bold font-[Raleway] text-4xl p-3"
        >
          Shrimp
        </span>
      </div>
      <div
        @mouseenter="lift"
        @mouseleave="drop"
        class="col-span-2 rounded-xl flex row-span-2 row-start-3 col-start-3 my-2 h-48 px-2 h-fill bg-cover bg-[url('/assets/betta1_598x399.webp')] bg-center bg-blend-multiply hover:z-30 w-auto"
      >
        <span
          class="justify-center my-auto font-bold font-[Raleway] text-4xl brightness-100 p-3"
        >
          Equipment
        </span>
      </div>
    </div>
  </section>
</template>
