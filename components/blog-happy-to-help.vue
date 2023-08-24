<script setup>
const props = defineProps({
  elements: Array
})
</script>

<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Мы с радостью Вам поможем, если...</h1>
          <!-- <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p> -->
        </div>
        <div class="flex flex-wrap -m-4">

          <div v-for="e in props.elements" :key="e" class="p-4 lg:w-1/3 sm:w-full">
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{{ e }}</h1>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>