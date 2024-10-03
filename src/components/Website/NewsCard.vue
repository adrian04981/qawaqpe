<!-- src/components/NewsCard.vue -->
<template>
    <q-card class="my-4">
      <q-img :src="news.image" alt="Noticia" class="rounded-borders" />
  
      <q-card-section>
        <div class="text-h6">{{ news.title }}</div>
        <q-separator />
        <p>{{ news.summary }}</p>
      </q-card-section>
  
      <q-card-actions align="right">
        <q-btn flat color="primary" label="Leer más" />
      </q-card-actions>
    </q-card>
  </template>
  
  <script>
  export default {
    props: {
      news: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  