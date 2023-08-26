<script setup>
// import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const screenWidth = ref(0);
const isMobile = computed(() => screenWidth.value < 768);

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  screenWidth.value = window.innerWidth;
  window.addEventListener('resize', updateScreenWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
</script>

<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-4 items-center justify-center">
      <nav 
        :class="{
          'flex-col space-y-4 items-center': isMobile,
          'flex-row justify-evenly': !isMobile
        }"
        class="flex items-center text-base w-full"
      >

        <!-- Бесплатное занятие Link -->
        <NuxtLink 
          to="/lesson" 
          class="rounded-lg text-gray-900 bg-blue-200 hover:text-black hover:bg-indigo-400 px-4 py-2"
          :class="isMobile ? 'w-full text-center' : ''"
        >
          Бесплатное занятие
        </NuxtLink>
        
        <!-- Вопросы по Whatsapp Link -->
        <a 
          href="https://wa.me/905388895268" 
          class="rounded-lg text-gray-900 bg-blue-200 hover:text-black hover:bg-green-400 px-4 py-2"
          :class="isMobile ? 'w-full text-center' : ''"
        >
          Вопросы по Whatsapp
        </a>
        
        <!-- Связаться Link -->
        <NuxtLink 
          to="/#contact" 
          class="rounded-lg text-gray-900 bg-blue-200 hover:text-black hover:bg-yellow-400 px-4 py-2"
          :class="isMobile ? 'w-full text-center' : ''"
        >
          Связаться
        </NuxtLink>
        
      </nav>
    </div>
  </header>
</template>