<script setup>
import { ref, onMounted } from "vue";
const source = ref([]);

onMounted(() => {
  const inventory = [
    {
      item: "Betta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excep",
      link: "https://placehold.co/400",
    },
    {
      item: "Betta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excep",
      link: "https://placehold.co/400",
    },
    {
      item: "Betta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excep",
      link: "https://placehold.co/400",
    },
    {
      item: "Betta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excep",
      link: "https://placehold.co/400",
    },
    {
      item: "Betta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excep",
      link: "https://placehold.co/400",
    },
    {
      item: "Betta",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excep",
      link: "https://placehold.co/400",
    },
  ];
  source.value = inventory;
});
</script>
<template>
  <section
    class="grid h-fit grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 p-5"
  >
    <div v-for="(item, index) in source" :key="index" class="grid-item">
      <img
        v-bind:src="item.link"
        alt=""
        class="h-auto col-span-1 row-span-1 rounded-2xl"
      />
      <div class="p-3 mt-3">
        <h3 class="font-[Pacifico]">{{ item.item }}</h3>
        <p class="font-[Raleway]">{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>
