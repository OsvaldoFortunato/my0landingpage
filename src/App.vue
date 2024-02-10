
<script setup>
import NavBarVue from './components/NavBar.vue';
</script>

<template>
  <header class="p-24">
    <nav class="flex items-center justify-center">
      <div class="flex-1">
        <ul class="font-sans flex gap-12">
          <li class="text-travel-black font-semibold">Home</li>
          <li class="text-travel-silver font-semibold">Guides</li>
          <li class="text-travel-silver font-semibold">Flags</li>
          <li class="text-travel-silver font-semibold">About</li>
        </ul>
      </div>
      <div class="flex justify-end flex-1">
        <button class="border-2 px-6 py-2 rounded-lg hover:bg-travel-black hover:text-travel-silver-background"><span
            class="font-bold text-sm">Contact us</span></button>
      </div>
    </nav>
  </header>

  <main>
    <!-- conteudo 1- Travel to your dream Destination-->
    <section class="flex items-center justify-center px-24">
      <div class="flex-1">
        <h1 class="font-playfair text-travel-black text-5xl font-bold ">Travel to<br> your dream Destination</h1>
        <p class="leading-5 mt-8 font-medium  text-travel-black">Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Integer consequat leo
          sit amet dolor
          tempor. Integer consequat leo sit amet dolor
          tempor.</p>
        <div>
          <button class="btn btn-black mt-6 font-bold">Reserve ticket</button>
        </div>
      </div>
      <div class="flex-1 flex justify-end">
        <img :src="image_lugar_1" class="max-w-md h-auto" alt="Imagem" />
      </div>
    </section>

    <!-- conteudo 2 - Create a memory to remember -->
    <section class="bg-travel-black mt-16 p-12 flex flex-col items-center justify-center">
      <div class="flex-1 item-center ">
        <div class="max-w-64">
          <h1 class="text-3xl font-bold font-playfair text-travel-silver-background text-center">Create a memory to
            remember</h1>
        </div>
      </div>
      <div>
        <div class="flex-1 text-center max-w-[430px]">
          <p class="font-medium text-sm mt-6 text-travel-silver-background">Lorem ipsum dolor sit amet, consectetur
            adipiscing
            elit. Integer consequat leo
            sit amet dolor
            tempor.Integer consequat leo
            sit amet dolor
            tempor. </p>
        </div>
        <div class="flex-1 flex justify-center mt-6"><button
            class="btn border-2 border-travel-silver-background text-travel-silver-background font-bold hover:bg-travel-silver-background hover:text-travel-black">My
            TravelLogs</button></div>
      </div>
    </section>


    <!-- conteudo 3 - Grids -->
    <section class="mt-16 bg-travel-silver-background p-24">
      <div class="grid grid-cols-3 gap-16 ">

        <!-- Item-Grid 1 -->
        <div class="flex flex-col">
          <div class="flex-1">
            <img class=" max-w-full h-full"
              src="https://img.freepik.com/fotos-gratis/mulher-que-esta-em-uma-montanha-que-olha-no-por-do-sol_1253-218.jpg" />
          </div>

          <div class="flex-1">
            <div class="max-w-64 mb-4">
              <div class="w-12 h-[4px] mt-6 mb-6 bg-travel-black"></div>
              <h1 class="text-xl leading-6 font-bold font-playfair text-travel-black text-left">Create a memory to
                remember</h1>
            </div>

            <p class="text-justify text-md text-travel-black leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer consequat leo sit
              amet dolor tempor, sed
              fermentum neque commodo. In mollis rutrum hendrerit.</p>
          </div>
        </div>

        <!-- Item-Grid 2 -->
        <div class="flex flex-col">
          <div class="flex-1">
            <img class=" max-w-full h-full"
              src="https://cdn.vezdavoz.com.br/wp-content/uploads/2020/04/sh_montanha_1232888095.jpg" />
          </div>

          <div class="flex-1">
            <div class="max-w-64 mb-4">
              <div class="w-12 h-[4px] mt-6 mb-6 bg-travel-black"></div>
              <h1 class="text-xl leading-6 font-bold font-playfair text-travel-black text-left">Create a memory to
                remember</h1>
            </div>

            <p class="text-justify text-md text-travel-black leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer consequat leo sit
              amet dolor tempor, sed
              fermentum neque commodo. In mollis rutrum hendrerit.</p>
          </div>
        </div>

        <!-- Item-Grid 3-->
        <div class="flex flex-col">
          <div class="flex-1">
            <img class=" max-w-full h-full"
              src="https://gooutside.com.br/wp-content/uploads/sites/3/2022/05/shutterstock_547277221.jpg" />
          </div>

          <div class="flex-1">
            <div class="max-w-64 mb-4">
              <div class="w-12 h-[4px] mt-6 mb-6 bg-travel-black"></div>
              <h1 class="text-xl leading-6 font-bold font-playfair text-travel-black text-left">Create a memory to
                remember</h1>
            </div>

            <p class="text-justify text-md text-travel-black leading-5">Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Integer consequat leo sit
              amet dolor tempor, sed
              fermentum neque commodo. In mollis rutrum hendrerit.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- conteudo 4 - Se places you've never been before -->
    <section class="p-24 flex flex-col items-center justify-center ">
      <div class="mb-12 flex-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-airplane-fill"
          viewBox="0 0 16 16">
          <path
            d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849" />
        </svg>
      </div>
      <div class="max-w-[400px] flex-1">
        <p class="font-playfair text-left font-bold text-5xl">Se places you've <i class="underline">never</i> been before
        </p>
      </div>
      <p class="mt-12 font-bold text-xs">Lorem ipsum dolor sit amet|Lorem ipsum dolor sit amet</p>
    </section>

    <!-- conteudo 5 - Se places you've never been before -->
    <section class="p-24">
      <div class="flex flex-row gap-x-12">
        <div>
          <img class="max-w-sm h-auto" src="https://i.pinimg.com/736x/84/d3/59/84d3595da70cbf829a9a92683b34bada.jpg" />
        </div>

        <div class="flex justify-start flex-col items-start">
          <div class="mb-24">
            <img class="max-w-sm h-auto" src="https://vocenaneve.com.br/wp-content/uploads/2022/07/Denali-1.jpg" />
          </div>

          <div class="flex-1 flex flex-row">

            <div class="flex-1">
              <p class="leading-relaxed underline font-bold font-playfair text-4xl">Lorem ipsum dolor sit amet,
                consectetur adipiscing
                elit.</p>
            </div>

            <div class="flex-1 ">
              <p class="text-travel-black leading-5 font-medium text-justify text-sm">Donec imperdiet varius aliquet.
                Quisque maximus
                semper velit in volutpat. Sed sit amet nisi ut ligula
                imperdiet tristique eu vitae erat. Suspendisse eget bibendum sapien.</p>

              <p class="text-travel-black font-medium leading-5 text-justify text-sm mt-6">Donec imperdiet varius aliquet.
                Quisque
                maximus semper velit in volutpat. Sed sit amet nisi ut ligula
                imperdiet tristique eu vitae erat. Suspendisse eget bibendum sapien.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- conteudo 6 - -->
    <section class="pl-24 pt-24 pb-24 pr-0 bg-travel-black">
      <div class="flex flex-row">
        <div class="flex-1">

          <div class="max-w-64 mb-16">
            <h1 class="text-3xl font-bold font-playfair text-travel-silver-background text-left">Choose anywhre you'd
              like to be</h1>
          </div>

          <div class="max-w-[400px]">
            <h1 class="font-bold text-lg text-travel-silver-background mb-6">Lorem ipsum dolor sit amet</h1>
            <p class="text-travel-silver-background text-justify text-sm">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer consequat leo sit amet dolor
              tempor, sed
              fermentum neque commodo. In mollis rutrum hendrerit. Donec imperdiet varius aliquet. </p>
          </div>

          <div class="max-w-[400px] mt-6">
            <h1 class="font-bold text-lg text-travel-silver-background mb-6">Lorem ipsum dolor sit amet</h1>
            <p class="text-travel-silver-background text-justify text-sm">Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer consequat leo sit amet dolor
              tempor, sed
              fermentum neque commodo. In mollis rutrum hendrerit. Donec imperdiet varius aliquet. </p>
          </div>
        </div>

        <div class="flex justify-end">
          <img class="max-w-auto h-full"
            src="https://img.freepik.com/fotos-premium/um-homem-no-topo-de-uma-montanha-com-montanhas-ao-fundo_401927-259.jpg" />
        </div>
      </div>
    </section>


    <!-- conteudo 7 - Lorem ipsum dolor consectetur adipiscing elit -->
    <section class="p-24 bg-travel-silver-background">
      <div class="flex flex-row gap-16">

        <div class="flex flex-col flex-1">
          <div class="flex-1 mb-12">
            <h1 class="text-3xl font-bold font-playfair text-travel-black text-justify">Lorem ipsum dolor<br>consectetur
              adipiscing elit</h1>
          </div>

          <div class="grid grid-rows-4 flex-1">

            <!-- linha 1 -->
            <div class="flex flex-col">
              <div class="w-full h-[2px] bg-travel-black"></div>
              <div class="flex mx-2 my-1 items-center">
                <div>
                  <p class="text-travel-black text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.</p>
                </div>
                <div class="flex-1 flex justify-end">
                  <p class=" text-3xl">+</p>
                </div>
              </div>
              <div class="w-full h-[2px] bg-travel-black"></div>
            </div>

            <!-- linha 2 -->
            <div class="flex flex-col">
              <div class="flex mx-2 my-1 items-center">
                <div>
                  <p class="text-travel-black text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.</p>
                </div>
                <div class="flex-1 flex justify-end">
                  <p class=" text-3xl">+</p>
                </div>
              </div>
              <div class="w-full h-[2px] bg-travel-black"></div>
            </div>

            <!-- linha 3 -->
            <div class="flex flex-col">
              <div class="flex mx-2 my-1 items-center">
                <div>
                  <p class="text-travel-black text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.</p>
                </div>
                <div class="flex-1 flex justify-end">
                  <p class=" text-3xl">+</p>
                </div>
              </div>
              <div class="w-full h-[2px] bg-travel-black"></div>
            </div>

            <!-- linha 4 -->
            <div class="flex flex-col">
              <div class="flex mx-2 my-1 items-center">
                <div>
                  <p class="text-travel-black text-sm font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.</p>
                </div>
                <div class="flex-1 flex justify-end">
                  <p class=" text-3xl">+</p>
                </div>
              </div>
              <div class="w-full h-[2px] bg-travel-black"></div>
            </div>
          </div>
        </div>

        <div class="flex-1 flex justify-end">
          <img class="max-w-auto h-full"
            src="https://img.freepik.com/fotos-premium/um-homem-no-topo-de-uma-montanha-com-montanhas-ao-fundo_401927-259.jpg" />
        </div>
      </div>
    </section>

    <!-- conteudo 8 - Lorem ipsum dolor consectetur adipiscing elit -->
    <section class="p-24 bg-travel-silver-background">
      <div class="flex flex-col flex-1">
        <div class="flex-1 mb-12">
          <h1 class="text-3xl font-bold font-playfair text-travel-black text-center">Here's what they<br>have to say ...
          </h1>
        </div>

        <div class="grid grid-cols-3 gap-6">
          <div class=" border-2 rounded-[20px] flex flex-col items-center justify-center p-12">
            <div class="flex-1">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" fill="currentColor"
                  class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </div>
            </div>


            <div class="flex-1 text-center mt-6">
              <h1 class="font-bold">Customer Name</h1>
              <p class="mt-4 text-travel-silver">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                consequat leo sit amet
                dolor tempor.</p>
            </div>
          </div>

          <div class=" border-2 rounded-[20px] flex flex-col items-center justify-center p-12">
            <div class="flex-1">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" fill="currentColor"
                  class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </div>
            </div>


            <div class="flex-1 text-center mt-6">
              <h1 class="font-bold">Customer Name</h1>
              <p class="mt-4 text-travel-silver">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                consequat leo sit amet
                dolor tempor.</p>
            </div>
          </div>

          <div class=" border-2 rounded-[20px] flex flex-col items-center justify-center p-12">
            <div class="flex-1">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" fill="currentColor"
                  class="bi bi-person-circle" viewBox="0 0 16 16">
                  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                  <path fill-rule="evenodd"
                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
              </div>
            </div>


            <div class="flex-1 text-center mt-6">
              <h1 class="font-bold">Customer Name</h1>
              <p class="mt-4 text-travel-silver">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                consequat leo sit amet
                dolor tempor.</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- conteudo 9 - Lorem ipsum dolor consectetur adipiscing elit -->
    <section class="p-24 bg-travel-silver-background">
      <div class="flex flex-row gap-x-16">

        <div class="flex flex-col flex-1">
          <div class="flex-1">
            <h1 class="text-3xl font-bold font-playfair text-travel-black text-justify">Be, update!</h1>
          </div>

          <div class="flex-1 mt-12">
            <form>
              <input class="w-full px-5 py-3 placeholder-travel-black border-2 bg-travel-silver-background rounded-md"
                type="text" placeholder="First Name*" />

              <input
                class="w-full px-5 py-3 my-3 placeholder-travel-black border-2 bg-travel-silver-background rounded-md"
                type="text" placeholder="Last Name*" />

              <input class="w-full px-5 py-3 placeholder-travel-black border-2 bg-travel-silver-background rounded-md"
                type="text" placeholder="Email Name*" />

              <button class="w-full btn  mt-6 btn-black">Submit email</button>
            </form>
          </div>
        </div>

        <div class="flex-1 flex justify-end">
          <img class="max-w-3xl h-full"
            src="https://img.freepik.com/fotos-premium/um-homem-no-topo-de-uma-montanha-com-montanhas-ao-fundo_401927-259.jpg" />
        </div>
      </div>
    </section>
  </main>

  <footer class="p-24 bg-travel-silver">
    <div>
      <div class="flex flex-row">
        <div class="flex-1">
          <h1 class="text-3xl font-bold font-playfair text-travel-black text-justify">My Log Travels</h1>
        </div>

        <div class=" flex flex-col flex-1">
          <div>
            <h1>Quick Links</h1>
          </div>

          <div class="grid grid-cols-4 gap-12">
            <div class="mt-4">
              <p class="text-sm cursor-pointer text-travel-black">Home</p>
              <p class="text-sm cursor-pointer text-travel-black mt-2">About Us</p>
              <p class="text-sm cursor-pointer text-travel-black mt-2">My Travel Logs</p>
            </div>

            <div class="mt-4">
              <p class="text-sm cursor-pointer text-travel-black">Travel</p>
              <p class="text-sm cursor-pointer text-travel-black mt-2">Promo Flights</p>
              <p class="text-sm cursor-pointer text-travel-black mt-2">Travel Routes</p>
            </div>

            <div class="mt-4">
              <p class="text-sm cursor-pointer text-travel-black">Recomendations</p>
              <p class="text-sm cursor-pointer text-travel-black mt-2">Guides</p>
              <p class="text-sm cursor-pointer text-travel-black mt-2">Blogs</p>
            </div>


            <div class="mt-4">
              <p class="text-sm cursor-pointer text-travel-black">Mission Statement</p>
              <p class="text-sm cursor-pointer text-travel-black mt-2">The Team</p>
              <p class="text-sm cursor-pointer text-travel-black mt-2">Contact Us</p>
            </div>



          </div>

        </div>
      </div>
    </div>
  </footer>
</template>


<script>
import img from './assets/img_lugar1.jpg'
import lapis from './assets/lapis.jpg'


export default {
  data() {
    return {
      image_lugar_1: img,
      image_lapis: lapis
    }
  }
}
</script>