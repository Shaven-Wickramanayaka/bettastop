<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const images = [
  [
    "/src/assets/Home/chiclid.webp",
    "/src/assets/Home/danio.webp",
    "/src/assets/Home/oscar.webp",
  ],
  [
    "/src/assets/Home/betta1.webp",
    "/src/assets/Home/betta2.webp",
    "/src/assets/Home/betta3.webp",
  ],
  [
    "/src/assets/Home/malawi.webp",
    "/src/assets/Home/ram.webp",
    "/src/assets/Home/discus.webp",
  ],
];

const ribbonRefs = ref([]);

onMounted(() => {
  ribbonRefs.value.forEach((ribbon) => {
    const track = ribbon.querySelector(".ribbon-track");
    const trackHeight = track.scrollHeight / 2;
    gsap.to(track, {
      y: -trackHeight,
      duration: 10 + gsap.utils.random(1, 5) * 7,
      ease: "none",
      repeat: -1,
    });
  });
});
</script>

<template>
  <section class="flex gap-7 justify-center w-full overflow-hidden h-screen">
    <h1
      class="absolute top-1/2 left-1/2 transform font-[Pacifico] -translate-x-1/2 -translate-y-1/2 z-10 mix-blend-difference text-white font-extrabold text-balancemd:text-9xl"
    >
      BettaStop
    </h1>
    <div
      v-for="(imgs, index) in images"
      :key="index"
      class="ribbon"
      :ref="(el) => (ribbonRefs[index] = el)"
    >
      <div class="ribbon-track flex flex-col">
        <img
          v-for="(img, i) in [...imgs, ...imgs]"
          :key="i"
          :src="img"
          class="w-full object-cover h-90 py-3"
        />
      </div>
    </div>
  </section>
</template>
