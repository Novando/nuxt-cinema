<script setup lang="ts">
  import Home from '~/pages/home.vue'

  await navigateTo('/home', { replace: true, redirectCode: 301 })
</script>

<template>
  <Home />
</template>