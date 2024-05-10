<template>
  <q-page>
    <!-- Breadcrumbs Start -->
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el to="/" exact label="Ana Sayfa" />
        <q-breadcrumbs-el to="/contact" label="İletişim" />
      </q-breadcrumbs>
      <!-- Breadcrumbs End -->
    </div>
    <q-page-container class="q-gutter-md">
      <div class="q-pa-md example-column-mix-and-match">
        <div class="q-gutter-md">
          <div class="q-col col-6">
            <div class="q-pa-md q-mx-auto" style="max-width: 600px">
              <!-- Contact Form Start -->
              <h2 class="text-center text-blue">Contact Page</h2>
              <q-form @submit.prevent="simulateSubmit">
                <q-input v-model="name" label="Name" />
                <q-input v-model="email" label="Email" type="email" />
                <q-input v-model="message" label="Message" type="textarea" />
                <div class="q-pa-md">
                  <div class="q-gutter-sm">
                    <q-checkbox
                      v-model="customModel"
                      color="secondary"
                      label="Do you agree with the terms & conditions?"
                      true-value="yes"
                      false-value="no"
                    />
                  </div>
                </div>
                <div class="q-pa-md">
                  <span class="text-h6 text-red">Pick a color:</span>
                  <q-badge color="grey-3" text-color="black" class="q-mb-sm">
                    {{ hex }}
                  </q-badge>

                  <q-color
                    v-model="hex"
                    default-view="palette"
                    :palette="[
                      '#019A9D',
                      '#D9B801',
                      '#E8045A',
                      '#B2028A',
                      '#2A0449',
                      '#019A9D',
                    ]"
                    class="my-picker"
                  />
                </div>
                <div class="q-pa-md">
                  <span class="text-h6 text-red">Pick a date:</span>
                  <div class="q-gutter-md">
                    <q-date
                      v-model="date"
                      :events="events"
                      :event-color="
                        (date) => (date[9] % 2 === 0 ? 'teal' : 'orange')
                      "
                    />
                  </div>
                </div>
                <q-file
                  filled
                  bottom-slots
                  v-model="model"
                  label="File Upload"
                  counter
                >
                  <template v-slot:prepend>
                    <q-icon name="cloud_upload" @click.stop.prevent />
                  </template>
                  <template v-slot:append>
                    <q-icon
                      name="close"
                      @click.stop.prevent="model = null"
                      class="cursor-pointer"
                    />
                  </template>

                  <template v-slot:hint> Dosya Boyutu </template>
                </q-file>
                <div class="row justify-center">
                  <q-btn
                    type="submit"
                    :loading="submitting"
                    label="Send Form"
                    class="q-mt-md"
                    color="teal"
                    icon-right="send"
                    size="md"
                  >
                    <template v-slot:loading>
                      <q-spinner-facebook />
                    </template>
                  </q-btn>
                </div>
              </q-form>
              <!-- Contact Form End -->
              <p class="q-mt-md text-secondary text-h6">
                Donanmacı, Otopark, 35580 Karşıyaka/İzmir
              </p>
              <!-- Map Start -->
              <MyMap />
              <!-- Map End -->
            </div>
          </div>
        </div>
      </div>
    </q-page-container>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import MyMap from "components/MyMap.vue";

/* Form Default Value */
const hex = ref("#019A9D");

const customModel = ref("no");
const submitting = ref(false);
const name = ref("");
const email = ref("");
const message = ref("");
const model = ref(null);
const date = ref("2019/02/01");
const events = [
  "2019/02/01",
  "2019/02/05",
  "2019/02/06",
  "2019/02/09",
  "2019/02/23",
];

const eventsFn = (date) => {
  if (
    date === "2019/02/01" ||
    date === "2019/02/05" ||
    date === "2019/02/06" ||
    date === "2019/02/09" ||
    date === "2019/02/23"
  ) {
    return true;
  }
  return false;
};

defineOptions({
  name: "ContactPage",
});
/* Form Submit */
function simulateSubmit() {
  submitting.value = true;

  setTimeout(() => {
    submitting.value = false;
  }, 3000);
}
</script>

<style scoped>
.my-picker {
  width: 100%;
}
</style>
