<script setup>
const childName = ref(null);
const parentName = ref(null);
const residence = ref(null);
const childAge = ref(null);
const childGender = ref(null);
const parentEmail = ref(null);
const parentPhone = ref(null);
const languageLevel = ref(null);
const expectations = ref(null);

const isModalVisible = ref(false);
const modalMessage = ref('');

const showModal = () => {
  isModalVisible.value = true;
}

const hideModal = () => {
  isModalVisible.value = false;
}

const handleSubmit = async () => {
  const { data, pending, error, refresh } = await useFetch('/api/send-lesson-email', {
    headers: { "Content-type": "application/json" },
    method: 'POST',
    watch: false,
    body: {
      childName: childName,
      parentName: parentName,
      residence: residence,
      childAge: childAge,
      childGender: childGender,
      parentEmail: parentEmail,
      parentPhone: parentPhone,
      languageLevel: languageLevel,
      expectations: expectations
    },
    onRequest({ request, options }) {
      modalMessage.value = 'Ваш запрос обрабатывается. Пожалуйста, подождите.';
      showModal();
    },
    onRequestError({ request, options, error }) {
      modalMessage.value = 'Что-то пошло не так. Попробуйте позже.';
      // Handle the request errors
    },
    onResponse({ request, response, options }) {
      modalMessage.value = 'Ваш запрос успешно обработан.';
      // Process the response data
      childName.value = null;
      parentName.value = null;
      residence.value = null;
      childAge.value = null;
      childGender.value = null;
      parentEmail.value = null;
      parentPhone.value = null;
      languageLevel.value = null;
      expectations.value = null;
    },
    onResponseError({ request, response, options }) {
      modalMessage.value = 'Что-то пошло не так. Попробуйте позже.';
      // Handle the response errors
    }
  });

  if (result.status.value === "success") {
    childName.value = null;
    parentName.value = null;
    residence.value = null;
    childAge.value = null;
    childGender.value = null;
    parentEmail.value = null;
    parentPhone.value = null;
    languageLevel.value = null;
    expectations.value = null;
  } else {
    console.log("Something went wrong... :(")
  };
}
</script>


<template>
  <div>

    <div v-if="isModalVisible" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
  
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
  
        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <!-- Modal Content -->
            <div class="sm:flex sm:items-start">
              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                  Request In Progress
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
            <button @click="hideModal" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-36 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Записаться на бесплатное занятие</h1>
        </div>

        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">

            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="childName" class="leading-7 text-sm text-gray-600">Имя ребёнка</label>
                <input required v-model="childName" type="text" id="childName" name="childName" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>

            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="parentName" class="leading-7 text-sm text-gray-600">Имя родителя</label>
                <input required v-model="parentName" type="text" id="parentName" name="parentName" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>

            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="residence" class="leading-7 text-sm text-gray-600">Район проживания</label>
                <input required v-model="residence" type="text" id="residence" name="residence" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>

            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="childAge" class="leading-7 text-sm text-gray-600">Возраст ребёнка</label>
                <select required v-model="childAge" type="number" id="childAge" name="childAge" class="appearance-none w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                </select>
              </div>
            </div>

            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="childGender" class="leading-7 text-sm text-gray-600">Пол ребёнка</label>
                <input required v-model="childGender" type="text" id="childGender" name="childGender" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>

            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="parentEmail" class="leading-7 text-sm text-gray-600">Ваша почта</label>
                <input required v-model="parentEmail" type="email" id="parentEmail" name="parentEmail" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>

            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="parentPhone" class="leading-7 text-sm text-gray-600">Ваш телефон</label>
                <input required v-model="parentPhone" type="text" id="parentPhone" name="parentPhone" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>

            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="languageLevel" class="leading-7 text-sm text-gray-600">Языковой уровень</label>
                <input required v-model="languageLevel" type="text" id="languageLevel" name="languageLevel" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
              </div>
            </div>

            <div class="p-2 w-full">
              <div class="relative">
                <label for="expectations" class="leading-7 text-sm text-gray-600">Ожидания</label>
                <textarea required v-model="expectations" id="expectations" name="expectations" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>

            <div class="p-2 w-full flex justify-center">
              <button @click="handleSubmit" class="text-center w-1/2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Отправить</button>
            </div>
          
            <div class="p-2 w-full flex justify-center">
              <NuxtLink to="/" class="text-center w-1/2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Назад</NuxtLink>
            </div>
          
          </div>
        </div>

      </div>
    </section>
  </div>
</template>