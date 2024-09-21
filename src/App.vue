<template>

  <div class="w-full h-screen reative flex flex-col gap-y-12 justify-center items-center bg-gradient-to-tr from-myPurple-700 to-myPurple-100">
      <img class="w-64 sm:w-80" src="@/assets/logo_purple_white.png">

      <div class="absolute bottom-10">
        <p class="text-white/60 font-madeTommy ml-2 mb-5">Site em manutenção! Voltamos em breve.</p>
        <SocialMedia class="opacity-60"/>
      </div>
      
  </div>

</template>

<script setup>
  import SocialMedia from '@/components/SocialMedia.vue'
  
</script>

<style scoped>

</style>
