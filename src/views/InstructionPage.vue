<script setup lang="ts">
import TrashBins from '@/components/TrashBins.vue';

</script>

<template>
    <div class="bg-about-photo bg-cover bg-center h-screen flex flex-col justify-center items-center gap-32">

        <div class="text-center text-white font-medium text-3xl">
            <p>Container colors and what to dispose of in them</p>
            <p>Click on a container to learn more.</p>
        </div>

        <TrashBins />


    </div>
</template>