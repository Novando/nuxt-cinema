<script setup lang="ts">
  import LocationDot from "~/components/common/svg/LocationDot.vue";
  import Phone from "~/components/common/svg/Phone.vue";
</script>

<template>
  <footer class="bg-neutral-800 pt-20 px-12 lg:px-0 pb-4">
    <section class="grid md:grid-cols-2 gap-4 mx-auto md:max-w-7xl mb-20">
      <section class="mb-20 md:mb-0">
        <h2 class="text-4xl font-black mb-8">Bioskop Isekai</h2>
        <div class="flex gap-2 mb-4">
          <LocationDot class="mt-1" />
          <div>
            <p>Jl. Singosari Raya, No.2A</p>
            <p>Kel. Wonodri, Kec. Semarang Selatan</p>
            <p>Kota Semarang, Jawa Tengah</p>
            <p>50242</p>
          </div>
        </div>
        <div class="flex gap-2">
          <Phone class="mt-1" />
          <p>(024) 55112233</p>
        </div>
      </section>
      <section class="flex flex-col gap-2">
        <p class="font-semibold text-xl">Site Shortcut</p>
        <NuxtLink to="/reservation">Pesan Tiket</NuxtLink>
        <NuxtLink to="/login">Masuk Admin</NuxtLink>
      </section>
    </section>
    <p class="col-span-2 text-center text-neutral-500">2024 (c) Bioskop Isekai. Made with proud by KkNov</p>
  </footer>
</template>