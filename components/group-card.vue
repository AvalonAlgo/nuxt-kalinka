<script setup>
const props = defineProps({
  image: String,
  group: Number,
  name: String
})
</script>

<template>
  <div class="mx-auto cursor-pointer flex flex-col items-center hover:scale-110 transform-gpu transition-transform duration-300 ease-in-out" @click="$emit('handleClick', props.group)">
    <NuxtImg class="h-24 w-24 object-fill " :src="image" />
    <UButton color="red" variant="link" class="mb-4 underline rounded-lg w-full bg-white justify-center" :label="name" />
  </div>
</template>