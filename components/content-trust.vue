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
        <div class="flex flex-wrap -m-4">

          <div ref="el" v-for="e in props.elements" :key="e" class="xl:w-1/3 md:w-1/2 sm:w-full p-4">
            
            <div class="border border-gray-200 p-6 rounded-lg h-full">
              <p class="leading-relaxed text-lg">{{ e }}</p>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  </div>
</template>