<script setup>
const eltitle = ref(null)
const isVisibletitle = useElementVisibility(eltitle)

const text = 'Наш фотоальбом...';
const animatedText = ref('');
let index = 0;

const typeWriter = () => {
  if (index < text.length) {
    animatedText.value += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); // Adjust the typing speed by changing the timeout duration
  }
};

watchEffect(() => {
  typeWriter();
});

const images = [];
for (let i = 1; i <= 31; i++) {
  images.push(`/album/${i}.jpg`);
}

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

const imageRef = ref('/andrey.jpg');
const isOpen = ref(false);

function openModal(url) {
  imageRef = url;
  isOpenModal = true;
}
</script>

<style scoped>
.typewriter {
  display: inline-block;
  overflow: hidden;
  border-right: .15em solid black;  /* Add a typewriter blinking cursor */
  white-space: nowrap;               /* Keep everything on the same line */
  animation: typing 3.5s steps(40, end), blink 1.5s step-end infinite; /* Adjusted blink duration to 1.5s */
}

/* Animation for the typewriter effect and blinking cursor */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink {
  from, to { border-color: transparent }
  50% { border-color: black }
}
</style>

<template>
  <div>
    <section class="text-gray-600 body-font lg:mb-20 sm:-mt-32">
      <div class="container mb-32 sm:mb-0 mx-auto flex flex-wrap flex-col">

        <div class="flex flex-wrap w-full flex-col items-center text-center ">
          <h1 ref="eltitle" :class="{'typewriter': isVisibletitle}" class="sm:text-3xl text-2xl font-medium title-font -mt-10 my-10 sm:-mt-26 sm:my-0 text-blue-500 italic">Наш фотоальбом...</h1>
        </div>

        <el-carousel v-show="shouldShowSmallCarousel" indicator-position="none" :interval="2000" type="card" height="200px" class="w-full h-full mt-4 -mb-20">
          <el-carousel-item v-for="item in images" :key="item" class="w-full h-full">
            <NuxtImg @click="isOpen = true" :src="item" class="w-full rounded-lg" alt="" />
          </el-carousel-item>
        </el-carousel>

        <el-carousel v-show="shouldShowLargeCarousel" indicator-position="none" :interval="2000" type="card" height="500px" class="w-full h-full mt-20">
          <el-carousel-item v-for="item in images" :key="item" class="w-full h-full">
            <NuxtImg @click="isOpen = true" :src="item" class="h-full w-full rounded-lg" alt="" />
          </el-carousel-item>
        </el-carousel>

      </div>
    </section>

    <UModal v-model="isOpen">
      <UCard :ui="{ divide: 'divide-y divide-gray-100', background: 'bg-white'}">

        <NuxtImg src="/andrey.jpg" class="rounded-lg mx-auto m-4 border border-gray-200 p-2" />

      </UCard>
    </UModal>

  </div>
</template>