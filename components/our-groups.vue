<script setup>
const props = defineProps({
  elements: Array
});

const groupRef = ref(null)
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

const listYoung = [
  'Ваш малыш еще не ходит в садик, но Вы хотите, чтобы он развивался и узнавал новое в коллективе, учился взаимодействовать со сверстниками',
  'Вам сложно  организовать игровые занятия дома, не хватает времени',
  'Вы хотите найти друзей Вашему малышу, с которыми бы он общался на русском языке',
  'Вы хотите разговорить ребенка, но самостоятельно не получается',
  'Вы хотите , чтобы ребенок участвовал в утренниках как в Вашем детстве'
];

const listOld = [
  'У Вас не хватает сил и времени на организацию домашнего образовательного процесса',
  'Вы хотите укрепить мотивацию ребенка изучать русский язык',
  'Вам важно, чтобы занятия были интересны самому ребенку и чтобы Вы  видели результаты',
  'Вы не можете найти курсы русского языка, чтобы Ваш ребенок учился с ровесниками',
  'Вы хотите, чтобы Ваш ребенок не сильно отставал от своих ровесников в странах СНГ и в случае переезда смог быстро наверстать программу русского языка общеобразовательной школы',
  'Вам важно, чтобы помимо русского языка ребенок изучал Литературу, Окружающий Мир, Историю и обогатил родную речь',
  'Вы хотите найти русскоязычную среду для Вашего ребенка и себя, т.к. вам сложно адаптироваться после недавнего переезда в Турцию'
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
      <div class="container px-5 py-20 mb-32 sm:mb-0 mx-auto flex flex-wrap flex-col">

        <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 ref="eltitle" :class="{'typewriter': isVisibletitle}" class="sm:text-3xl text-2xl font-medium title-font mb-2 text-blue-500 italic">Наши группы...</h1>
        </div>

        <div class="flex flex-wrap flex-col mx-auto w-full justify-center sm:justify-start space-y-4">

          <div class="-mb-48 sm:mb-0 grid grid-cols-2 grid-rows-4 sm:grid-cols-4 sm:grid-rows-2 gap-4">
            <GroupCard v-for="(data, index) in groups" :key="data" :index="index" :image="data[0]" :group="data[1]" :name="data[2]" @handleClick="(n) => groupRef = n" @click="isOpen = true" />
          </div>

          <div v-for="group in groups" :key="group">
            <UModal v-if="groupRef === group[1]" v-model="isOpen">
              <UCard :ui="{ divide: 'divide-y divide-gray-100', background: 'bg-white'}">
                
                <template #header>
                  <div class="flex items-center justify-between">
                    <h1 class="text-xl font-bold">{{ group[2] }}</h1>
                    <UButton color="dark" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />  
                  </div>
                </template>
  
                <h2 class="text-lg text-center">
                  {{ group[3] }}
                  <br /> {{ group[4] }}
                </h2>
  
                <NuxtImg :src="group[0]" class="rounded-lg mx-auto m-4 border border-gray-200 p-2" />
  
                <h2 class="text-lg text-center my-4">
                  Эта группа подойдёт вам, если...
                </h2>
  
                <ul v-if="group[1] <= 2" class="space-y-2 font-semibold">

                  <li v-for="line in listYoung" :key="line" class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    {{ line }}
                  </li>
  
                  <LessonWhatsapp :stacked="true" class="-mb-32" />
  
                </ul>

                <ul v-if="group[1] >= 3" class="space-y-2 font-semibold">

                  <li v-for="line in listOld" :key="line" class="border rounded-lg p-2 flex flex-row">
                    <div :style="{backgroundColor: randomCheerfulColor()}" class="mx-2 my-auto flex-shrink-0 w-10 h-10 rounded-full inline-flex items-center justify-center text-white relative z-10">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    {{ line }}
                  </li>
  
                  <LessonWhatsapp :stacked="true" class="-mb-32" />
  
                </ul>
  
              </UCard>
            </UModal>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>