<script setup>
const el = ref(null)
const isVisible = useElementVisibility(el)
</script>

<style scoped>
@keyframes flashWhiteIndigo {
  50% { background-color: white; }
}

@keyframes flashWhiteGreen {
  50% { background-color: white; }
}

.flash-bg-indigo {
  animation: flashWhiteIndigo 1s;
}

.flash-bg-green {
  animation: flashWhiteGreen 1s;
}
</style>

<template>
  <div>
    <div ref="el" class="flex justify-center px-5 py-12">
      <NuxtLink to="/lesson" :class="{ 'flash-bg-indigo': isVisible }" class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Записаться на бесплатное занятие</NuxtLink>
      <a href="https://wa.me/905388895268" :class="{ 'flash-bg-green': isVisible }" class="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Задать вопросы по Whatsapp</a>
    </div>
  </div>
</template>