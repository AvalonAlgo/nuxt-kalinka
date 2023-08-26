<script setup>
const props = defineProps({
  elements: Array
});

const activeGroup = ref(0);

function setActive(e) {
  activeGroup.value = e;
}
</script>

<template>
  <div>
    <section class="text-gray-600 body-font lg:mb-20">
      <div class="container px-5 py-12 mx-auto flex flex-wrap flex-col">
        <div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 italic">Наши группы...</h1>
        </div>

        <div class="flex flex-wrap mx-auto mb-16 justify-center sm:justify-start">
          <button @click="setActive(0)" :class="{'bg-gray-100 border-indigo-500 text-indigo-500' : activeGroup === 0}" class="px-6 py-3 w-full sm:w-auto justify-center border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
<svg height="64px" width="64px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-256 -256 1024.00 1024.00" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path class="st0" d="M462.885,382.541c-44.754-9.946-52.217,47.244-52.217,47.244s-37.371-1.417-42.895-15.695 c-1.805-3.61-7.147-26.55-13.536-55.808c20.143,12.283,51.468,26.74,79.833,8.501c38.68-24.872,16.587-80.121-22.093-77.351 c-24.105,1.724-53.588-10.504-77.72-26c-0.09-0.451-0.19-0.903-0.289-1.363c31.362-24.285,51.568-62.279,51.568-105.002 c0-12.364-1.724-23.843-4.882-34.43c24.529-8.672,42.128-31.992,42.128-59.491C422.779,28.284,394.504,0,359.624,0 c-29.159,0-53.625,19.783-60.899,46.658c-14.322-4.079-29.8-6.182-45.963-6.182c-13.898,0-27.309,1.57-39.898,4.594 C205.076,19.007,180.962,0,152.371,0C117.5,0,89.225,28.284,89.225,63.146c0,25.296,14.9,47.046,36.37,57.136 c-3.638,11.217-5.614,23.509-5.614,36.784c0,44.447,21.868,83.759,55.404,107.854c-23.681,14.765-52.028,26.181-75.356,24.512 c-38.68-2.77-60.782,52.479-22.102,77.351c28.192,18.121,59.319,3.952,79.472-8.276c-6.218,28.482-11.398,51.008-13.167,55.583 c-5.524,14.278-42.904,15.695-42.904,15.695s-7.454-57.19-52.208-47.244c-33.013,7.336-40.332,41.784-19.891,77.07 c27.345,47.244,43.987,53.625,79.562,52.217c31.496-1.236,108.188-3.348,147.211-3.348s115.715,2.112,147.212,3.348 c35.575,1.408,52.217-4.973,79.562-52.217C503.207,424.325,495.897,389.877,462.885,382.541z M256.002,239.643 c-36.216,0-65.583-21.028-65.583-46.956c0-25.937,29.367-46.964,65.583-46.964c36.208,0,65.574,21.028,65.574,46.964 C321.576,218.615,292.21,239.643,256.002,239.643z"></path> <path class="st0" d="M256.002,161.922c-13.862,0-25.098,7.608-25.098,17.003c0,9.386,11.236,16.993,25.098,16.993 s25.098-7.607,25.098-16.993C281.1,169.53,269.864,161.922,256.002,161.922z"></path> </g> </g></svg>
            от 2х лет
          </button>
        
          <button @click="setActive(1)" :class="{'bg-gray-100 border-indigo-500 text-indigo-500' : activeGroup === 1}" class="px-6 py-3 w-full sm:w-auto justify-center border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
            <svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-256 -256 1024.00 1024.00" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M489.739,378.435H272.696v-44.522h183.652c8.003,0,14.881-5.68,16.394-13.539c1.513-7.859-2.764-15.686-10.194-18.659 l-8.871-3.548C366.33,263.228,301.53,190.084,277.084,100.174h45.698c27.618,0,50.087-22.469,50.087-50.087V16.696 C372.87,7.475,365.394,0,356.174,0H256c-1.632,0-3.464,0.268-5.189,0.833c-0.03,0.01-0.061,0.014-0.091,0.024 C124.058,43.078,38.957,161.15,38.957,294.663v22.555c0,9.22,7.475,16.696,16.696,16.696h183.652v44.522H22.261 c-9.22,0-16.696,7.475-16.696,16.696c0,64.442,52.428,116.87,116.87,116.87h267.13c64.442,0,116.87-52.428,116.87-116.87 C506.435,385.91,498.96,378.435,489.739,378.435z M272.696,33.391h66.783v16.696c0,9.206-7.49,16.696-16.696,16.696h-50.087 V33.391z M272.696,178.574c26.945,50.148,65.841,91.736,112.957,121.947H272.696V178.574z M72.348,300.521v-5.858 c0-111.223,66.19-210.433,166.957-253.761c0,10.666,0,247.735,0,259.619H72.348z M389.565,478.609h-267.13 c-40.313,0-74.044-28.727-81.801-66.783h430.732C463.609,449.882,429.879,478.609,389.565,478.609z"></path> </g> </g> </g></svg>
            от 4х лет
          </button>
        
          <button @click="setActive(2)" :class="{'bg-gray-100 border-indigo-500 text-indigo-500' : activeGroup === 2}" class="px-6 py-3 w-full sm:w-auto mx-auto sm:mx-0 justify-center border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
<svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-256 -256 1024.00 1024.00" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M334.918,177.084c-19.545-19.544-51.177-19.545-70.721-0.001c-19.544,19.542-19.547,51.177,0,70.722 c19.543,19.544,51.175,19.546,70.721,0C354.461,228.263,354.465,196.628,334.918,177.084z M311.343,224.231 c-6.515,6.515-17.058,6.515-23.574,0c-6.513-6.514-6.516-17.058,0-23.574c6.515-6.514,17.057-6.517,23.575,0.001 C317.858,207.172,317.858,217.717,311.343,224.231z"></path> </g> </g> <g> <g> <path d="M507.119,4.881c-6.511-6.508-17.066-6.508-23.575,0.001l-31.512,31.512c-76.44-12.355-153.982,12.54-209.016,67.573 l-62.515,62.515c-32.344-21.392-76.435-17.859-104.896,10.601L4.883,247.806c-6.504,6.504-6.51,17.064,0,23.574 c16.249,16.248,37.591,24.373,58.935,24.373c9.085,0,18.166-1.487,26.859-4.431l-7.311,21.935 c-1.996,5.99-0.438,12.593,4.027,17.058l1.956,1.956c-29.645,6.135-53.561,29.614-61.388,58.312L0.588,490.945 c-1.574,5.771,0.066,11.944,4.295,16.174c4.243,4.243,10.422,5.863,16.173,4.295l100.363-27.372 c28.713-7.831,52.18-31.758,58.313-61.388l1.956,1.956c4.47,4.471,11.075,6.02,17.058,4.027l21.935-7.312 c-9.86,29.112-3.223,62.629,19.942,85.793c6.504,6.505,17.065,6.51,23.574,0l70.722-70.722 c28.792-28.792,31.872-72.886,10.611-104.906l62.505-62.505c55.034-55.033,79.929-132.576,67.573-209.016l31.513-31.513 C513.629,21.946,513.629,11.391,507.119,4.881z M42.263,257.572l56.916-56.916c15.368-15.367,38.329-18.621,56.914-9.766 c-12.66,12.66-44.41,44.41-56.914,56.916C83.812,263.172,60.85,266.431,42.263,257.572z M112.646,451.878l-72.219,19.696 l19.696-72.22c8.262-30.293,46.621-49.67,74.409-21.899l0.013,0.013C162.304,405.243,142.955,443.611,112.646,451.878z M197.976,393.751l-79.727-79.727l11.787-35.36l103.301,103.301L197.976,393.751z M311.344,412.823l-56.914,56.914 c-8.856-18.586-5.601-41.548,9.767-56.916c12.575-12.576,44.547-44.548,56.931-56.931 C329.821,374.048,327.062,397.105,311.344,412.823z M384.459,245.411c-3.952,3.952-118.23,118.23-120.263,120.263l-117.87-117.87 L266.589,127.54c17.187-17.187,36.928-30.953,58.242-41.029l100.657,100.657C415.412,208.483,401.646,228.224,384.459,245.411z M438.187,152.721L359.28,73.812c27.01-7.308,55.541-9.16,83.963-5.055C447.347,97.179,445.495,125.71,438.187,152.721z"></path> </g> </g> </g></svg>
            от 5 до 12 лет
          </button>
        </div>        

        <div v-show="activeGroup === 0">
          <div class="relative xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10">
            <!-- Butterfly Image (Positioned Absolutely on the top-right) -->
            <img width="140px" height="140px" class="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 object-cover object-center rounded" alt="hero" src="/butterfly-shit.png">
        
            <!-- Background Image -->
            <img class="w-full block object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          </div>        
        
          <div class="flex flex-col text-center w-full">
            <h1 class="text-2xl font-medium title-font mb-2 bg-gradient-to-r from-cyan-500 to-violet-600 bg-clip-text text-transparent">{{ props.elements[0][0] }}</h1>
            <h2 class="text-l font-medium title-font mb-4 text-gray-900 italic">{{ props.elements[0][1] }}</h2>
            <!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> -->
            <ul class="text-left">
              <li class="border m-2 rounded p-2 text-lg" v-for="i in props.elements[0][2]" :key="i">+ {{ i }}</li>
            </ul>
          </div>
        </div>

        <div v-show="activeGroup === 1">
          <div class="relative xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 block mx-auto mb-10">
            <!-- Butterfly Image (Positioned Absolutely) -->
            <!-- <img class="absolute top-0 left-0 w-full h-full object-cover object-center rounded" alt="hero" src="https://pre00.deviantart.net/aed1/th/pre/i/2018/016/6/e/borboletas_png_made_in_picsart__by_hanjorafael-dc079wu.png"> -->
            
            <!-- Background Image -->
            <img class="w-full block object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          </div>
          <div class="flex flex-col text-center w-full">
            <h1 class="text-2xl font-medium title-font mb-2 bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">{{ props.elements[1][0] }}</h1>
            <h2 class="text-l font-medium title-font mb-4 text-gray-900 italic">{{ props.elements[1][1] }}</h2>
            <!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> -->
            <ul class="text-left">
              <li class="border m-2 rounded p-2 text-lg" v-for="i in props.elements[1][2]" :key="i">+ {{ i }}</li>
            </ul>
          </div>
        </div>

        <div v-show="activeGroup === 2">
          <div class="relative xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 block mx-auto mb-10">
            <!-- Butterfly Image (Positioned Absolutely) -->
            <!-- <img class="absolute top-0 left-0 w-full h-full object-cover object-center rounded" alt="hero" src="https://pre00.deviantart.net/aed1/th/pre/i/2018/016/6/e/borboletas_png_made_in_picsart__by_hanjorafael-dc079wu.png"> -->
            
            <!-- Background Image -->
            <img class="w-full block object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          </div>
          <div class="flex flex-col text-center w-full">
            <h1 class="text-2xl font-medium title-font mb-2 bg-gradient-to-r from-red-500 to-violet-500 bg-clip-text text-transparent">{{ props.elements[2][0] }}</h1>
            <h2 class="text-l font-medium title-font mb-4 text-gray-900 italic">{{ props.elements[2][1] }}</h2>
            <!-- <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p> -->
            <ul class="text-left">
              <li class="border m-2 rounded p-2 text-lg" v-for="i in props.elements[2][2]" :key="i">+ {{ i }}</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>