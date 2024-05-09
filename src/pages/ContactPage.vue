<template>
  <q-page>
    <div class="q-pa-md q-gutter-sm">
      <q-breadcrumbs>
        <q-breadcrumbs-el to="/" exact label="Ana Sayfa" />
        <q-breadcrumbs-el to="/contact" label="İletişim" />
      </q-breadcrumbs>
    </div>
    <q-page-container class="q-gutter-md">
      <div class="q-pa-md example-column-mix-and-match">
        <div class="q-gutter-md">
          <div class="q-col col-6">
            <div class="q-pa-md q-mx-auto" style="max-width: 600px">
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
              <p class="q-mt-md text-secondary text-h6">
                Donanmacı, Otopark, 35580 Karşıyaka/İzmir
              </p>
              <my-map />
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

const customModel = ref("no");
const submitting = ref(false);

const name = ref("");
const email = ref("");
const message = ref("");

defineOptions({
  name: "ContactPage",
});
function simulateSubmit() {
  submitting.value = true;

  setTimeout(() => {
    submitting.value = false;
  }, 3000);
}
</script>
