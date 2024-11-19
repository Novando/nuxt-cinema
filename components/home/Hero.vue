<script setup lang="ts">
  import RightArrow from "~/components/common/svg/RightArrow.vue";
  import {useToastStore} from "~/utils/toast";

  const noty = useToastStore()
</script>

<template>
  <section id="hero" class="relative min-h-screen overflow-hidden">
    <img src="/cinema.webp" alt="hero" class="absolute opacity-20"/>
    <div class="absolute flex justify-between items-center z-[1] w-full h-full max-w-5xl left-1/2 -translate-x-1/2">
      <section class="mx-auto md:mx-10 lg:mx-0 text-center md:text-left">
        <p class="font-medium mb-2">Nikmati film dengan nyaman</p>
        <h1 class="text-4xl font-black mb-8">Bioskop Isekai</h1>
        <button @click="noty.addToast('test')" class="mx-auto md:mx-0 flex items-center hover:bg-rose-700 transition-colors gap-4 bg-rose-800 px-6 py-2 rounded-full font-semibold">
          <span>Cek Film</span>
          <RightArrow />
        </button>
      </section>
    </div>
  </section>
</template>