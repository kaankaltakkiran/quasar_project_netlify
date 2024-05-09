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
      <!-- place QPageScroller at end of page -->
      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
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

<style scoped>
.q-page-scroller {
  /* İsteğe bağlı: Sayfanın altından ne kadar yukarıda olmasını istiyorsanız ayarlayabilirsiniz */
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 999;
}
</style>
