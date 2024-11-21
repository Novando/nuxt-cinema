<script setup lang="ts">
  import ToastNoty from "~/components/common/ToastNoty.vue";
  import axios from "axios";

  const toast = useToastStore()

  const inTrouble = ref(true);

  onBeforeMount(async () => {
    try {
      await get(`/generate`)
      // inTrouble.value = false
    } catch (x_x) {
      toast.addToast('Oops, sites in trouble')
    }
  })

  const notifyMe = async () => {
    await axios.post(
      'https://discord.com/api/webhooks/1158071302905667736/v0K_0i5soip5PjxspCdJrQE9RrLfZkQaAYSTQxYXwczMH5w_EFub9a-EarPowHPdoyaG',
      { content: 'sentausa mati WOYYY' },
    )
  }
</script>

<template>
  <section class="bg-[#0f0f0f] text-[#fefefe] min-h-screen">
    <NuxtPage />
    <section v-if="inTrouble" class="fixed z-20 bg-rose-800 bottom-1 right-1">
      <button @click="notifyMe" class="p-4 rounded-full">Situs bermasalah?</button>
    </section>
    <ToastNoty />
  </section>
</template>
