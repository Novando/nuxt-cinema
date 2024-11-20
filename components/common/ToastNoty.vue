<script setup lang="ts">
import {type ToastType, useToastStore} from '~/utils/toast';

  const toastStore = useToastStore();

  const toasts = toastStore.toasts;

  function removeToast(id: number) {
    toastStore.removeToast(id);
  }

  function toastClasses(type: ToastType) {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'error':
        return 'bg-red-500';
      case 'info':
        return 'bg-blue-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  }
</script>

<template>
  <div class="fixed top-4 right-4 z-50 space-y-4">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="['p-4 rounded shadow-lg text-white', toastClasses(toast.type)]">
      <div class="flex justify-between items-center">
        <span>{{ toast.message }}</span>
        <button @click="removeToast(toast.id)" class="ml-4 text-white hover:text-gray-300">
          ✖
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>