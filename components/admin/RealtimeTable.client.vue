<script setup lang="ts">
  import type {OrderDTO} from "~/types/admin";
  import dayjs from "dayjs";
  import { io } from 'socket.io-client'
  import Loading from "~/components/common/svg/Loading.vue";

  const rc = useRuntimeConfig().public
  const router = useRouter()
  const socket = io(`${rc.wsUrl}`, { transports: ['polling'] });

  const orderData = ref<OrderDTO[]>([])
  const isLoading = ref(true)

  const toast = useToastStore()
  onBeforeMount(() => getData())

  socket.on("newBooking", (arg) => appendBook(arg))


  const appendBook = (arg: OrderDTO) => {
    orderData.value = [arg, ...orderData.value]
  }

  const getData = async () => {
    try {
      const res = await getApiKey('/order')
      orderData.value = listBuilder(res.data.keys, res.data.values)
    } catch (x_x: any) {
      console.log(x_x)
      if (x_x.status === 401) {
        return await router.push('/logout')
      }
      toast.addToast(x_x.message, 'error')
    } finally {
      isLoading.value = false
    }
  }
</script>

<template>
  <nav class="bg-white text-black w-full">
    <section class="flex items-center justify-between py-4 px-4 lg:px-0 lg:max-w-7xl mx-auto">
      <p class="text-2xl font-bold">ISEKAI</p>
      <section class="flex items-center gap-10">
        <NuxtLink to="/" class="hover:text-neutral-900">
          Menu Utama
        </NuxtLink>
        <NuxtLink to="/logout" class="py-2 px-6 font-semibold rounded text-white bg-rose-800 hover:bg-rose-700 transition-colors">
          Keluar
        </NuxtLink>
      </section>
    </section>
  </nav>
  <section v-if="isLoading">
    <Loading class="mx-auto" />
  </section>
  <section v-else class="overflow-x-scroll mx-4">
    <table v-if="orderData.length > 0" class="my-20 mx-auto text-nowrap border rounded">
      <thead>
      <tr class="bg-rose-700">
        <th class="p-4">No</th>
        <!--          <th class=p-4>ID</th>-->
        <th class="p-4">Nama</th>
        <th class="p-4">Judul Film</th>
        <th class="p-4">Waktu Nonton</th>
        <th class="p-4">Kursi</th>
        <!--          <th class=p-4>Harga</th>-->
        <!--          <th class=p-4>Aksi</th>-->
      </tr>
      </thead>
      <tbody>
      <tr v-for="(datum, i) in orderData" :key="datum.id" :class="i % 2 === 1 ? 'bg-neutral-700' : ''">
        <td class="p-4">{{ i + 1 }}</td>
        <!--          <td class=p-4>{{ datum.id }}</td>-->
        <td class="p-4">{{ datum.orderBy }}</td>
        <td class="p-4">{{ datum.title }}</td>
        <td class="p-4">{{ dayjs(datum.start).format('D MMM YYYY, HH:mm:ss') }}</td>
        <td class="p-4">{{ datum.seats.join(', ') }}</td>
        <!--          <td class=p-4>{{ datum.price }}</td>-->
      </tr>
      </tbody>
    </table>
    <section v-else class="max-w-7xl mx-auto mt-60">
      <p class="text-center text-2xl">Belum ada penonton</p>
    </section>
  </section>
</template>