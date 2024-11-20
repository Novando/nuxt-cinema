<script setup lang="ts">
  import type {MoviesDTO} from "~/types/reservation";
  import {shortStr} from "../utils/string";
  import Tiket from "~/components/common/svg/Tiket.vue";
  import Loading from "~/components/common/svg/Loading.vue";

  const toast = useToastStore()
  const isLoading = ref(true)
  const movies = ref<MoviesDTO[]>()

  const getMovies = async () => {
    try {
      const res = await get('/now-playing')
      movies.value = listBuilder(res.data.keys, res.data.values)
      isLoading.value = false
    } catch (x_x: any) {
      toast.addToast(x_x.message, 'error')
    }
  }

  onMounted(async () => await getMovies())
</script>

<template>
  <main>
    <section class="mx-auto max-w-7xl py-20 px-8">
      <h1 class="text-2xl font-bold mb-16">Sedang Tayang</h1>
      <section v-if="isLoading" class="w-full h-full">
        <Loading class="mx-auto" />
      </section>
      <section v-else class="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-10">
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