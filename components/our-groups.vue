<script setup>
const props = defineProps({
  elements: Array
});

const group = ref(null)
const isOpen = ref(false)

const eltitle = ref(null)
const isVisibletitle = useElementVisibility(eltitle)

const text = 'Мы с радостью Вам поможем, если...';
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

const groups = [
  ["/malishi.jpg", 1, 'Малыши (2-3 года)', 'Вторник, пятница', '9.00-10.00'],
  ["/solnishko.jpg", 2, 'Солнышко (3-4 года)', 'Вторник, пятница', '10.30-12.00'],
  ["/bukvaryata1.jpg", 3, 'Букварята (5-6 лет)', 'Суббота', '9.00-11.00'],
  ["/znayki.jpg", 4, 'Знайки (6-7 лет)', 'Суббота', '14.00-16.00'],
  ["/chitayki.jpg", 5, 'Читайки (7-8 лет)', 'Суббота', '11.30-13.30'],
  ["/fantazeri.jpg", 6, 'Фантазёры (8-9 лет)', 'Суббота', '16.30-18.30'],
  ["/volshebniki.jpg", 7, 'Волшебники (9-11)', 'Пятница', '17.00-19.00'],
  ["/knigomani.jpg", 8, 'Книгоманы (11+)', 'Среда', '17.30-19.30']
];

// List of cheerful colors that children might find appealing
const cheerfulColors = [
  '#FFC3A0', // peach
  '#FFD700', // gold
  '#32CD32', // lime green
  '#00CED1', // turquoise blue
  '#FF6B6B', // pink red
  '#A463F2', // bright purple
  '#FFA07A', // light salmon
  '#20B2AA', // light sea green
  '#FF4500'  // orange red
];

