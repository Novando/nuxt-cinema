<script setup lang="ts">
  import RightChevronCircle from "~/components/common/svg/RightChevronCircle.vue";
  import LeftChevronCircle from "~/components/common/svg/LeftChevronCircle.vue";


  const sliders = ref([
    {
      title: 'FREE Popcorn',
      msg: 'Gratis popcorn tiap pembelian 2 tiket melalui aplikasi. Tidak berlaku kelipatan.',
    },
    {
      title: 'Buy 3, Get 1',
      msg: 'Gratis 1 tiket untuk pembelian 3 tiket melalui aplikasi. Tidak berlaku keliptan.',
    },
    {
      title: 'Weekend Setengah Harga',
      msg: 'Spesial Grand Opening, dapatkan potongan 50% untuk tiket weekend, selama bulan November 2024.',
    },
  ])

  const option = ref({
    rewind: true,
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '1em',
  })

  const shortStr = (val: string) => {
    return `${val.slice(0, 64)}...`
  }
</script>

<template>
  <section id="promo" class="bg-neutral-900">
    <section class="py-24 max-w-5xl mx-auto px-10 lg:px-0">
      <h2 class="text-3xl font-bold text-center mb-12">Promo</h2>
      <section class="hidden md:block">
        <ClientOnly>
          <splide :options="option">
            <splide-slide v-for="(item, i) in sliders" :key="i">
              <div class="bg-[#fefefe] text-[#0f0f0f] p-8 rounded-xl h-[21em]">
                <div class="h-40 w-full"></div>
                <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
                <p>{{ shortStr(item.msg) }}</p>
              </div>
            </splide-slide>
          </splide>
        </ClientOnly>
      </section>
      <section class="block md:hidden">
        <ClientOnly>
          <splide :options="{...option, perPage: 1}">
            <splide-slide v-for="(item, i) in sliders" :key="i">
              <div class="bg-[#fefefe] text-[#0f0f0f] p-8 rounded-xl h-[21em]">
                <div class="h-40 w-full"></div>
                <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
                <p>{{ shortStr(item.msg) }}</p>
              </div>
            </splide-slide>
          </splide>
        </ClientOnly>
      </section>
    </section>
  </section>
</template>