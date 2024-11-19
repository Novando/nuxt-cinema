<script setup lang="ts">
  const router = useRouter()

  const isShow = ref(false)
  const credential = reactive({
    user: '',
    pass: '',
  })

  onBeforeMount(() => router.replace('/admin'))

  const login = async () => {
    try {
      const res = await post('/login', credential)
      setCookie('apiKey', res.data, 60 * 24 * 90)
      return await router.replace('/admin')
    } catch (x_x) {
      console.log(x_x)
    }
  }
</script>

<template>
  <main id="login" class="py-20">
    <form @submit.prevent="login" class="border rounded-3xl py-6 px-12 min-w-80 w-fit mx-auto">
      <h1 class="text-2xl mb-4">Login</h1>
      <label>
        <p class="mb-2">Username</p>
        <input v-model="credential.user" class="rounded px-4 py-2 bg-white text-[#0f0f0f] mb-4" />
      </label>
      <div class="relative mb-10">
        <div class="absolute flex flex-row-reverse items-end right-0 bottom-0">
          <div @mousedown="isShow = true" @mouseup="isShow = false" @mouseout="isShow = false" class="cursor-pointer w-fit text-black font-bold m-2">
            <p>{{ isShow ? 'hide' : 'show' }}</p>
          </div>
        </div>
        <label>
          <p class="mb-2">Password</p>
          <input v-model="credential.pass" :type="isShow ? 'text' : 'password'" class="rounded px-4 py-2 bg-white text-[#0f0f0f]" />
        </label>
      </div>
      <div class="w-full flex flex-row-reverse">
        <button @click="login" class="md:mx-0 flex items-center hover:bg-rose-700 transition-colors gap-4 bg-rose-800 px-6 py-2 rounded-full font-semibold">
          <span>Masuk</span>
        </button>
      </div>
    </form>
  </main>
</template>