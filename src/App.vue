<template>

  <div
    class="w-full h-screen reative flex flex-col gap-y-12 justify-center items-center bg-gradient-to-tr from-myPurple-700 to-myPurple-100">
    <img class="w-64 sm:w-80" src="@/assets/logo_purple_white.png">

    <div class="absolute bottom-10">
      <p class="text-white/60 font-madeTommy ml-2 mb-5">Site em manutenção! Voltamos em breve.</p>

      <SocialMedia />

      <a class="group flex items-center gap-x-3 px-5 py-1 mt-5 text-lg font-madeTommy text-neutral-300/60 hover:text-neutral-300 rounded border border-myPurple-400 hover:bg-myPurple-400 transition-all cursor-pointer"
        href="mailto: thaleswebdev@gmail.com">
        <img class="w-4 opacity-60 group-hover:opacity-100 transition-all" src="@/assets/icons/envelope-fill-white.svg">
        thaleswebdev@gmail.com
      </a>
    </div>

  </div>

</template>

<script setup>
import SocialMedia from '@/components/SocialMedia.vue'

</script>

<style scoped></style>
