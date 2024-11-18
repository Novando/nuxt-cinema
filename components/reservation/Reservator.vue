<script setup lang="ts">
  import type {SeatDTO} from "~/types/seats";
  import Tiket from "~/components/common/svg/Tiket.vue";

  const props = defineProps<{
    selectedCinema: SeatDTO
  }>()

  onMounted(() => setScreen(props.selectedCinema))
  watch(() => props.selectedCinema, (val) => setScreen(val))

  const setScreen = (val: SeatDTO) => {
    selected.value = []
    screen.value = val
  }

  const screen = ref<SeatDTO | undefined>()
  const selected = ref<string[]>([])

  const genCoor = (key: number, row: number, col: number) => {
    const colSum = screen.value?.config.slice(0, key).reduce((acc, val) => acc + val, 0) ?? 0
    const newCol = col + colSum
    const rId = (9 + row).toString(36).toUpperCase()
    const cId = newCol.toString()
    return rId.replaceAll(/[^A-Z]/g, '') + cId
  }

  const unselect = (coor: string) => {
    const idx = selected.value.indexOf(coor)
    selected.value.splice(idx, 1)
  }
</script>

<template>
  <section id="reservator">
    <section class="flex justify-center mx-auto gap-8">
      <section v-for="(group, i) in screen?.config" :key="i">
        <section v-for="r in (screen?.rows ?? -1)+1" class="flex items-center" :key="r">
          <section v-if="i === 0" class="w-10">
            {{ (r + 8).toString(36).toUpperCase().replace(/[^A-Z]/g, '') }}
          </section>
          <section v-for="col in group" class="flex w-20 h-20 p-2" :key="col">
            <p v-if="r === 1" class="flex items-center justify-center w-full h-full">{{ genCoor(i, r-1, col) }}</p>
            <div v-else-if="screen?.disabled.includes(genCoor(i, r-1, col))" class="flex items-center justify-center w-full h-full" />
            <div v-else-if="screen?.occupied.includes(genCoor(i, r-1, col))" class="flex bg-red-700 items-center justify-center w-full h-full" />
            <div
              v-else-if="selected.includes(genCoor(i, r-1, col))"
              class="flex bg-green-800 items-center justify-center w-full h-full"
              @click="unselect(genCoor(i, r-1, col))" >
              <span>{{ genCoor(i, r-1, col) }}</span>
            </div>
            <div v-else @click="selected.push(genCoor(i, r-1, col))" class="flex bg-neutral-700 items-center justify-center w-full h-full" />
          </section>
        </section>
      </section>
    </section>
    <section id="calculator" class="mx-auto max-w-7xl">
      <p class="text-4xl">{{ Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(screen?.price ?? 0) }}</p>
      <button class="mx-auto flex items-center hover:bg-rose-700 transition-colors gap-4 bg-rose-800 px-6 py-2 rounded-full font-semibold">
        <span>Pesan Tiket</span>
        <Tiket />
      </button>
    </section>
  </section>
</template>