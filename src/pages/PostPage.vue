<template>
  <h2 class="text-center text-red">Card List</h2>
  <div class="q-pa-md row justify-center items-start q-gutter-md">
    <q-card
      v-for="post in posts"
      :key="post.id"
      class="col-12 col-sm-6 col-md-4 col-lg-3 my-card bg-secondary text-white"
    >
      <div class="flex flex-column q-pa-md">
        <q-card-section>
          <div class="text-h6">{{ post.title }}</div>
        </q-card-section>
        <q-card-section class="q-mt-auto">{{ post.body }}</q-card-section>
        <q-separator dark />
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { usePostStore } from "src/stores/postStore";
import { computed, onMounted } from "vue";

const postStore = usePostStore();
const posts = computed(() => postStore.posts);

onMounted(() => {
  postStore.fetchPosts();
});
</script>

<style scoped>
.my-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
