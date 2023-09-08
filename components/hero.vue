<script setup>
import { TresCanvas } from '@tresjs/core';
import { OrbitControls, GLTFModel } from '@tresjs/cientos';

</script>

<template>
  <div>
    <section class="body-font">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
  
        <!-- Image Wrapper -->
        <div class="relative">
          <!-- Your Image -->
          <NuxtImg class="object-cover object-center rounded" alt="hero" src="/zapisatsa.jpg" />
        
          <!-- Transparent Overlay with flex utilities -->
          <div class="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
            <h1 class="text-center text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-500 to-red-500 bg-clip-text text-transparent opacity-100">Добро пожаловать в игровую группу "Калинка"!</h1>
          </div>
        </div>
  
        <div class="text-center lg:w-2/3 w-full mt-10 -mb-20">
          <h1 class="bg-gradient-to-r from-indigo-500 to-red-500 bg-clip-text text-transparent title-font font-semibold leading-relaxed text-xl sm:text-2xl italic">Обучаем детей русскому языку, истории и культуре и помогаем разговорить детей на русском языке</h1>
        </div>
      </div>
    </section>
  </div>  
</template>