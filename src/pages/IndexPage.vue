<template>
  <h3 class="text-center text-blue">Quasar Vue 3 Example</h3>
  <div class="q-pa-md example-column-mix-and-match">
    <div class="q-gutter-md">
      <div class="q-col col-6">
        <div class="q-pa-md q-mx-auto" style="max-width: 600px">
          <q-list bordered class="rounded-borders">
            <q-expansion-item
              expand-separator
              icon="warning"
              label="Website WARNING!"
              caption="Lütfen Burayı Okuyunuz!"
              header-class="text-red"
            >
              <q-card>
                <q-card-section style="color: red">
                  Bu web sitesi çalışma örneğidir. Gerçek bir site değildir.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="local_mall"
              label="Alışveriş Sayfası"
              header-class="text-blue"
            >
              <q-card>
                <q-card-section class="text-info">
                  Alışveriş Sayfasına Gitmek İçin:
                  <q-btn
                    :loading="loading"
                    icon-right="send"
                    :size="btnsize"
                    color="primary"
                    @click="simulateProgress"
                    style="width: 100px"
                  >
                    Products
                    <template v-slot:loading>
                      <q-spinner-hourglass class="on-left" />
                      Loading...
                    </template>
                  </q-btn>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-expansion-item
              expand-separator
              icon="account_circle"
              label="Bağlantılarım"
              header-class="text-purple"
            >
              <q-card>
                <q-card-section>
                  <a
                    href="https://github.com/kaankaltakkiran"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/bubbles/50/github.png"
                      alt="github"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/?locale=tr_TR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/bubbles/50/facebook-new.png"
                      alt="facebook-new"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      width="50"
                      height="50"
                      src="https://img.icons8.com/bubbles/50/instagram-new--v2.png"
                      alt="instagram-new--v2"
                    />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      width="48"
                      height="48"
                      src="https://img.icons8.com/color/48/twitterx--v1.png"
                      alt="twitterx--v1"
                    />
                  </a>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
        </div>
      </div>
    </div>

    <div class="q-pa-md">
      <q-carousel
        arrows
        animated
        :autoplay="autoplay"
        v-model="slide"
        infinite
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        height="500px"
      >
        <q-carousel-slide name="first" img-src="img/mountains.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">First stop</div>
            <div class="text-subtitle1">Mountains</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="second" img-src="img/parallax1.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Second stop</div>
            <div class="text-subtitle1">Famous City</div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="third" img-src="img/quasar.jpg">
          <div class="absolute-bottom custom-caption">
            <div class="text-h2">Third stop</div>
            <div class="text-subtitle1">Famous Bridge</div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const loading = ref(false);
const btnsize = ref("sm");
const slide = ref("first");
const autoplay = ref(true);
import { useRouter } from "vue-router";

const router = useRouter();
defineOptions({
  name: "IndexPage",
});

function simulateProgress() {
  // Yükleme durumunu ayarlıyoruz
  loading.value = true;

  // Gecikme simüle ediyoruz
  setTimeout(() => {
    // İşimizi bitirdik, yükleme durumunu sıfırlıyoruz
    loading.value = false;
    // Navigate to '/products'
    router.push("/prodcuts");
  }, 3000);
}
</script>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
