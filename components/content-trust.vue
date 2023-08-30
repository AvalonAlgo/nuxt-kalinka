<script setup>
import VueTypewriterEffect from "vue-typewriter-effect";

const props = defineProps({
  elements: Array
});

const el = ref(null)
const isVisible = useElementVisibility(el)
</script>

<style scoped>
@keyframes flashWhiteGreen {
  50% { background-color: #48bb78; }
}

.flash-bg-green {
  animation: flashWhiteGreen 1s;
}
</style>

<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <VueTypewriterEffect class="typing sm:text-3xl text-2xl font-medium title-font mb-2 text-blue-500 italic" :strings="['Почему нам доверяют?']" />
        </div>
        <div class="flex flex-wrap -m-4">

          <div ref="el" v-for="e in props.elements" :key="e" class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
            
            <div :class="{'flash-bg-green': isVisible}" class="border border-gray-200 p-6 rounded-lg h-full">
              <p class="leading-relaxed text-lg">{{ e }}</p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  </div>
</template>