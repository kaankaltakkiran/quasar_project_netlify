<template>
  <q-layout view="lHh Lpr lFf">
    <div>
      <!--Navbar Menu Start-->
      <q-toolbar class="bg-blue text-white shadow-2 rounded-borders">
        <a
          href="/"
          class="router-link-active router-link-exact-active doc-header__logo row items-center no-wrap cursor-pointer"
          aria-current="page"
          ><img
            class="doc-header__logo-img"
            src="https://cdn.quasar.dev/logo-v2/svg/logo-dark.svg"
            alt="Quasar Logo"
            width="48"
            height="48" /><img
            class="doc-header__logo-text q-ml-md"
            src="https://cdn.quasar.dev/logo-v2/svg/logotype-dark.svg"
            alt="Quasar Logo"
            width="150"
            height="20"
        /></a>

        <q-space />
        <q-tabs @click="showLoading" v-model="tab" shrink>
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
        <div class="q-mt-md">
          <q-fab
            v-model="fab2"
            label="Actions"
            vertical-actions-align="left"
            color="purple"
            icon="keyboard_arrow_down"
            direction="down"
          >
            <q-fab-action
              color="primary"
              @click="onClick"
              icon="mail"
              label="Email"
            />
            <q-fab-action
              color="secondary"
              @click="onClick"
              icon="alarm"
              label="Alarm"
            />
            <q-fab-action
              color="orange"
              @click="onClick"
              icon="airplay"
              label="Airplay"
            />
            <q-fab-action
              color="accent"
              @click="onClick"
              icon="room"
              label="Map"
            />
          </q-fab>
        </div>
        <q-btn
          flat
          dense
          @click="$q.fullscreen.toggle()"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          :label="$q.fullscreen.isActive ? 'TamEkran:Kapat' : 'TamEkran:Aç'"
          :no-caps="true"
          class="q-mr-sm"
        />

        <q-btn
          flat
          dense
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          :label="$q.dark.isActive ? 'Dark' : 'Light'"
          :no-caps="true"
          class="q-mr-sm"
        />

        <q-btn
          flat
          dense
          @click="showLoading"
          icon="hourglass_empty"
          label="Loading"
          :no-caps="true"
          class="q-mr-sm"
        />
      </q-toolbar>
      <!--Navbar Menu End-->
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
import { ref, onBeforeUnmount } from "vue";
import { useQuasar } from "quasar";
import AppFooter from "src/components/Footer.vue";
const tab = ref("anasayfa"); /* Default Tab */
/* Default Value */
const mobileData = ref(false);
const bluetooth = ref(false);
const fab2 = ref(false);
defineOptions({
  name: "MainLayout",
});
const $q = useQuasar();
let timer;
onBeforeUnmount(() => {
  if (timer !== void 0) {
    clearTimeout(timer);
    $q.loading.hide();
  }
});

const showLoading = () => {
  $q.loading.show({
    message:
      'Some important <b>process</b> is in progress.<br><span class="text-amber text-italic">Please wait...</span>',
    html: true,
  });

  // hiding in 1s
  timer = setTimeout(() => {
    $q.loading.hide();
    timer = void 0;
  }, 1000);
};
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
