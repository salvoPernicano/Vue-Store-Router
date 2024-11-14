<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    type: Object,
    required: true,
    image: String,
    content: String,
    description: String
});
</script>

<template>
    <div class="w-56 h-80 bg-white rounded-lg shadow-lg overflow-hidden ring-1 ring-gray-300 hover:shadow-2xl transition-shadow duration-300 hover:cursor-pointer">
        <figure class="h-36 w-full">
            <img class="h-full w-full object-cover" :src="image" alt="Card image">
        </figure>
        <div class="p-4 flex flex-col justify-between">
            <h1 class="font-bold text-blue-600 text-lg line-clamp-2">{{ content }}</h1>
            <p class="line-clamp-3 text-sm text-gray-600 mt-2">{{ description }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
