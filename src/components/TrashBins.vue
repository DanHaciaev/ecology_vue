<script>
export default {
  data() {
    return {
      bins: [
        { color: 'Red', image: '/bins/red.webp' },
        { color: 'Yellow', image: '/bins/yellow.webp' },
        { color: 'Green', image: '/bins/green.webp' },
        { color: 'Blue', image: '/bins/blue.webp' },
        { color: 'Black', image: '/bins/black.webp' },
      ],
    };
  },
};
</script>

<template>
    <div class="flex w-4/5 gap-4">
        <router-link
        v-for="bin in bins"
        :key="bin.color"
        :to="{ name: 'BinDetails', params: { color: bin.color.toLowerCase() } }"
        class="flex flex-col items-center cursor-pointer"
      >
        <img :src="bin.image" :alt="bin.color" class="" />
      </router-link>
    </div>
</template>
