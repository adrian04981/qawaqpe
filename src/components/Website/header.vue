<template> 
  <div class="container">
    <div class="left-div">
      <img src="@/assets/logo-qawaq.png" alt="Logo" class="responsive-img" />
    </div>
    <div class="right-div">
      <swiper
        :slidesPerView="'auto'"
        :centeredSlides="false"
        :spaceBetween="10"
        :freeMode="true"
        :pagination="false"
        :loop="false"
        class="mySwiper"
      >
        <!-- Iteramos sobre las URLs de las imágenes y las mostramos en los swiper-slides -->
        <swiper-slide v-for="(imgUrl, index) in imageUrls" :key="index" class="carousel-slide">
          <img :src="imgUrl" alt="Imagen del carrusel" class="carousel-img" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getStorage, ref as storageRef, listAll, getDownloadURL } from 'firebase/storage';
import { storage } from '@/Firebase/Firebase.js';  // Ruta correcta a tu archivo Firebase.js
import { Swiper, SwiperSlide } from 'swiper/vue';  // Asegúrate de tener Swiper instalado
import 'swiper/swiper-bundle.css';  // Estilos de Swiper

const imageUrls = ref([]);  // Aquí almacenaremos las URLs de las imágenes

const fetchImages = async () => {
  try {
    const storageReference = storageRef(storage, 'Carrusel/');
    const { items } = await listAll(storageReference);

    // Utilizamos Promise.allSettled para manejar los casos en los que una imagen falle al cargar
    const urlResults = await Promise.allSettled(items.map(itemRef => getDownloadURL(itemRef)));
    
    // Filtramos solo las URLs que se resolvieron correctamente
    imageUrls.value = urlResults
      .filter(result => result.status === 'fulfilled')
      .map(result => result.value);
  } catch (error) {
    console.error("Error al obtener las imágenes:", error);
  }
};

onMounted(fetchImages);  // Llamamos directamente a la función en el mounted hook
</script>

<style scoped>
.container {
  display: flex;
}

.left-div {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
}

.right-div {
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
}

.responsive-img {
  max-width: 200%;
  height: 100%;
  object-fit: cover;  /* Ajustamos la imagen sin distorsionarla */
}

.carousel-img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;  /* Hacemos que las imágenes sean responsivas y se ajusten al carrusel */
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.carousel-slide {
  width: 200px;
  height: 200px;
}

.mySwiper {
  width: 100%;
  height: 200px;
}
</style>
