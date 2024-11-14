<script setup lang="ts">
  import Tiket from "~/components/common/svg/Tiket.vue";
</script>

<template>
  <section id="usp" class="py-24">
    <section class="max-w-xl lg:max-w-5xl mx-auto mb-20">
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-8">
        <div>

        </div>
        <div>
          <h3 class="font-bold text-lg mb-2">Premier anime Jepang</h3>
          <p>
            Kami selalu menayangkan movie anime Jepang yang baru tiap musimnya,
            nantikan anime tersebut dengan selalu mengunjungi website kami.
          </p>
        </div>
      </section>
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-8">
        <div class="lg:order-last">

        </div>
        <div>
          <h3 class="font-bold text-lg mb-2">Cemilan yang selalu menemani</h3>
          <p>
            Kami menyediakan berbagai macam cemilan yang siap untuk kamu nikmati.
            Dapatkan <span class="font-bold">1 popcorn gratis</span> tiap pembelian 2 tiket noton
          </p>
        </div>
      </section>
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-8">
        <div>

        </div>
        <div>
          <h3 class="font-bold text-lg mb-2">Sinema yang lebih Privat</h3>
          <p>
            Kami menyediakan sinema dengan ukuran lebih lega dengan kapasitas penonton lebih sedikit
            untuk memberikan sensasi privat kepada tiap penonton
          </p>
        </div>
      </section>
    </section>
    <button class="mx-auto flex items-center hover:bg-rose-700 transition-colors gap-4 bg-rose-800 px-6 py-2 rounded-full font-semibold">
      Pesan Tiket
      <Tiket />
    </button>
  </section>
</template>