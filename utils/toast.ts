import { defineStore } from 'pinia';

export type ToastType = 'success' | 'error' | 'info' | 'warning'
export type Toast = {
  id: number;
  message: string;
  type: ToastType;
  duration?: number; // Duration in ms
};

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [] as Toast[], // List of active toasts
    nextId: 1, // Unique ID for each toast
  }),
  actions: {
    addToast(message: string, type: ToastType = 'info', duration = 3000) {
      const id = this.nextId++;
      this.toasts.push({ id, message, type, duration });
      setTimeout(() => this.removeToast(id), duration); // Auto-remove toast after duration
    },
    removeToast(id: number) {
      console.log('removed toast ', id)
      console.log(this.toasts);
      this.toasts = this.toasts.filter((toast) => toast.id !== id);
      console.log(this.toasts);
    },
  },
});
