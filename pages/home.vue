<script setup lang="ts">
  import Hero from "~/components/home/Hero.vue";
  import USP from "~/components/home/USP.vue";
  import Promo from "~/components/home/Promo.vue";
  import Footer from "~/components/common/Footer.vue";
</script>

<template>
  <main>
    <nav class="bg-black w-full">
      <section class="flex justify-between py-4 px-4 lg:px-0 lg:max-w-7xl mx-auto">
        <p class="text-2xl font-bold">ISEKAI</p>
      </section>
    </nav>
    <Hero />
    <USP />
    <Promo />
    <Footer />
  </main>
</template>