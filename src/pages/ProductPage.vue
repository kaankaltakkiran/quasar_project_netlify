<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs>
      <q-breadcrumbs-el to="/" exact label="Ana Sayfa" />
      <q-breadcrumbs-el to="/prodcuts" label="Ürünler" />
    </q-breadcrumbs>
  </div>
  <h3 class="text-center text-red">Products</h3>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card
      class="my-card"
      flat
      bordered
      v-for="(card, index) in cards"
      :key="index"
    >
      <q-img :src="card.image" />

      <q-card-section>
        <div class="text-overline text-orange-9">Product</div>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ card.title }}</div>
        <div class="text-caption text-grey">{{ card.content }}</div>
      </q-card-section>

      <q-card-actions>
        <q-btn
          color="primary"
          :label="labelName"
          no-caps
          @click="openModal(index)"
        />
        <q-space />
        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="card.expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="toggle(index)"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="card.expanded">
          <q-separator />
          <q-card-section class="text-subtitle2">
            {{ card.lorem }}
          </q-card-section>
        </div>
      </q-slide-transition>

      <q-dialog v-model="card.dialog" :backdrop-filter="card.backdropFilter">
        <q-card style="width: 700px; max-width: 80vw">
          <q-card-section class="row items-center q-pb-none text-h6 text-red">
            <q-img :src="card.image" />

            {{ card.dialogTitle }}
          </q-card-section>

          <q-card-section class="text-blue">
            {{ card.dialogContent }}
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              flat
              label="Close"
              color="primary"
              @click="closeModal(index)"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
      <!-- Rating component -->
      <q-rating
        v-model="card.rating"
        max="7"
        size="3em"
        color="yellow"
        icon="star_border"
        icon-selected="star"
        icon-half="star_half"
        no-dimming
      />
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
const labelName = ref("Detaylı Bİlgi");
defineOptions({
  name: "ProductPage",
});
const cards = ref([
  {
    image: "img/product_1.jpg",
    title: "Title 1",
    content: "Lorem ipsum dolor sit amet.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    expanded: false,
    dialog: false,
    backdropFilter: null,
    dialogTitle: "Dialog Title 1",
    dialogContent: "Dialog content for card 1",
    rating: 0, // Initial rating value
  },
  {
    image: "img/product_2.jpg",
    title: "Title 2",
    content: "Lorem ipsum dolor sit amet, consectetur",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    expanded: false,
    dialog: false,
    backdropFilter: null,
    dialogTitle: "Dialog Title 2",
    dialogContent: "Dialog content for card 2",
    rating: 0, // Initial rating value
  },
  {
    image: "img/product_3.jpg",
    title: "Title 3",
    content: "Lorem ipsum dolor sit amet, consectetur",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    expanded: false,
    dialog: false,
    backdropFilter: null,
    dialogTitle: "Dialog Title 3",
    dialogContent: "Dialog content for card 3",
    rating: 0, // Initial rating value
  },
  {
    image: "img/product_4.jpg",
    title: "Title 4",
    content: "Lorem ipsum dolor sit amet",
    lorem: "Lorem ipsum dolor sit amet.",
    expanded: false,
    dialog: false,
    backdropFilter: null,
    dialogTitle: "Dialog Title 4",
    dialogContent: "Dialog content for card 4",
    rating: 0, // Initial rating value
  },
  {
    image: "img/product_5.jpg",
    title: "Title 4",
    content: "Lorem ipsum dolor.",
    lorem:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    expanded: false,
    dialog: false,
    backdropFilter: null,
    dialogTitle: "Dialog Title 5",
    dialogContent: "Dialog content for card 5",
    rating: 0, // Initial rating value
  },
]);

const openModal = (index) => {
  cards.value[index].backdropFilter = "blur(4px)";
  cards.value[index].dialog = true;
};

const closeModal = (index) => {
  cards.value[index].backdropFilter = null;
  cards.value[index].dialog = false;
};

const toggle = (index) => {
  cards.value[index].expanded = !cards.value[index].expanded;
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
