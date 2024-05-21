<template>
  <q-page class="flex flex-center q-pa-md">
    <q-card>
      <q-card-section>
        <q-list bordered padding>
          <q-item v-for="user in users" :key="user.id">
            <q-item-section>
              <q-item-label>{{ user.name }}</q-item-label>
              <q-item-label caption>{{ user.email }}</q-item-label>
              <q-item-label caption>{{ user.phone }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { useUserStore } from "src/stores/userStore";
import { computed, onMounted } from "vue";

// UserStore'u kullanarak kullanıcıları çekiyoruz
const userStore = useUserStore();
// Kullanıcıları computed ile alıyoruz
const users = computed(() => userStore.users);
// Veri çekme işlemini bileşen yüklendiğinde başlatmak için onMounted kullanıyoruz
onMounted(() => {
  userStore.fetchUsers();
});
</script>
