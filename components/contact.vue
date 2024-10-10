<script setup>
import confetti from "canvas-confetti";

const name = ref(null);
const email = ref(null);
const message = ref(null);

const isModalVisible = ref(false);
const modalMessage = ref("");

const showModal = () => {
  isModalVisible.value = true;
};

const hideModal = () => {
  isModalVisible.value = false;
};

// const handleSubmit = async () => {
//   const result = await useFetch('/api/send-contact-email', {
//     headers: { "Content-type": "application/json" },
//     method: 'POST',
//     watch: false,
//     body: {
//       name: name,
//       email: email,
//       message: message,
//     },
//     onRequest({ request, options }) {
//       modalMessage.value = 'Ваш запрос обрабатывается. Пожалуйста, подождите.';
//       showModal();
//     },
//     onRequestError({ request, options, error }) {
//       modalMessage.value = 'Что-то пошло не так. Попробуйте позже.';
//       // Handle the request errors
//     },
//     onResponse({ request, response, options }) {
//       confetti();
//       modalMessage.value = 'Ваш запрос успешно обработан.';
//       // Process the response data
//       name.value = null;
//       email.value = null;
//       message.value = null;
//     },
//     onResponseError({ request, response, options }) {
//       modalMessage.value = 'Что-то пошло не так. Попробуйте позже.';
//       // Handle the response errors
//     }
//   });
// }
</script>

<template>
  <div>
    <div
      v-if="isModalVisible"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>

        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <!-- Modal Content -->
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  class="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Запрос выполняется
                </h3>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ modalMessage }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              @click="hideModal"
              type="button"
              class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>

    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div
          class="w-full h-96 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
        >
          <iframe
            width="100%"
            height="100%"
            class="absolute inset-0"
            frameborder="0"
            title="map"
            marginheight="0"
            marginwidth="0"
            scrolling="no"
            src="          https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d895.383687426372!2d29.137319925214022!3d40.98805541989122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac9f6ac2d0655%3A0xc4504223222b626e!2zQm90YW5payDDh2FyxZ_EsQ!5e0!3m2!1sen!2str!4v1692736321733!5m2!1sen!2str"
            style="contrast(1.2) opacity(0.4);"
          ></iframe>
          <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div class="lg:w-1/2 px-6">
              <h2
                class="title-font font-semibold text-gray-900 tracking-widest text-xs"
              >
                Ждем Вас по адресу
              </h2>
              <p class="mt-1">
                Ataşehir Atatürk, Meriç Cd. No:30, 34758 Ataşehir/İstanbul
              </p>
            </div>
          </div>
        </div>

        <!-- <form @submit.prevent="handleSubmit" class="lg:w-1/3 md:w-1/2 underline bg-blue-200 p-4 rounded-lg flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font italic">Есть вопросы?</h2>
          <p class="leading-relaxed mb-5 text-gray-600">Мы ответим в ближайшее время</p>
          <div class="relative mb-4">
            <label for="name" class="leading-7 text-md text-gray-600">Ваше имя</label>
            <input required v-model="name" type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-md text-gray-600">Ваш адрес электронной почты</label>
            <input required v-model="email" type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          </div>
          <div class="relative mb-4">
            <label for="message" class="leading-7 text-md text-gray-600">Сообщение</label>
            <textarea required v-model="message" id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
          <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Отправить</button>
        </form> -->
      </div>
    </section>
  </div>
</template>
