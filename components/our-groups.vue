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
  ["/malishi.jpg", 1],
  ["/solnishko.jpg", 2],
  ["/bukvaryata.jpg", 3],
  ["/znayki.jpg", 4],
  ["/chitayki.jpg", 5],
  ["/fantazeri.jpg", 6],
  ["/volshebniki.jpg", 7],
  ["/knigomani.jpg", 8]
];

function handleCombinedClick(groupNumber) {
  isOpen = true;
  group = groupNumber;
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
    <section class="text-gray-600 body-font lg:mb-20 -mt-10 sm:-mt-0">
      <div class="container px-5 py-12 mx-auto flex flex-wrap flex-col">
`
        <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 ref="eltitle" :class="{'typewriter': isVisibletitle}" class="sm:text-3xl text-2xl font-medium title-font mb-2 text-blue-500 italic">Наши группы...</h1>
        </div>

        <div class="flex flex-wrap flex-col mx-auto w-full justify-center sm:justify-start space-y-4">
          <div class="-mb-44 sm:mb-0 flex flex-col space-y-10 sm:space-y-0 md:grid md:grid-cols-4 md:gap-4">
            
            <GroupCard v-for="data in groups" :key="data" :image="data[0]" :group="data[1]" @handleClick="(n) => group = n" @click="isOpen = true" />

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

              <ul class="space-y-2">
                <li class="border rounded-lg p-2">+ Ваш малыш еще не ходит в садик, но Вы хотите, чтобы он развивался и узнавал новое в коллективе, учился взаимодействовать со сверстниками</li>
                <li class="border rounded-lg p-2">+ Вам сложно  организовать игровые занятия дома, не хватает времени</li>
                <li class="border rounded-lg p-2">+ Вы хотите найти друзей Вашему малышу, с которыми бы он общался на русском языке</li>
                <li class="border rounded-lg p-2">+ Вы хотите разговорить ребенка, но самостоятельно не получается</li>
                <li class="border rounded-lg p-2">+ Вы хотите , чтобы ребенок участвовал в утренниках как в Вашем детстве</li>
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

              <ul class="space-y-2">
                <li class="border rounded-lg p-2">+ Ваш малыш еще не ходит в садик, но Вы хотите, чтобы он развивался и узнавал новое в коллективе, учился взаимодействовать со сверстниками</li>
                <li class="border rounded-lg p-2">+ Вам сложно  организовать игровые занятия дома, не хватает времени</li>
                <li class="border rounded-lg p-2">+ Вы хотите найти друзей Вашему малышу, с которыми бы он общался на русском языке</li>
                <li class="border rounded-lg p-2">+ Вы хотите разговорить ребенка, но самостоятельно не получается</li>
                <li class="border rounded-lg p-2">+ Вы хотите , чтобы ребенок участвовал в утренниках как в Вашем детстве</li>
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

              <ul class="space-y-2">
                <li class="border rounded-lg p-2">+ У Вас не хватает сил и времени на организацию домашнего образовательного процесса</li>
                <li class="border rounded-lg p-2">+ Вы хотите укрепить мотивацию ребенка изучать русский язык</li>
                <li class="border rounded-lg p-2">+ Вам важно, чтобы занятия были интересны самому ребенку и чтобы Вы  видели результаты</li>
                <li class="border rounded-lg p-2">+ Вы не можете найти курсы русского языка, чтобы Ваш ребенок учился с ровесниками</li>
                <li class="border rounded-lg p-2">+ Вы хотите, чтобы Ваш ребенок не сильно отставал от своих ровесников в странах СНГ и в случае переезда смог быстро наверстать программу русского языка общеобразовательной школы</li>
                <li class="border rounded-lg p-2">+ Вам важно, чтобы помимо русского языка ребенок изучал Литературу, Окружающий Мир, Историю и обогатил родную речь</li>
                <li class="border rounded-lg p-2">+ Вы хотите найти русскоязычную среду для Вашего ребенка и себя, т.к. вам сложно адаптироваться после недавнего переезда в Турцию</li>
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

              <ul class="space-y-2">
                <li class="border rounded-lg p-2">+ У Вас не хватает сил и времени на организацию домашнего образовательного процесса</li>
                <li class="border rounded-lg p-2">+ Вы хотите укрепить мотивацию ребенка изучать русский язык</li>
                <li class="border rounded-lg p-2">+ Вам важно, чтобы занятия были интересны самому ребенку и чтобы Вы  видели результаты</li>
                <li class="border rounded-lg p-2">+ Вы не можете найти курсы русского языка, чтобы Ваш ребенок учился с ровесниками</li>
                <li class="border rounded-lg p-2">+ Вы хотите, чтобы Ваш ребенок не сильно отставал от своих ровесников в странах СНГ и в случае переезда смог быстро наверстать программу русского языка общеобразовательной школы</li>
                <li class="border rounded-lg p-2">+ Вам важно, чтобы помимо русского языка ребенок изучал Литературу, Окружающий Мир, Историю и обогатил родную речь</li>
                <li class="border rounded-lg p-2">+ Вы хотите найти русскоязычную среду для Вашего ребенка и себя, т.к. вам сложно адаптироваться после недавнего переезда в Турцию</li>
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

              <ul class="space-y-2">
                <li class="border rounded-lg p-2">+ У Вас не хватает сил и времени на организацию домашнего образовательного процесса</li>
                <li class="border rounded-lg p-2">+ Вы хотите укрепить мотивацию ребенка изучать русский язык</li>
                <li class="border rounded-lg p-2">+ Вам важно, чтобы занятия были интересны самому ребенку и чтобы Вы  видели результаты</li>
                <li class="border rounded-lg p-2">+ Вы не можете найти курсы русского языка, чтобы Ваш ребенок учился с ровесниками</li>
                <li class="border rounded-lg p-2">+ Вы хотите, чтобы Ваш ребенок не сильно отставал от своих ровесников в странах СНГ и в случае переезда смог быстро наверстать программу русского языка общеобразовательной школы</li>
                <li class="border rounded-lg p-2">+ Вам важно, чтобы помимо русского языка ребенок изучал Литературу, Окружающий Мир, Историю и обогатил родную речь</li>
                <li class="border rounded-lg p-2">+ Вы хотите найти русскоязычную среду для Вашего ребенка и себя, т.к. вам сложно адаптироваться после недавнего переезда в Турцию</li>
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

              <ul class="space-y-2">
                <li class="border rounded-lg p-2">+ У Вас не хватает сил и времени на организацию домашнего образовательного процесса</li>
                <li class="border rounded-lg p-2">+ Вы хотите укрепить мотивацию ребенка изучать русский язык</li>
                <li class="border rounded-lg p-2">+ Вам важно, чтобы занятия были интересны самому ребенку и чтобы Вы  видели результаты</li>
                <li class="border rounded-lg p-2">+ Вы не можете найти курсы русского языка, чтобы Ваш ребенок учился с ровесниками</li>
                <li class="border rounded-lg p-2">+ Вы хотите, чтобы Ваш ребенок не сильно отставал от своих ровесников в странах СНГ и в случае переезда смог быстро наверстать программу русского языка общеобразовательной школы</li>
                <li class="border rounded-lg p-2">+ Вам важно, чтобы помимо русского языка ребенок изучал Литературу, Окружающий Мир, Историю и обогатил родную речь</li>
                <li class="border rounded-lg p-2">+ Вы хотите найти русскоязычную среду для Вашего ребенка и себя, т.к. вам сложно адаптироваться после недавнего переезда в Турцию</li>
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

              <ul class="space-y-2">
                <li class="border rounded-lg p-2">+ У Вас не хватает сил и времени на организацию домашнего образовательного процесса</li>
                <li class="border rounded-lg p-2">+ Вы хотите укрепить мотивацию ребенка изучать русский язык</li>
                <li class="border rounded-lg p-2">+ Вам важно, чтобы занятия были интересны самому ребенку и чтобы Вы  видели результаты</li>
                <li class="border rounded-lg p-2">+ Вы не можете найти курсы русского языка, чтобы Ваш ребенок учился с ровесниками</li>
                <li class="border rounded-lg p-2">+ Вы хотите, чтобы Ваш ребенок не сильно отставал от своих ровесников в странах СНГ и в случае переезда смог быстро наверстать программу русского языка общеобразовательной школы</li>
                <li class="border rounded-lg p-2">+ Вам важно, чтобы помимо русского языка ребенок изучал Литературу, Окружающий Мир, Историю и обогатил родную речь</li>
                <li class="border rounded-lg p-2">+ Вы хотите найти русскоязычную среду для Вашего ребенка и себя, т.к. вам сложно адаптироваться после недавнего переезда в Турцию</li>
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

              <ul class="space-y-2">
                <li class="border rounded-lg p-2">+ У Вас не хватает сил и времени на организацию домашнего образовательного процесса</li>
                <li class="border rounded-lg p-2">+ Вы хотите укрепить мотивацию ребенка изучать русский язык</li>
                <li class="border rounded-lg p-2">+ Вам важно, чтобы занятия были интересны самому ребенку и чтобы Вы  видели результаты</li>
                <li class="border rounded-lg p-2">+ Вы не можете найти курсы русского языка, чтобы Ваш ребенок учился с ровесниками</li>
                <li class="border rounded-lg p-2">+ Вы хотите, чтобы Ваш ребенок не сильно отставал от своих ровесников в странах СНГ и в случае переезда смог быстро наверстать программу русского языка общеобразовательной школы</li>
                <li class="border rounded-lg p-2">+ Вам важно, чтобы помимо русского языка ребенок изучал Литературу, Окружающий Мир, Историю и обогатил родную речь</li>
                <li class="border rounded-lg p-2">+ Вы хотите найти русскоязычную среду для Вашего ребенка и себя, т.к. вам сложно адаптироваться после недавнего переезда в Турцию</li>
              </ul>

            </UCard>
          </UModal>
        </div>

      </div>
    </section>
  </div>
</template>