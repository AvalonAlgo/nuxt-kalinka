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
  </div>
</template>