// Method to get a random cheerful color
const randomCheerfulColor = () => {
  const randomIndex = Math.floor(Math.random() * cheerfulColors.length);
  const chosenColor = cheerfulColors[randomIndex];
  // cheerfulColors.splice(randomIndex, 1);
  return chosenColor;
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
    <section class="text-gray-600 body-font lg:mb-20 -mt-10 sm:-mt-0">
      <div class="container px-5 py-12 mb-32 sm:mb-0 mx-auto flex flex-wrap flex-col">
`
        <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 ref="eltitle" :class="{'typewriter': isVisibletitle}" class="sm:text-3xl text-2xl font-medium title-font mb-2 text-blue-500 italic">Наши группы...</h1>
        </div>

        <div class="flex flex-wrap flex-col mx-auto w-full justify-center sm:justify-start space-y-4">

          <div class="-mb-48 sm:mb-0 grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 gap-4">
            
            <GroupCard v-for="data in groups" :key="data" :image="data[0]" :group="data[1]" :name="data[2]" @handleClick="(n) => group = n" @click="isOpen = true" />

          </div>

          <UModal v-if="group === 1" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800'}">
              
              <template #header>
                <div class="flex items-center justify-between">
                  <h1 class="text-xl font-bold">Малыши (2-3 года)</h1>
                  <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />  
                </div>
              </template>

              <h2 class="text-lg text-center">
                Вторник, пятница
                <br /> 9.00-10.00
              </h2>

              <NuxtImg src="/malishi.jpg" class="rounded-lg mx-auto m-4 border border-gray-200 p-2" />

              <h2 class="text-lg text-center my-4">
                Эта группа подойдёт вам, если...
              </h2>

              <ul class="space-y-2 font-semibold">

                <li class="border rounded-lg p-2 flex flex-row">
                  <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  Ваш малыш еще не ходит в садик, но Вы хотите, чтобы он развивался и узнавал новое в коллективе, учился взаимодействовать со сверстниками
                </li>

                <li class="border rounded-lg p-2 flex flex-row">
                  <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  Вам сложно  организовать игровые занятия дома, не хватает времени
                </li>

                <li class="border rounded-lg p-2 flex flex-row">
                  <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  Вы хотите найти друзей Вашему малышу, с которыми бы он общался на русском языке
                </li>

                <li class="border rounded-lg p-2 flex flex-row">
                  <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    </div>
                    Вы хотите разговорить ребенка, но самостоятельно не получается
                </li>

                <li class="border rounded-lg p-2 flex flex-row">
                  <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  Вы хотите , чтобы ребенок участвовал в утренниках как в Вашем детстве
                </li>

              </ul>

            </UCard>
          </UModal>

          <UModal v-if="group === 2" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                <div class="flex items-center justify-between">
                  <h1 class="text-xl font-bold">Солнышко (3-4 года)</h1>
                  <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />  
                </div>
              </template>

              <h2 class="text-lg text-center">
                Вторник, пятница
                <br /> 10.30-12.00
              </h2>
              
              <NuxtImg src="/solnishko.jpg" class="rounded-lg mx-auto m-4 border border-gray-200 p-2" />

              <h2 class="text-lg text-center my-4">
                Эта группа подойдёт вам, если...
              </h2>

              <ul class="space-y-2 font-semibold">

                <li class="border rounded-lg p-2 flex flex-row">
                  <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  Ваш малыш еще не ходит в садик, но Вы хотите, чтобы он развивался и узнавал новое в коллективе, учился взаимодействовать со сверстниками
                </li>

                <li class="border rounded-lg p-2 flex flex-row">
                  <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  Вам сложно  организовать игровые занятия дома, не хватает времени
                </li>

                <li class="border rounded-lg p-2 flex flex-row">
                  <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  Вы хотите найти друзей Вашему малышу, с которыми бы он общался на русском языке
                </li>

                <li class="border rounded-lg p-2 flex flex-row">
                  <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    </div>
                    Вы хотите разговорить ребенка, но самостоятельно не получается
                </li>

                <li class="border rounded-lg p-2 flex flex-row">
                  <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  Вы хотите , чтобы ребенок участвовал в утренниках как в Вашем детстве
                </li>

              </ul>

            </UCard>
          </UModal>

          <UModal v-if="group === 3" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                <div class="flex items-center justify-between">
                  <h1 class="text-xl font-bold">Букварята (5-6 лет)</h1>
                  <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />  
                </div>
              </template>

              <h2 class="text-lg text-center">
                Суббота
                <br /> 9.00-11.00
              </h2>

              <NuxtImg src="/bukvaryata.jpg" class="rounded-lg mx-auto m-4 border border-gray-200 p-2" />

              <h2 class="text-lg text-center my-4">
                Эта группа подойдёт вам, если...
              </h2>

              <ul class="space-y-2 font-semibold">

                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    У Вас не хватает сил и времени на организацию домашнего образовательного процесса
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите укрепить мотивацию ребенка изучать русский язык
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вам важно, чтобы занятия были интересны самому ребенку и чтобы Вы видели результаты
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы не можете найти курсы русского языка, чтобы Ваш ребенок учился с ровесниками
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите, чтобы Ваш ребенок не сильно отставал от своих ровесников в странах СНГ и в случае переезда смог быстро наверстать программу русского языка общеобразовательной школы
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вам важно, чтобы помимо русского языка ребенок изучал Литературу, Окружающий Мир, Историю и обогатил родную речь
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите найти русскоязычную среду для Вашего ребенка и себя, т.к. вам сложно адаптироваться после недавнего переезда в Турцию
                </li>
            
              </ul>

            </UCard>
          </UModal>

          <UModal v-if="group === 4" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                <div class="flex items-center justify-between">
                  <h1 class="text-xl font-bold">Знайки (6-7 лет)</h1>
                  <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />  
                </div>
              </template>

              <h2 class="text-lg text-center">
                Суббота
                <br /> 14.00-16.00
              </h2>

              <NuxtImg src="/znayki.jpg" class="rounded-lg mx-auto m-4 border border-gray-200 p-2" />

              <h2 class="text-lg text-center my-4">
                Эта группа подойдёт вам, если...
              </h2>

              <ul class="space-y-2 font-semibold">

                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    У Вас не хватает сил и времени на организацию домашнего образовательного процесса
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите укрепить мотивацию ребенка изучать русский язык
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вам важно, чтобы занятия были интересны самому ребенку и чтобы Вы видели результаты
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы не можете найти курсы русского языка, чтобы Ваш ребенок учился с ровесниками
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите, чтобы Ваш ребенок не сильно отставал от своих ровесников в странах СНГ и в случае переезда смог быстро наверстать программу русского языка общеобразовательной школы
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вам важно, чтобы помимо русского языка ребенок изучал Литературу, Окружающий Мир, Историю и обогатил родную речь
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите найти русскоязычную среду для Вашего ребенка и себя, т.к. вам сложно адаптироваться после недавнего переезда в Турцию
                </li>
            
              </ul>

            </UCard>
          </UModal>

          <UModal v-if="group === 5" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                <div class="flex items-center justify-between">
                  <h1 class="text-xl font-bold">Читайки (7-8 лет)</h1>
                  <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />  
                </div>
              </template>

              <h2 class="text-lg text-center">
                Суббота
                <br /> 11.30-13.30
              </h2>

              <NuxtImg src="/chitayki.jpg" class="rounded-lg mx-auto m-4 border border-gray-200 p-2" />

              <h2 class="text-lg text-center my-4">
                Эта группа подойдёт вам, если...
              </h2>

              <ul class="space-y-2 font-semibold">

                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    У Вас не хватает сил и времени на организацию домашнего образовательного процесса
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите укрепить мотивацию ребенка изучать русский язык
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вам важно, чтобы занятия были интересны самому ребенку и чтобы Вы видели результаты
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы не можете найти курсы русского языка, чтобы Ваш ребенок учился с ровесниками
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите, чтобы Ваш ребенок не сильно отставал от своих ровесников в странах СНГ и в случае переезда смог быстро наверстать программу русского языка общеобразовательной школы
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вам важно, чтобы помимо русского языка ребенок изучал Литературу, Окружающий Мир, Историю и обогатил родную речь
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите найти русскоязычную среду для Вашего ребенка и себя, т.к. вам сложно адаптироваться после недавнего переезда в Турцию
                </li>
            
              </ul>

            </UCard>
          </UModal>

          <UModal v-if="group === 6" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                <div class="flex items-center justify-between">
                  <h1 class="text-xl font-bold">Фантазёры (8-9 лет)</h1>
                  <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />  
                </div>
              </template>

              <h2 class="text-lg text-center">
                Суббота
                <br /> 16.30-18.30
              </h2>

              <NuxtImg src="/fantazeri.jpg" class="rounded-lg mx-auto m-4 border border-gray-200 p-2" />

              <h2 class="text-lg text-center my-4">
                Эта группа подойдёт вам, если...
              </h2>

              <ul class="space-y-2 font-semibold">

                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    У Вас не хватает сил и времени на организацию домашнего образовательного процесса
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите укрепить мотивацию ребенка изучать русский язык
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вам важно, чтобы занятия были интересны самому ребенку и чтобы Вы видели результаты
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы не можете найти курсы русского языка, чтобы Ваш ребенок учился с ровесниками
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите, чтобы Ваш ребенок не сильно отставал от своих ровесников в странах СНГ и в случае переезда смог быстро наверстать программу русского языка общеобразовательной школы
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вам важно, чтобы помимо русского языка ребенок изучал Литературу, Окружающий Мир, Историю и обогатил родную речь
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите найти русскоязычную среду для Вашего ребенка и себя, т.к. вам сложно адаптироваться после недавнего переезда в Турцию
                </li>
            
              </ul>

            </UCard>
          </UModal>

          <UModal v-if="group === 7" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                <div class="flex items-center justify-between">
                  <h1 class="text-xl font-bold">Волшебники (9-11)</h1>
                  <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />  
                </div>
              </template>

              <h2 class="text-lg text-center">
                Пятница
                <br /> 17.00-19.00
              </h2>

              <NuxtImg src="/volshebniki.jpg" class="rounded-lg mx-auto m-4 border border-gray-200 p-2" />

              <h2 class="text-lg text-center my-4">
                Эта группа подойдёт вам, если...
              </h2>

              <ul class="space-y-2 font-semibold">

                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    У Вас не хватает сил и времени на организацию домашнего образовательного процесса
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите укрепить мотивацию ребенка изучать русский язык
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вам важно, чтобы занятия были интересны самому ребенку и чтобы Вы видели результаты
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы не можете найти курсы русского языка, чтобы Ваш ребенок учился с ровесниками
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите, чтобы Ваш ребенок не сильно отставал от своих ровесников в странах СНГ и в случае переезда смог быстро наверстать программу русского языка общеобразовательной школы
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вам важно, чтобы помимо русского языка ребенок изучал Литературу, Окружающий Мир, Историю и обогатил родную речь
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите найти русскоязычную среду для Вашего ребенка и себя, т.к. вам сложно адаптироваться после недавнего переезда в Турцию
                </li>
            
              </ul>

            </UCard>
          </UModal>

          <UModal v-if="group === 8" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                <div class="flex items-center justify-between">
                  <h1 class="text-xl font-bold">Книгоманы (11+)</h1>
                  <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />  
                </div>
              </template>

              <h2 class="text-lg text-center">
                Среда
                <br /> 17.30-19.30
              </h2>

              <NuxtImg src="/knigomani.jpg" class="rounded-lg mx-auto m-4 border border-gray-200 p-2" />

              <h2 class="text-lg text-center my-4">
                Эта группа подойдёт вам, если...
              </h2>
              
              <ul class="space-y-2 font-semibold">

                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    У Вас не хватает сил и времени на организацию домашнего образовательного процесса
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите укрепить мотивацию ребенка изучать русский язык
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вам важно, чтобы занятия были интересны самому ребенку и чтобы Вы видели результаты
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы не можете найти курсы русского языка, чтобы Ваш ребенок учился с ровесниками
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите, чтобы Ваш ребенок не сильно отставал от своих ровесников в странах СНГ и в случае переезда смог быстро наверстать программу русского языка общеобразовательной школы
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вам важно, чтобы помимо русского языка ребенок изучал Литературу, Окружающий Мир, Историю и обогатил родную речь
                </li>
            
                <li class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                            <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                    </div>
                    Вы хотите найти русскоязычную среду для Вашего ребенка и себя, т.к. вам сложно адаптироваться после недавнего переезда в Турцию
                </li>
            
              </ul>

            </UCard>
          </UModal>

        </div>

      </div>
    </section>
  </div>
</template>