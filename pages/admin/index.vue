<script setup lang="ts">
  import type {OrderDTO} from "~/types/admin";
  import dayjs from "dayjs";

  onMounted(() => getData())

  const orderData = ref<OrderDTO[]>([])

  const getData = async () => {
    const res = await get('/order')
    orderData.value = listBuilder(res.data.keys, res.data.values)
  }
</script>

<template>
  <main id="ordered-list">
    <table>
      <thead>
        <tr>
          <th>No</th>
<!--          <th>ID</th>-->
          <th>Nama</th>
          <th>Judul Film</th>
          <th>Waktu Nonton</th>
          <th>Kursi</th>
<!--          <th>Harga</th>-->
<!--          <th>Aksi</th>-->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(datum, i) in orderData" :key="datum.id">
          <td>{{ i }}</td>
<!--          <td>{{ datum.id }}</td>-->
          <td>{{ datum.orderBy }}</td>
          <td>{{ datum.title }}</td>
          <td>{{ dayjs(datum.start).format('D MMM YYYY, HH:mm:ss') }}</td>
          <td>{{ datum.seats.join(', ') }}</td>
<!--          <td>{{ datum.price }}</td>-->
        </tr>
      </tbody>
    </table>
  </main>
</template>