<script setup>
import VueTypewriterEffect from "vue-typewriter-effect";

const props = defineProps({
  elements: Array
});

const el = ref(null)
const isVisible = useElementVisibility(el)

const eltitle = ref(null)
const isVisibletitle = useElementVisibility(eltitle)

const text = 'Почему нам доверяют?';
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

const iconNumbers = [1, 2, 3, 7, 8, 9, 10, 13, 14, 16];
const basePath = "/icons/Untitled-";
const icons = iconNumbers.map(num => `${basePath}${num}.png`);

let unusedIcons = [...icons];  // Clone the icons array

const getRandomIcon = () => {
  if (unusedIcons.length === 0) {
    unusedIcons = [...icons];  // Reset if all icons have been used
  }

  const randomIndex = Math.floor(Math.random() * unusedIcons.length);
  const chosenIcon = unusedIcons[randomIndex];
  
  // Remove the chosen icon from the unusedIcons array
  unusedIcons = unusedIcons.filter(icon => icon !== chosenIcon);
  
  return chosenIcon;
};
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
          <h1 ref="eltitle" :class="{'typewriter': isVisibletitle}" class="sm:text-3xl text-2xl font-medium title-font mb-2 text-blue-500 italic">{{ animatedText }}</h1>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="(e, index) in props.elements" :key="e" class="flex flex-col items-center">
            
            <div class="border border-gray-200 p-6 rounded-lg flex-grow w-full">
              <p class="text-lg text-center">{{ e }}</p>
            </div>
        
            <NuxtImg v-if="index === 0" src="/icons/owl.png" class="w-16 h-16 mx-auto mt-4" />
            <NuxtImg v-if="index === 1" src="/icons/booksnapple.png" class="w-16 h-16 mx-auto mt-4" />
            <NuxtImg v-if="index === 2" src="/icons/bag.png" class="w-16 h-16 mx-auto mt-4" />
            <NuxtImg v-if="index === 3" src="/icons/tree.png" class="rounded-full w-16 h-16 mx-auto mt-4 transform scale-x-[-1]" />
            <NuxtImg v-if="index === 4" src="/icons/friends.png" class="w-16 h-16 mx-auto mt-4" />

          </div>
        </div>
        
        
      </div>
    </section>
  </div>
</template>