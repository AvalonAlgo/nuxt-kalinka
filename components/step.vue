<script setup>
const props = defineProps({
  elements: Array,
  lastElement: String
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

const images = ref([
  '/1.jpg',
  '/2.jpg',
  '/4.jpg',
  '/6.jpg',
  '/7.jpg',
  '/8.jpg',
  'andrey.jpg'
]);

const screenSize = ref('')

onMounted(() => {
  const updateScreenSize = () => {
    if (window.innerWidth < 640) {
      screenSize.value = 'xs' // Smaller than TailwindCSS's sm breakpoint
    } else if (window.innerWidth < 768) {
      screenSize.value = 'sm'
    } else if (window.innerWidth < 1024) {
      screenSize.value = 'md'
    } else if (window.innerWidth < 1280) {
      screenSize.value = 'lg'
    } else {
      screenSize.value = 'xl'
    }
  }

  window.addEventListener('resize', updateScreenSize)
  updateScreenSize()

  onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize)
  })
})

const shouldShowSmallCarousel = computed(() => {
  return screenSize.value === 'xs' || screenSize.value === 'sm';
})

const shouldShowLargeCarousel = computed(() => {
  return screenSize.value === 'md' || screenSize.value === 'lg' || screenSize.value === 'xl';
})
</script>

<template>
  
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto flex flex-wrap">

        <div class="flex flex-col sm:flex-row flex-wrap w-full">

          <div class="w-full sm:w-1/2 md:pr-10 md:py-6">

            <!-- One body element -->
            <div v-for="e in props.elements" :key="e" class="flex relative pb-12">
              <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div :style="{backgroundColor: randomCheerfulColor()}" class="flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <p class="leading-relaxed text-lg">{{ e }}</p>
              </div>
            </div>

            <!-- Final element -->
            <div class="flex relative">
              <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
              </div>
              <div class="flex-grow pl-4">
                <p class="leading-relaxed text-lg">{{ props.lastElement }}</p>
              </div>
            </div>

          </div>

          <div class="w-full sm:w-1/2 text-center mt-10 sm:my-auto">
            <h1 class="bg-gradient-to-r from-indigo-500 to-red-500 bg-clip-text text-transparent title-font font-semibold leading-relaxed text-2xl sm:text-3xl italic">Обучаем детей русскому языку, истории и культуре и помогаем разговорить детей на русском языке</h1>
          </div>

        </div>

        <el-carousel v-show="shouldShowSmallCarousel" indicator-position="none" :interval="4000" height="270px" class="w-full h-full mt-20">
          <el-carousel-item v-for="item in images" :key="item" class="w-full h-full">
            <NuxtImg :src="item" class="h-full w-full rounded-lg" alt="" />
          </el-carousel-item>
        </el-carousel>

        <el-carousel v-show="shouldShowLargeCarousel" indicator-position="none" :interval="4000" type="card" height="500px" class="w-full h-full mt-20">
          <el-carousel-item v-for="item in images" :key="item" class="w-full h-full">
            <NuxtImg :src="item" class="h-full w-full rounded-lg" alt="" />
          </el-carousel-item>
        </el-carousel>

      </div>
    </section>    
  </div>
</template>