<script setup lang="ts">
  const props = defineProps<{
    selectedCinema: string
  }>()

  watch(() => props.selectedCinema, (val) => {
    console.log('Not implemented')
  })

  const groupCols = ref([4, 4, 4])
  const row = ref(10)
  const selected = ref<string[]>([])
  const taken = ref(['A1', 'J12', 'D3'])
  const disabled = ref(['J1', 'J2', 'I1', 'I2'])

  const genCoor = (key: number, row: number, col: number) => {
    const colSum = groupCols.value.slice(0, key).reduce((acc, val) => acc + val, 0)
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
      <section v-for="(group, i) in groupCols" :key="i">
        <section v-for="r in row+1" class="flex items-center" :key="r">
          <section v-if="i === 0" class="w-10">
            {{ (r + 8).toString(36).toUpperCase().replace(/[^A-Z]/g, '') }}
          </section>
          <section v-for="col in group" class="flex w-20 h-20 p-2" :key="col">
            <p v-if="r === 1" class="flex items-center justify-center w-full h-full">{{ genCoor(i, r-1, col) }}</p>
            <div v-else-if="disabled.includes(genCoor(i, r-1, col))" class="flex items-center justify-center w-full h-full" />
            <div v-else-if="taken.includes(genCoor(i, r-1, col))" class="flex bg-red-700 items-center justify-center w-full h-full" />
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
  </section>
</template>