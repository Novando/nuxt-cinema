<script setup lang="ts">
  import Reservator from "~/components/reservation/Reservator.vue"
  import VueDatePicker from '@vuepic/vue-datepicker'
  import '@vuepic/vue-datepicker/dist/main.css'
  import dayjs from "dayjs";
  import type {SeatDTO} from "~/types/seats";
  import Multiselect from "vue-multiselect";
  import 'vue-multiselect/dist/vue-multiselect.min.css'

  const route = useRoute()
  const isLoading = ref(false)
  const date = ref<Date|undefined>()
  const screen = ref<SeatDTO|undefined>()
  const screenOptions = ref<SeatDTO[]>([])

  watch(date, () => getScreen())

  const format = (date: Date) => dayjs(date).format('DD MMM YYYY')
  const getScreen = async () => {
    isLoading.value = true
    try {
      const res = await get('/screen', {
        date: dayjs(date.value).format('YYYY-MM-DD'),
        movieId: route.params.movieId
      })
      screenOptions.value = listBuilder(res.data.keys, res.data.values)
      for (const i of screenOptions.value) {
        i.startedAt = dayjs(i.startedAt).format('HH:mm:ss')
      }
      screen.value = undefined
    } catch (x_x) {
      console.log(x_x)
    } finally {
      isLoading.value = false
    }
  }
</script>

<template>
  <main id="reservation" class="py-20">
    <section class="mx-auto w-80">
      <label>
        <p class="mb-2">Tanggal Nonton</p>
        <VueDatePicker
          class="mb-8"
          v-model="date"
          :disabled="isLoading"
          :enable-time-picker="false"
          :auto-apply="true"
          :format="format"
          :min-date="new Date()"
          :max-date="dayjs().add(1, 'w').toDate()"/>
      </label>
      <div v-if="date">
        <p class="mb-2">Pilih Jam</p>
        <Multiselect
          :allow-empty="false"
          v-model="screen"
          :options="screenOptions"
          track-by="id"
          label="startedAt"
        />
      </div>
    </section>
    <section v-if="screen" class="">
      <Reservator :selectedCinema="screen" />
    </section>
  </main>
</template>