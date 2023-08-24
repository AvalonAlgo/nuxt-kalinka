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

const handleSubmit = async () => {
  // const body = JSON.stringify({
  //   childName: childName.value,
  //   parentName: parentName.value,
  //   residence: residence.value,
  //   childAge: childAge.value,
  //   childGender: childGender.value,
  //   parentEmail: parentEmail.value,
  //   parentPhone: parentPhone.value,
  //   languageLevel: languageLevel.value,
  //   expectations: expectations.value
  // })

  const result = await useFetch('/api/send-lesson-email', {
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

            <div class="p-2 w-full">
              <button @click="handleSubmit" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Отправить</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>