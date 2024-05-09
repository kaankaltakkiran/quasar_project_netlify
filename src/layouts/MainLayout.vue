<template>
  <q-layout view="lHh Lpr lFf">
    <div>
      <q-toolbar class="bg-blue text-white shadow-2 rounded-borders">
        <q-btn to="/" exact flat label="Homepage" />
        <q-space />
        <q-tabs v-model="tab" shrink>
          <q-route-tab to="/" exact name="anasayfa" label="Anasayfa" />
          <q-route-tab to="/prodcuts" exact name="ürünler" label="Ürünler" />
          <q-route-tab to="/contact" exact name="iletişim" label="İletişim" />
          <q-route-tab to="/deneme" exact name="deneme" label="Deneme" />
        </q-tabs>
      </q-toolbar>
    </div>
    <AppFooter />
    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import AppFooter from "src/components/Footer.vue";
const tab = ref("anasayfa");
defineOptions({
  name: "MainLayout",
});
</script>
