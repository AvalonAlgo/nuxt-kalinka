<script setup lang="ts">
defineProps<{
  childName: String,
  parentName: String,
  residence: String,
  childAge: String,
  childGender: String,
  parentEmail: String,
  parentPhone: String,
  languageLevel: String,
  expectations: String
}>();
</script>


<template>
  <e-tailwind>
    <e-head></e-head>
    <e-html lang="en">
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
          <!-- <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{{ contacterName }}</h1> -->
          
          <p class="leading-relaxed mb-3">Имя ребенка: {{ childName }}</p>
          <p class="leading-relaxed mb-3">Имя родителя: {{ parentName }}</p>
          <p class="leading-relaxed mb-3">Район проживания: {{ residence }}</p>
          <p class="leading-relaxed mb-3">Возраст ребенка: {{ childAge }}</p>
          <p class="leading-relaxed mb-3">Пол ребенка: {{ childGender }}</p>
          <p class="leading-relaxed mb-3">Почта родителя: {{ parentEmail }}</p>
          <p class="leading-relaxed mb-3">Номер родителя: {{ parentPhone }}</p>
          <p class="leading-relaxed mb-3">Уровень языка: {{ languageLevel }}</p>
          <p class="leading-relaxed mb-3">Ожидания: {{ expectations }}</p>

          <!-- <a class="text-indigo-500 inline-flex items-center">{{ contacterEmail }}</a> -->
        </div>
      </div>
    </e-html>
  </e-tailwind>
</template>