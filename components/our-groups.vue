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
    <section class="text-gray-600 body-font lg:mb-20">
      <div class="container px-5 py-12 mx-auto flex flex-wrap flex-col">
`
        <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 ref="eltitle" :class="{'typewriter': isVisibletitle}" class="sm:text-3xl text-2xl font-medium title-font mb-2 text-blue-500 italic">Наши группы...</h1>
        </div>

        <div class="flex flex-wrap flex-col mx-auto w-full justify-center sm:justify-start space-y-4 bg-gradient-to-br from-violet-500 to-red-500 bg-clip-text text-transparent">
          <div class="flex flex-col text-xl space-y-2 md:space-y-0 md:grid md:grid-cols-3 md:gap-4">
            <UButton class="bg-gradient-to-br from-violet-500 to-red-500" label="Open" @click="isOpen = true; group = 1" />
            <UButton class="bg-gradient-to-br from-violet-500 to-red-500" label="Open" @click="isOpen = true; group = 2" />
            <UButton class="bg-gradient-to-br from-violet-500 to-red-500" label="Open" @click="isOpen = true; group = 3" />
            <UButton class="bg-gradient-to-br from-violet-500 to-red-500" label="Open" @click="isOpen = true; group = 4" />
            <UButton class="bg-gradient-to-br from-violet-500 to-red-500" label="Open" @click="isOpen = true; group = 5" />
            <UButton class="bg-gradient-to-br from-violet-500 to-red-500" label="Open" @click="isOpen = true; group = 6" />
            <UButton class="bg-gradient-to-br from-violet-500 to-red-500" label="Open" @click="isOpen = true; group = 7" />
            <UButton class="bg-gradient-to-br from-violet-500 to-red-500" label="Open" @click="isOpen = true; group = 8" />
          </div>

          <UModal v-if="group === 1" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                Развивающие занятия для малышей от 2х лет
              </template>

              Ваш малыш еще не ходит в садик, но Вы хотите, чтобы он развивался и узнавал новое в коллективе, учился взаимодействовать со сверстниками
              <img src="https://th.bing.com/th/id/OIP.9N8kLO9PMHuCJ07SgiV-eAHaIs?pid=ImgDet&rs=1" />

              <template #footer>
                <h2>test</h2>
              </template>

            </UCard>
          </UModal>

          <UModal v-if="group === 2" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                Развивающие занятия для малышей от 2х лет
              </template>

              Ваш малыш еще не ходит в садик, но Вы хотите, чтобы он развивался и узнавал новое в коллективе, учился взаимодействовать со сверстниками
              <img src="https://th.bing.com/th/id/OIP.9N8kLO9PMHuCJ07SgiV-eAHaIs?pid=ImgDet&rs=1" />

              <template #footer>
                <h2>test</h2>
              </template>

            </UCard>
          </UModal>

          <UModal v-if="group === 3" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                Развивающие занятия для малышей от 2х лет
              </template>

              Ваш малыш еще не ходит в садик, но Вы хотите, чтобы он развивался и узнавал новое в коллективе, учился взаимодействовать со сверстниками
              <img src="https://th.bing.com/th/id/OIP.9N8kLO9PMHuCJ07SgiV-eAHaIs?pid=ImgDet&rs=1" />

              <template #footer>
                <h2>test</h2>
              </template>

            </UCard>
          </UModal>

          <UModal v-if="group === 4" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                Развивающие занятия для малышей от 2х лет
              </template>

              Ваш малыш еще не ходит в садик, но Вы хотите, чтобы он развивался и узнавал новое в коллективе, учился взаимодействовать со сверстниками
              <img src="https://th.bing.com/th/id/OIP.9N8kLO9PMHuCJ07SgiV-eAHaIs?pid=ImgDet&rs=1" />

              <template #footer>
                <h2>test</h2>
              </template>

            </UCard>
          </UModal>

          <UModal v-if="group === 5" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                Развивающие занятия для малышей от 2х лет
              </template>

              Ваш малыш еще не ходит в садик, но Вы хотите, чтобы он развивался и узнавал новое в коллективе, учился взаимодействовать со сверстниками
              <img src="https://th.bing.com/th/id/OIP.9N8kLO9PMHuCJ07SgiV-eAHaIs?pid=ImgDet&rs=1" />

              <template #footer>
                <h2>test</h2>
              </template>

            </UCard>
          </UModal>

          <UModal v-if="group === 6" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                Развивающие занятия для малышей от 2х лет
              </template>

              Ваш малыш еще не ходит в садик, но Вы хотите, чтобы он развивался и узнавал новое в коллективе, учился взаимодействовать со сверстниками
              <img src="https://th.bing.com/th/id/OIP.9N8kLO9PMHuCJ07SgiV-eAHaIs?pid=ImgDet&rs=1" />

              <template #footer>
                <h2>test</h2>
              </template>

            </UCard>
          </UModal>

          <UModal v-if="group === 7" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                Развивающие занятия для малышей от 2х лет
              </template>

              Ваш малыш еще не ходит в садик, но Вы хотите, чтобы он развивался и узнавал новое в коллективе, учился взаимодействовать со сверстниками
              <img src="https://th.bing.com/th/id/OIP.9N8kLO9PMHuCJ07SgiV-eAHaIs?pid=ImgDet&rs=1" />

              <template #footer>
                <h2>test</h2>
              </template>

            </UCard>
          </UModal>

          <UModal v-if="group === 8" v-model="isOpen">
            <UCard :ui="{ divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
              
              <template #header>
                Развивающие занятия для малышей от 2х лет
              </template>

              Ваш малыш еще не ходит в садик, но Вы хотите, чтобы он развивался и узнавал новое в коллективе, учился взаимодействовать со сверстниками
              <img src="https://th.bing.com/th/id/OIP.9N8kLO9PMHuCJ07SgiV-eAHaIs?pid=ImgDet&rs=1" />

              <template #footer>
                <h2>test</h2>
              </template>

            </UCard>
          </UModal>
        </div>

      </div>
    </section>
  </div>
</template>