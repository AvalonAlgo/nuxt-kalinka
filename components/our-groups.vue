<script setup>
const props = defineProps({
  elements: Array
});

const activeGroup = ref(0);

function setActive(e) {
  activeGroup.value = e;
}
</script>

<template>
  <div>
    <section class="text-gray-600 body-font lg:mb-20">
      <div class="container px-5 py-12 mx-auto flex flex-wrap flex-col">
        <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 italic">Наши группы...</h1>
        </div>

        <div class="flex flex-wrap mx-auto mb-16 justify-center sm:justify-start">
          <button @click="setActive(0)" :class="{'bg-gray-100 border-indigo-500 text-indigo-500' : activeGroup === 0}" class="px-6 py-3 w-full sm:w-auto justify-center border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>от 2х лет
          </button>
        
          <button @click="setActive(1)" :class="{'bg-gray-100 border-indigo-500 text-indigo-500' : activeGroup === 1}" class="px-6 py-3 w-full sm:w-auto justify-center border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>от 4х лет
          </button>
        
          <button @click="setActive(2)" :class="{'bg-gray-100 border-indigo-500 text-indigo-500' : activeGroup === 2}" class="px-6 py-3 w-full sm:w-auto mx-auto sm:mx-0 justify-center border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5 mr-3" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>от 5 до 12 лет
          </button>
        </div>        

        <div v-if="activeGroup === 0">
          <img class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          <div class="flex flex-col text-center w-full">
            <h1 class="text-xl font-medium title-font mb-2 text-gray-900">{{ props.elements[0][0] }}</h1>
            <h2 class="text-l font-medium title-font mb-4 text-gray-900">{{ props.elements[0][1] }}</h2>
            <!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> -->
            <ul class="text-left">
              <li class="border m-2 rounded p-2" v-for="i in props.elements[0][2]" :key="i">+ {{ i }}</li>
            </ul>
          </div>
        </div>

        <div v-else-if="activeGroup === 1">
          <img class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          <div class="flex flex-col text-center w-full">
            <h1 class="text-xl font-medium title-font mb-2 text-gray-900">{{ props.elements[1][0] }}</h1>
            <h2 class="text-l font-medium title-font mb-4 text-gray-900">{{ props.elements[1][1] }}</h2>
            <!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> -->
            <ul class="text-left">
              <li class="border m-2 rounded p-2" v-for="i in props.elements[1][2]" :key="i">+ {{ i }}</li>
            </ul>
          </div>
        </div>

        <div v-else-if="activeGroup === 2">
          <img class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          <div class="flex flex-col text-center w-full">
            <h1 class="text-xl font-medium title-font mb-2 text-gray-900">{{ props.elements[2][0] }}</h1>
            <h2 class="text-l font-medium title-font mb-4 text-gray-900">{{ props.elements[2][1] }}</h2>
            <!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> -->
            <ul class="text-left">
              <li class="border m-2 rounded p-2" v-for="i in props.elements[2][2]" :key="i">+ {{ i }}</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>