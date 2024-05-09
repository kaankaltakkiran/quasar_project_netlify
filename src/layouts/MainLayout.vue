<template>
  <q-layout view="lHh Lpr lFf">
    <div>
      <q-toolbar class="bg-blue text-white shadow-2 rounded-borders">
        <q-btn to="/" exact flat label="Ana Sayfa" />
        <q-space />
        <q-tabs v-model="tab" shrink>
          <q-route-tab to="/" exact name="anasayfa" label="Ana Sayfa" />
          <q-route-tab to="/prodcuts" exact name="ürünler" label="Ürünler" />
          <q-route-tab to="/contact" exact name="iletişim" label="İletişim" />
          <q-route-tab to="/deneme" exact name="deneme" label="Deneme" />
        </q-tabs>
        <q-btn dense color="purple" round icon="email" class="q-ml-md">
          <q-badge color="red" floating>4</q-badge>
        </q-btn>
        <div class="q-pa-md">
          <q-btn-dropdown class="glossy" color="purple" label="My Profile">
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Settings</div>
                <q-toggle v-model="mobileData" label="Use Mobile Data" />
                <q-toggle v-model="bluetooth" label="Bluetooth" />
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">John Doe</div>

                <q-btn
                  color="primary"
                  label="Logout"
                  push
                  size="sm"
                  v-close-popup
                />
              </div>
            </div>
          </q-btn-dropdown>
        </div>
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
const mobileData = ref(false);
const bluetooth = ref(false);
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
