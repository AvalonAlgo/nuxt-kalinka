<script setup>
import { TresCanvas } from '@tresjs/core';
import { OrbitControls, GLTFModel } from '@tresjs/cientos';
</script>

<template>
  <div>
    <section class="body-font">
      <div class="container mx-auto flex py-12 items-center justify-center flex-col">
  
        <!-- Image Wrapper -->
        <div class="relative">
          <!-- Your Image -->
          <NuxtImg class="object-cover object-center" alt="hero" src="/zapisatsa.jpg" />
          
          <!-- Transparent Overlay with flex utilities -->
          <div class="absolute inset-0 flex flex-col space-y-6 sm:space-y-10 items-center justify-center">
            <h1 class="text-center text-2xl sm:text-3xl font-bold text-white">Добро пожаловать в игровую группу "Калинка"!</h1>
            <UButton @click="navigateTo('/lesson')" class="text-xl sm:text-2xl bg-gradient-to-r from-indigo-500 to-red-500 opacity-75 hover:opacity-100" label="Записаться" />
          </div>
        </div>
      </div>
    </section>
  </div>  
</template>