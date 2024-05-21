// src/stores/userStore.js
import { defineStore } from "pinia";
import { api } from "src/boot/axios"; // Import the axios instance

// Define the user store
export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: [],
  }),
  actions: {
    async fetchUsers() {
      try {
        //https://jsonplaceholder.typicode.com/users adresine GET isteği gönderir
        const response = await api.get("/users");
        this.users = response.data;
        console.log(this.users);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    },
  },
});
