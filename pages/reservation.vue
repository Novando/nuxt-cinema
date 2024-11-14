<script setup lang="ts">
  import Reservator from "~/components/reservation/Reservator.vue"
  import VueDatePicker from '@vuepic/vue-datepicker'
  import '@vuepic/vue-datepicker/dist/main.css'

  const date = ref()
</script>

<template>
  <main id="reservation">
    <VueDatePicker v-model="date" />
    <Reservator :selectedCinema="'test'" />
  </main>
</template>