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
            <h1 style="font-family: Amatic SC" class="text-center text-3xl sm:text-4xl font-bold text-white">Добро пожаловать в игровую группу "Калинка"!</h1>
            <UButton color="yellow" @click="navigateTo('/lesson')" class="text-l sm:text-xl opacity-75 hover:opacity-100" label="Записаться" />
          </div>
        </div>
      </div>
    </section>
  </div>  
</template>