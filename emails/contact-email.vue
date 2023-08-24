<script setup lang="ts">
defineProps<{
  name: String,
  email: String,
  message: String,
}>();
</script>


<template>
  <e-tailwind>
    <e-head></e-head>
    <e-html lang="en">
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <!-- <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{{ contacterName }}</h1> -->
          
          <p class="leading-relaxed mb-3">Имя: {{ name }}</p>
          <p class="leading-relaxed mb-3">Электронная почта: {{ email }}</p>
          <p class="leading-relaxed mb-3">Сообщения: {{ message }}</p>

          <!-- <a class="text-indigo-500 inline-flex items-center">{{ contacterEmail }}</a> -->
        </div>
      </div>
    </e-html>
  </e-tailwind>
</template>