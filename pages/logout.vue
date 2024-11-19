<script setup lang="ts">
  import {delCookie} from "~/utils/cookie";

  const router = useRouter()

  onBeforeMount(() => {
    delCookie('apiKey')
    return router.push('/login')
  })
  onMounted(() => {
  })
</script>

<template>

</template>