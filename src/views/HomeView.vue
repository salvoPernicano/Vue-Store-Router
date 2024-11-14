<script setup>
import newsServices from '@/services/newsServices';
import NewsCard from '@/components/NewsCard.vue';
import { onMounted,ref, watchEffect } from 'vue';

const homeNews = ref(null);
onMounted(() => {
   watchEffect(()=> {
     homeNews.value = null;
     newsServices.getNews()
     .then((response) => {
       console.log(response.data)
       homeNews.value = response.data.articles
     })
     .catch((error) => {
       console.log(error)
     });
   })
 })
</script>

<template>
  <main class="text-center">
    <h1 class=" text-gray-600 italic text-4xl font-extrabold mt-4">FLASH NEWS</h1>
    <section class="flex flex-wrap gap-6 justify-center items-center max-w-7xl min-h-fit m-auto mt-8">
      <NewsCard v-if="homeNews" v-for="(item, index) in homeNews" 
      :key="index"
      :image="item.image"
      :content="item.content"
      :description="item.description"/>
    </section>
  </main>
</template>
