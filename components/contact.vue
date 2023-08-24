<script setup>
const name = ref(null);
const email = ref(null);
const message = ref(null);

const handleSubmit = async () => {
  const result = await useFetch('/api/send-contact-email', {
    headers: { "Content-type": "application/json" },
    method: 'POST',
    watch: false,
    body: {
      name: name,
      email: email,
      message: message,
    }
  });

  if (result.status.value === "success") {
    name.value = null
    email.value = null
    message.value = null
  } else {
    console.log("Something went wrong... :(")
  };
}
</script>

<template>
  <div>
    <section id="contact" class="text-gray-600 body-font relative">
      <div class="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="          https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895.383687426372!2d29.137319925214022!3d40.98805541989122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9f6ac2d0655%3A0xc4504223222b626e!2zQm90YW5payDDh2FyxZ_EsQ!5e0!3m2!1sen!2str!4v1692736321733!5m2!1sen!2str" style="contrast(1.2) opacity(0.4);"></iframe>
          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">Ждем Вас по адресу</h2>
              <p class="mt-1">Ataşehir Atatürk, Meriç Cd. No:30, 34758 Ataşehir/İstanbul</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/3 md:w-1/2 underline bg-blue-200 p-4 rounded-lg flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font italic">Есть вопросы?</h2>
          <p class="leading-relaxed mb-5 text-gray-600">Мы ответим в первый доступный момент.</p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-sm text-gray-600">Ваше имя</label>
            <input v-model="name" type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">Ваш адрес электронной почты</label>
            <input v-model="email" type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-sm text-gray-600">Сообщение</label>
            <textarea v-model="message" id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button @click="handleSubmit" class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Отправить</button>
          <p class="text-xs text-gray-500 mt-3">Ваши данные не хранятся нигде, кроме ответа формы.</p>
        </div>
      </div>
    </section>
  </div>
</template>