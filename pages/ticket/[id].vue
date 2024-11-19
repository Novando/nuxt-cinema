<script setup lang="ts">

import RightArrow from "~/components/common/svg/RightArrow.vue";
</script>

<template>
  <main id="ordered-ticket" class="py-20 w-full">
    <section class="mx-auto w-fit text-center">
      <h1 class="text-4xl mb-4">Pesanan anda telah diproses</h1>
      <p class="mb-10">Silahkan menuju ke kasir untuk menyelesaikan transaksi</p>
      <NuxtLink to="/" class="mx-auto flex w-fit items-center hover:bg-rose-700 transition-colors gap-4 bg-rose-800 px-6 py-2 rounded-full font-semibold">
        <span>Kembali ke Beranda</span>
        <RightArrow />
      </NuxtLink>
    </section>
  </main>
</template>