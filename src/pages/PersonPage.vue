<template>
  <div>
    <ul v-if="users">
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
        {{ user.email }}
      </li>
    </ul>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: null,
    };
  },
  async mounted() {
    try {
      const response = await this.$api.get("/users");
      this.users = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
