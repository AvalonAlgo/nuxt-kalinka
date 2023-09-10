<script setup>
const props = defineProps ({
  stacked: Boolean
})

const el = ref(null)
const isVisible = useElementVisibility(el)
</script>

<style scoped>
@keyframes flashWhiteOrange {
  50% { background-color: white; }
}

@keyframes flashWhiteGreen {
  50% { background-color: white; }
}

.flash-bg-orange {
  animation: flashWhiteOrange 1s;
}

.flash-bg-green {
  animation: flashWhiteGreen 1s;
}
</style>

<template>
  <div>
    <div
      ref="el"
      :class="{
        'flex-col space-y-4' : props.stacked,
        'flex-row' : !props.stacked,
        'flex items-center justify-center px-5 py-12' : true,
      }"
      class="flex px-5 py-6"
    >
      <NuxtLink 
          to="/lesson" 
          :class="{
            'flash-bg-orange': isVisible, 
            'w-2/3': props.stacked, 
            'w-1/2': !props.stacked,
            'inline-flex' : !props.stacked,
            'text-center font-semibold': true,
            'justify-center': true,
            'text-white': true,
            'bg-orange-500': true,
            'border-0': true,
            'py-2': true,
            'px-6': true,
            'focus:outline-none': true,
            'hover:bg-orange-600': true,
            'rounded-xl': true
          }">
        Записаться на
        <br /> бесплатное занятие
      </NuxtLink>

      <a
        href="https://wa.me/905388895268" 
        :class="{
            'flash-bg-green': isVisible, 
            'w-2/3': props.stacked, 
            'w-1/2': !props.stacked,
            'inline-flex' : !props.stacked,
            'ml-4' : !props.stacked,
            'text-center font-semibold': true,
            'justify-center': true,
            'text-white': true,
            'bg-green-500': true,
            'border-0': true,
            'py-2': true,
            'px-6': true,
            'focus:outline-none': true,
            'hover:bg-green-600': true,
            'rounded-xl': true
          }">
        Задать вопросы
        <br /> по Whatsapp
      </a>
  
    </div>
</div>
</template>