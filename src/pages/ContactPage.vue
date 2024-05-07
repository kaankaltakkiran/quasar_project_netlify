<template>
    <q-page>
      <q-page-container class="q-gutter-md">
    <div class="q-pa-md example-column-mix-and-match">
      <div class="q-gutter-md">
      <div class="q-col col-6">
        <div class="q-pa-md q-mx-auto" style="max-width: 600px;">
              <h2 class="text-center text-blue">Contact Page</h2>
              <q-form @submit="submitForm">
                <q-input v-model="name" label="Name" />
                <q-input v-model="email" label="Email" type="email" />
                <q-input v-model="message" label="Message" type="textarea" />
                <q-btn class="q-mt-md" type="submit" label="Submit" color="primary" />
              </q-form>
              <p class="q-mt-md text-secondary text-h6">Donanmacı, Otopark, 35580 Karşıyaka/İzmir</p>
              <my-map />

            </div>
            </div>
            </div>
            </div>


      </q-page-container>
    </q-page>
  </template>
  
  <script setup>
import { ref } from 'vue';
import MyMap from 'components/MyMap.vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  // Form submission logic here
  console.log('Form submitted');
}
</script>
