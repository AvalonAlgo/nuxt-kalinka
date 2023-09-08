<script setup>
const props = defineProps({
  group: Array
})

const isOpen = ref(true)

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
</script>

<template>
  <div>
    <UModal v-model="isOpen">
      <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800'}">
        
        <template #header>
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-bold">{{ props.group[2] }}</h1>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />  
          </div>
        </template>

        <h2 class="text-lg text-center">
          {{ props.group[3] }}
          <br /> {{ props.group[4] }}
        </h2>

        <NuxtImg :src="props.group[0]" class="rounded-lg mx-auto m-4 border border-gray-200 p-2" />

        <ul class="space-y-2">
          <li v-if="props.group[1] <= 2" v-for="line in listYoung" :key="line" class="border rounded-lg p-2">{{ line }}</li>
          <li v-if="props.group[1] >= 3" v-for="line in listOld" :key="line" class="border rounded-lg p-2">{{ line }}</li>
        </ul>

      </UCard>
    </UModal>
  </div>
</template>