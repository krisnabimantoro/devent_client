<script setup lang="ts"></script>

<template>
  <div class="font-poppins">
    <nav class="flex py-4 px-20 w-screen fixed top-0 z-10 ease-in transition-colors bg-sec_primary" id="navbar">
      <div class="flex items-center justify-start">
        <div class="text-2xl font-bold text-white">
          <a href="#" id="logo">deVent</a>
        </div>
      </div>
      <div class="flex w-screen items-center justify-end">
        <div class="text-white">
          <a href="#home" class="list-nav mx-2 hover:text-sec_primary font-medium">Home</a>
          <<router-link :to="{name:'event.index'}"> 

            <a href="#discovery" class="list-nav mx-2 hover:text-sec_primary font-medium">Discovery</a>
          </router-link>
          <a href="#speaker" class="list-nav mx-2 hover:text-sec_primary font-medium">Speaker</a>
          <a href="#community" class="list-nav mx-2 hover:text-sec_primary font-medium">Community</a>
          <a href="#faq" class="list-nav mx-2 hover:text-sec_primary font-medium">FAQ</a>
        </div>

        <button class="ml-6 text-white px-6 py-2 rounded-md font-medium hover:bg-opacity-90 flex flex-row" id="btn-login">
          <img class="mr-3" src="@/assets/log-in.svg" alt="" />Login
        </button>
      </div>
    </nav>

    <router-view></router-view>
    <footer>
      <div class="w-screen h-96 bg-sec_primary flex px-20 py-16">
        <div class="flex flex-row w-full">
          <div class="flex flex-col w-1/4">
            <h1 class="text-white font-semibold text-5xl">deVent</h1>
            <h1 class="text-white font-base">
              "Experience the Future of Development: Collaborate, Create, and Connect at Our Dynamic Developer Events."
            </h1>
            <button class="mt-3 bg-white text-sec_primary px-1 py-2 rounded-md font-semibold hover:bg-opacity-90">let's gooo!!!</button>
          </div>

          <div class="flex flex-col w-1/4 ml-10 text-white font-medium space-y-5">
            <a href="">Home</a>
            <a href="">Discovery</a>
            <a href="">Speaker</a>
            <a href="">Community</a>
            <a href="">FAQ</a>
          </div>

          <div class="flex flex-col w-1/4 text-white space-y-5">
            <a href="">Instagram</a>
            <a href="">Facebook</a>
            <a href="">Tiktok</a>
            <a href="">X</a>
          </div>

          <div class="flex flex-col text-white pt12">
            <h1 class="font-medium text-xl">Have a problem?</h1>
            <button class="mt-3 bg-white text-sec_primary px-1 py-2 rounded-md font-semibold hover:bg-opacity-90">Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
  </div>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
