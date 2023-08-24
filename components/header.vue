<template>
  <div>
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <NuxtLink to="/" class="ml-3 text-xl">Калинка</NuxtLink>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center lg:justify-end">
          <NuxtLink to="/lesson" class="mr-5 hover:text-gray-900">Бесплатное занятие</NuxtLink>
          <a href="https://wa.me/905388895268" class="mr-5 hover:text-gray-900">Вопросы по Whatsapp</a>
          <NuxtLink to="/#contact" class="mr-5 hover:text-gray-900">Связаться</NuxtLink>
        </nav>
      </div>
    </header>
  </div>
</template>