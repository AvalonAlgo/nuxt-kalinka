<style scoped>
.bg_image {
  background-image: url("/webbckgrnd.jpg");
}
</style>

<template>
  <div class="bg_image">
    <div class="flex flex-col min-h-screen">
      <Header />
      <slot />
    </div>
    <a
      href=""
      target="_blank"
      class="fixed bottom-5 right-5 z-50 h-12 w-12 transform hover:scale-150 transition-transform duration-200"
    >
      <img
        class="h-full w-full object-contain"
        src="https://static-00.iconduck.com/assets.00/whatsapp-icon-2040x2048-8b5th74o.png"
        alt="WhatsApp"
      />
    </a>
    <a
      href=""
      target="_blank"
      class="fixed bottom-24 right-5 z-50 h-12 w-12 transform hover:scale-150 transition-transform duration-200"
    >
      <img
        class="h-full w-full object-contain"
        src="https://static-00.iconduck.com/assets.00/instagram-icon-2048x2048-77ljf1sd.png"
        alt="Instagram"
      />
    </a>
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
