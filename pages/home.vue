<script setup lang="ts">
  import Hero from "~/components/home/Hero.vue";
  import USP from "~/components/home/USP.vue";
  import Promo from "~/components/home/Promo.vue";
  import Footer from "~/components/common/Footer.vue";
</script>

<template>
  <main>
    <nav class="bg-black w-full">
      <section class="flex justify-between py-4 max-w-7xl mx-auto">
        <ul class="flex gap-8">
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
        <div>
          login
        </div>
      </section>
    </nav>
    <Hero />
    <USP />
    <Promo />
    <Footer />
  </main>
</template>