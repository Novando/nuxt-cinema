<script setup lang="ts">
  import type {MoviesDTO} from "~/types/reservation";
  import {shortStr} from "../utils/string";
  import RightArrow from "~/components/common/svg/RightArrow.vue";
  import Tiket from "~/components/common/svg/Tiket.vue";

  const movies = ref<MoviesDTO[]>()
  const getMovies = async () => {
    const res = await get('/now-playing')
    console.log(res)
    movies.value = listBuilder(res.data.keys, res.data.values)
  }

  onMounted(async () => await getMovies())
</script>

<template>
  <main>
    <section class="mx-auto max-w-7xl py-20">
      <h1 class="text-2xl font-bold mb-16">Sedang Tayang</h1>
      <section class="grid grid-cols-3 justify-items-center gap-10">
        <div v-for="m in movies" :key="m.id" class="rounded-3xl bg-neutral-700 px-14 py-8 w-full" >
          <div class="grid grid-cols-1 content-between h-full">
            <div>
              <img :src="m.poster" class="mx-auto mb-8" alt="poster"/>
              <p class="text-xl font-semibold mb-4">{{ m.title }}</p>
              <p class="mb-4">{{ shortStr(m.synopsis, 128) }}</p>
            </div>
            <NuxtLink :to="`/seats/${m.id}`" class="mx-auto flex items-center hover:bg-rose-700 transition-colors gap-4 bg-rose-800 px-6 py-2 rounded-full font-semibold">
              <span>Nonton</span>
              <Tiket />
            </NuxtLink>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>