<script setup lang="ts">
  import type {SeatDTO} from "~/types/seats";
  import Tiket from "~/components/common/svg/Tiket.vue";

  const router = useRouter()
  const props = defineProps<{
    selectedCinema: SeatDTO
  }>()

  const price = ref(0)
  const screen = ref<SeatDTO | undefined>()
  const selected = ref<string[]>([])
  const orderedBy = ref('')

  onMounted(() => setScreen(props.selectedCinema))
  watch(() => props.selectedCinema, (val) => setScreen(val))

  const setScreen = (val: SeatDTO) => {
    selected.value = []
    screen.value = val
    price.value = 0
  }

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
    calculate()
  }

  const select = (coor: string) => {
    selected.value.push(coor)
    calculate()
  }

  const calculate = () => {
    price.value = selected.value.length * props.selectedCinema.price
  }

  const processOrder = async () => {
    if (!screen.value) return
    try {
      const res = await post('/order', {
        screenId: screen.value.id,
        name: orderedBy.value,
        seats: selected.value,
      })
      return router.push(`/ticket/${res.data}`)
    } catch (x_x) {
      console.log(x_x)
    }
  }
</script>

<template>
  <section id="reservator" class="max-w-7xl mx-auto">
    <section class="flex justify-left mx-auto gap-8 mb-20">
      <section v-for="(group, i) in screen?.config" :key="i">
        <section v-for="r in (screen?.rows ?? -1)+1" class="flex items-center" :key="r">
          <section v-if="i === 0" class="w-10">
            {{ (r + 8).toString(36).toUpperCase().replace(/[^A-Z]/g, '') }}
          </section>
          <section v-for="col in group" class="flex w-20 h-20 p-2" :key="col">
            <p v-if="r === 1" class="flex items-center justify-center w-full h-full">{{ genCoor(i, r-1, col) }}</p>
            <div
              v-else-if="screen?.disabled.includes(genCoor(i, r-1, col))"
              class="flex items-center justify-center w-full h-full" />
            <div
              v-else-if="screen?.occupied.includes(genCoor(i, r-1, col))"
              class="flex bg-red-700 items-center justify-center w-full h-full cursor-not-allowed" />
            <div
              v-else-if="selected.includes(genCoor(i, r-1, col))"
              class="flex bg-green-800 items-center justify-center w-full h-full cursor-pointer"
              @click="unselect(genCoor(i, r-1, col))" >
              <span class="">{{ genCoor(i, r-1, col) }}</span>
            </div>
            <div
              v-else
              @click="select(genCoor(i, r-1, col))"
              class="flex bg-neutral-700 items-center justify-center w-full h-full cursor-pointer" />
          </section>
        </section>
      </section>
    </section>
    <section id="calculator" class="mx-auto max-w-7xl">
      <p class="text-4xl text-end mb-4">{{ Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(price) }}</p>
      <div class="w-fit mx-auto">
        <label class="mx-auto">
          <p class="mb-2">Nama Pemesan</p>
          <input v-model="orderedBy" type="text" class="py-2 px-4 bg-white mb-8 text-black rounded" placeholder="Nama Anda" />
        </label>
      </div>
      <button @click="processOrder" class="mx-auto flex items-center hover:bg-rose-700 transition-colors gap-4 bg-rose-800 px-6 py-2 rounded-full font-semibold">
        <span>Pesan Tiket</span>
        <Tiket />
      </button>
    </section>
  </section>
</template>