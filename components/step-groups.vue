<script setup>
const props = defineProps({
  elements: Array
})

// List of cheerful colors that children might find appealing
const cheerfulColors = [
  '#FFC3A0', // peach
  '#FFD700', // gold
  '#32CD32', // lime green
  '#00CED1', // turquoise blue
  '#FF6B6B', // pink red
  '#A463F2'  // bright purple
];

// Method to get a random cheerful color
const randomCheerfulColor = () => {
  const randomIndex = Math.floor(Math.random() * cheerfulColors.length);
  const chosenColor = cheerfulColors[randomIndex];
  cheerfulColors.splice(randomIndex, 1);  // remove the color from the array
  return chosenColor;
};
</script>

<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-12 mx-auto flex flex-wrap">
      <div class="flex flex-wrap w-full">
        <div class="lg:w-3/5 sm:w-full md:pr-10 md:py-6 mx-auto">

          <div v-for="e in props.elements.slice(0, -1)" :key="e" class="flex relative pb-12">
            <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div :style="{backgroundColor: randomCheerfulColor()}" class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <p class="leading-relaxed text-lg">{{ e }}</p>
            </div>
          </div>

          <div class="flex relative">
            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
            </div>
            <div class="flex-grow pl-4">
              <p class="leading-relaxed text-lg">{{ props.elements.slice(-1)[0] }}</p>
            </div>
          </div>

        </div>
        <!-- <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step"> -->
      </div>
    </div>
  </section>  
</template>