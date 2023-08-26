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
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 italic">Мы с радостью Вам поможем, если...</h1>
          <!-- <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p> -->
        </div>
        <div class="flex flex-wrap -m-4">

          <div v-for="e in props.elements" :key="e" class="p-4 lg:w-1/3 sm:w-full">
            <div :style="{backgroundColor: randomCheerfulColor()}" class="h-full bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden flex flex-col justify-center items-center text-center relative">
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{{ e }}</h1>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>