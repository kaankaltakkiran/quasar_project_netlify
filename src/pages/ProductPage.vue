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
          color="secondary"
          icon-right="search"
          :label="labelName"
          no-caps
          @click="openModal(index)"
        />
        <q-btn
          color="deep-orange"
          icon-right="comment"
          label="Yorum Yaz"
          no-caps
          @click="openDetailModal(index)"
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
      <!--Detaylı Bilgi Dialog Start -->
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
      <!--Detaylı Bilgi Dialog End -->
      <!--Send Comment Start -->
      <q-dialog v-model="card.commentDialog">
        <q-card style="max-width: 80vw" class="q-pa-md q-gutter-sm">
          <q-card-section>
            <q-editor
              v-model="card.editorContent"
              :dense="$q.screen.lt.md"
              :toolbar="[
                [
                  {
                    label: $q.lang.editor.align,
                    icon: $q.iconSet.editor.align,
                    fixedLabel: true,
                    list: 'only-icons',
                    options: ['left', 'center', 'right', 'justify'],
                  },
                  {
                    label: $q.lang.editor.align,
                    icon: $q.iconSet.editor.align,
                    fixedLabel: true,
                    options: ['left', 'center', 'right', 'justify'],
                  },
                ],
                [
                  'bold',
                  'italic',
                  'strike',
                  'underline',
                  'subscript',
                  'superscript',
                ],
                ['token', 'hr', 'link', 'custom_btn'],
                ['print', 'fullscreen'],
                [
                  {
                    label: $q.lang.editor.formatting,
                    icon: $q.iconSet.editor.formatting,
                    list: 'no-icons',
                    options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                  },
                  {
                    label: $q.lang.editor.fontSize,
                    icon: $q.iconSet.editor.fontSize,
                    fixedLabel: true,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                      'size-1',
                      'size-2',
                      'size-3',
                      'size-4',
                      'size-5',
                      'size-6',
                      'size-7',
                    ],
                  },
                  {
                    label: $q.lang.editor.defaultFont,
                    icon: $q.iconSet.editor.font,
                    fixedIcon: true,
                    list: 'no-icons',
                    options: [
                      'default_font',
                      'arial',
                      'arial_black',
                      'comic_sans',
                      'courier_new',
                      'impact',
                      'lucida_grande',
                      'times_new_roman',
                      'verdana',
                    ],
                  },
                  'removeFormat',
                ],
                ['quote', 'unordered', 'ordered', 'outdent', 'indent'],
                ['undo', 'redo'],
                ['viewsource'],
              ]"
              :fonts="{
                arial: 'Arial',
                arial_black: 'Arial Black',
                comic_sans: 'Comic Sans MS',
                courier_new: 'Courier New',
                impact: 'Impact',
                lucida_grande: 'Lucida Grande',
                times_new_roman: 'Times New Roman',
                verdana: 'Verdana',
              }"
            />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              flat
              label="Close"
              color="primary"
              class="q-mr-sm"
              @click="closeCommentModal(index)"
            />
            <q-btn
              flat
              label="Gönder"
              color="primary"
              @click="closeCommentModal(index)"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <!--Send Comment End -->
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
  <!-- Loading Content Start -->
  <div class="row justify-start">
    <div class="col-md-3 col-sm-10 col-12">
      <div class="q-pa-md q-gutter-md">
        <q-btn color="amber" @click="showTextLoading">
          Tıkla, Bekle ve Gör !!
        </q-btn>

        <q-card class="relative-position card-example" flat bordered>
          <q-card-section class="q-pb-none">
            <div class="text-h6">Lorem Ipsum</div>
          </q-card-section>

          <q-card-section>
            <transition
              appear
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
            >
              <div v-show="showSimulatedReturnData">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent vel magna eu risus laoreet tristique. Nulla ut
                fermentum elit, nec consequat augue. Morbi et dolor nec metus
                tincidunt pellentesque. Nullam non semper ante. Fusce
                pellentesque sagittis felis quis porta. Aenean condimentum neque
                sed erat suscipit malesuada. Nulla eget rhoncus enim. Duis
                dictum interdum eros.
              </div>
            </transition>
          </q-card-section>

          <q-inner-loading
            :showing="visible"
            label="Please wait..."
            label-class="text-teal"
            label-style="font-size: 1.1em"
          />
        </q-card>
      </div>
    </div>
  </div>
  <!-- Loading Content End -->
</template>

<script setup>
import { ref } from "vue";
const labelName = ref("Detaylı Bİlgi");
const editorContent = ref("");
/* Visible */
const visible = ref(false);
const showSimulatedReturnData = ref(false);

const showTextLoading = () => {
  visible.value = true;
  showSimulatedReturnData.value = false;

  setTimeout(() => {
    visible.value = false;
    showSimulatedReturnData.value = true;
  }, 3000);
};
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
    rating: 0,
    editorContent: "",
    commentDialog: false,
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
    rating: 0,
    editorContent: "",
    commentDialog: false,
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
    rating: 0,
    editorContent: "",
    commentDialog: false,
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
    rating: 0,
    editorContent: "",
    commentDialog: false,
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
    rating: 0,
    editorContent: "",
    commentDialog: false,
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

const closeCommentModal = (index) => {
  cards.value[index].commentDialog = false;
};

const toggle = (index) => {
  cards.value[index].expanded = !cards.value[index].expanded;
};
// Her kart için düzenleyici içeriğini güncellemek için fonksiyon
const updateEditorContent = (index, content) => {
  cards.value[index].editorContent = content;
};
const openDetailModal = (index) => {
  cards.value[index].commentDialog = true;
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
</style>
