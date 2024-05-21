// src/stores/userStore.js
import { defineStore } from "pinia";
import jsonData from "src/api/data.json"; // Import the json data

// Define the post store
export const usePostStore = defineStore("postStore", {
  state: () => ({
    posts: [],
  }),
  actions: {
    async fetchPosts() {
      try {
        this.posts = jsonData;
        console.log(this.posts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    },
  },
});
