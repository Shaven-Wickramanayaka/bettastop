<script>
import gsap from "gsap";
export default {
  methods: {
    buttonActive() {
      gsap;
    },
  },
};
</script>
<template>
  <section class="flex justify-center align-middle p-10 w-full">
    <div class="flex h-38 lg:w-3xl sm:w-50 bg-[#3a3a3a] rounded-2xl p-4">
      <img src="/src/assets/Home/suprised.jpg" alt="" class="flex-1" />
      <p class="text-xsm flex-4 p-3 font-[Raleway]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati optio
        quia pariatur. Sit a maxime nemo. Id veritatis excepturi hic distinctio
        expedita explicabo iste eum, quae illo, quos non a?
      </p>
      <div class="items-center flex">
        <button
          @mouseenter="buttonActive"
          class="bg-gray-950 flex-1 font-[Pacifico] p-3 rounded-2xl"
        >
          Join Our Socials
        </button>
      </div>
    </div>
  </section>
</template>
