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
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Почему нам доверяют?</h1>
          <!-- <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p> -->
        </div>
        <div class="flex flex-wrap -m-4">

          <div v-for="e in props.elements" :key="e" class="xl:w-1/3 md:w-1/2 p-4">
            <div class="border border-gray-200 p-6 rounded-lg h-full">
              <!-- <h2 class="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2> -->
              <p class="leading-relaxed text-base">{{ e }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>