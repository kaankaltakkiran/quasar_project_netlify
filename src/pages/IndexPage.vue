<template>
  <h3 class="text-center text-blue">Quasar Vue 3 Example</h3>
  <div class="q-pa-md example-column-mix-and-match">
    <div class="q-gutter-md">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6">
        <!-- Alert Section Start -->
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
          <!-- Alert Section End -->
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6">
        <div class="q-pa-md">
          <q-stepper v-model="step" ref="stepper" color="primary" animated>
            <q-step
              :name="1"
              title="Select campaign settings"
              icon="settings"
              :done="step > 1"
            >
              For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.
            </q-step>

            <q-step
              :name="2"
              title="Create an ad group"
              caption="Optional"
              icon="create_new_folder"
              :done="step > 2"
            >
              An ad group contains one or more ads which target a shared set of
              keywords.
            </q-step>

            <q-step :name="3" title="Ad template" icon="assignment" disable>
              This step won't show up because it is disabled.
            </q-step>

            <q-step :name="4" title="Create an ad" icon="add_comment">
              Try out different ad text to see what brings in the most
              customers, and learn how to enhance your ads using features like
              ad extensions. If you run into any problems with your ads, find
              out how to tell if they're running and how to resolve approval
              issues.
            </q-step>

            <template v-slot:navigation>
              <q-stepper-navigation>
                <q-btn
                  @click="$refs.stepper.next()"
                  color="primary"
                  :label="step === 4 ? 'Finish' : 'Continue'"
                />
                <q-btn
                  v-if="step > 1"
                  flat
                  color="primary"
                  @click="$refs.stepper.previous()"
                  label="Back"
                  class="q-ml-sm"
                />
              </q-stepper-navigation>
            </template>
          </q-stepper>
        </div>
      </div>
    </div>
    <!-- Web Site Comment Start -->
    <h3 class="text-center text-h4 text-red">Başlıca Site Yorumları</h3>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-4">
        <div class="q-pa-md" style="max-width: 400px">
          <q-chat-message
            class="text-positive text-h6"
            name="Web Site Sahibi"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="['Merhaba Jane, Web sitemizi nasıl buldunuz?']"
            stamp="7 minutes ago"
            sent
            bg-color="amber-7"
          />
          <q-chat-message
            class="text-accent text-h6"
            name="Jane"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['Oldukça güzel, teşekkür ederim.']"
            stamp="4 minutes ago"
            text-color="white"
            bg-color="primary"
          />
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="q-pa-md" style="max-width: 400px">
          <q-chat-message
            class="text-positive text-h6"
            name="Web Site Sahibi"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="['Merhaba Julie, Web sitemizi nasıl buldunuz?']"
            stamp="3 minutes ago"
            sent
            bg-color="amber-7"
          />
          <q-chat-message
            class="text-accent text-h6"
            name="Julie"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['Ben de aynı fikirdeyim.']"
            stamp="1 minutes ago"
            text-color="white"
            bg-color="primary"
          />
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="q-pa-md" style="max-width: 400px">
          <q-chat-message
            class="text-positive text-h6"
            name="Web Site Sahibi"
            avatar="https://cdn.quasar.dev/img/avatar1.jpg"
            :text="['Merhaba Julian, Web sitemizi nasıl buldunuz?']"
            stamp="7 minutes ago"
            sent
            bg-color="amber-7"
          />
          <q-chat-message
            class="text-accent text-h6"
            name="Julian"
            avatar="https://cdn.quasar.dev/img/avatar5.jpg"
            :text="['Daha iyisi olamazdı. Teşekkür ederim.']"
            stamp="4 minutes ago"
            text-color="white"
            bg-color="primary"
          />
        </div>
      </div>
    </div>
    <!-- Web Site Comment End -->
    <!-- Carousel Start -->
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
      <!-- Carousel End -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
/* Carousel Default Value */
const loading = ref(false);
const step = ref(1);
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
