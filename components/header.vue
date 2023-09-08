<script setup>
const isOpen = ref(false)
</script>

<template>
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-row p-5 items-center justify-between">

      <NuxtLink to="/" class="w-3/5 object-cover my-auto rounded">
        <NuxtImg alt="hero" src="/kalinka-logo.jpg" />
      </NuxtLink>

      <UButton label="Open" @click="isOpen = true" color="red">
        Навигация
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </UButton>

      <USlideover v-model="isOpen" prevent-close class="opacity-95">
        <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                Калинка
              </h3>
              <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
            </div>
          </template>

          <div class="font-bold flex flex-col text-xl space-y-2 bg-gradient-to-br from-violet-500 to-red-500 bg-clip-text text-transparent">
            <NuxtLink to="/lesson" @click="isOpen = false" class="flex flex-row">
              Бесплатное занятие
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1 mt-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
            <a href="https://wa.me/905388895268" @click="isOpen = false" class="flex flex-row">
              Вопросы по Whatsapp
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1 mt-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <NuxtLink to="/#contact" @click="isOpen = false" class="flex flex-row">
              Связаться
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1 mt-2" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </NuxtLink>
          </div>

          <!-- <Placeholder class="h-full" /> -->
        </UCard>
      </USlideover>

    </div>
  </header>
</template>
