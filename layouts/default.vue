<style scoped>
 .bg_image {
  background-image: url('/webbckgrnd.jpg');
 }
</style>

<template>
  <div class="bg_image">
    <Header />
    <slot />
    <!-- <Footer /> -->
    <!-- <a href="https://www.google.com" class="rounded-lg fixed bottom-0 right-0 mb-4 mr-4 p-3 bg-gray-100 border border-gray-300 shadow-lg z-50">
      <NuxtImg 
        height="36" 
        src="/icons/new-Instagram-logo-png-full-colour-glyph.png"
        class="rounded-lg fixed bottom-0 right-0 mb-4 mr-4 p-3 bg-gray-100 border border-gray-300 shadow-lg z-50"
      />
    </a> -->
  </div>
</template>