<!-- src/components/NewsList.vue -->
<template>
    <div class="q-pa-md">
      <q-card v-for="news in newsList" :key="news.id" class="q-mb-md">
        <NewsCard :news="news" />
      </q-card>
    </div>
  </template>
  
  <script>
  import NewsCard from './NewsCard.vue';
  
  export default {
    components: {
      NewsCard
    },
    data() {
      return {
        newsList: [
          {
            id: 1,
            title: 'Noticia Destacada 1',
            summary: 'Resumen de la noticia destacada 1...',
            image: 'https://via.placeholder.com/400x200'
          },
          {
            id: 2,
            title: 'Noticia Destacada 2',
            summary: 'Resumen de la noticia destacada 2...',
            image: 'https://via.placeholder.com/400x200'
          }
        ]
      };
    }
  };
  </script>
  