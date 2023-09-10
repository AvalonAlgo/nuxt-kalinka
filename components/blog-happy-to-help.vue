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

const colorsForElements = computed(() => props.elements.map(() => randomCheerfulColor()));

const eltitle = ref(null)
const isVisibletitle = useElementVisibility(eltitle)

const text = "Мы будем рады вам если...";
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
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <!-- <VueTypewriterEffect class="typing sm:text-3xl text-2xl font-medium title-font mb-2 text-blue-500 italic" :strings="['Мы с радостью Вам поможем, если...']" /> -->
          <h1 ref="eltitle" :class="{'typewriter': isVisibletitle}" class="sm:text-3xl text-2xl font-medium title-font mb-2 text-blue-500 italic">Мы будем рады вам если...</h1>
        </div>

        <div class="flex flex-wrap -m-4">
          <div v-for="(e, index) in props.elements" :key="e" class="p-4 lg:w-1/3 sm:w-full">
            <div :style="{backgroundColor: colorsForElements[index]}" 
                class="h-full bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden flex flex-col justify-center items-center text-center relative">
              <h1 class="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{{ e }}</h1>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>