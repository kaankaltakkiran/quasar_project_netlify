<template>
  <div class="q-pa-md q-gutter-sm">
    <!-- Breadcrumbs Start -->
    <q-breadcrumbs>
      <q-breadcrumbs-el to="/" exact label="Ana Sayfa" />
      <q-breadcrumbs-el to="/prodcuts" label="Ürünler" />
    </q-breadcrumbs>
    <!-- Breadcrumbs End -->
  </div>
  <!-- Product List Start -->
  <h3 class="text-center text-red">Products</h3>
  <div class="q-pa-md row items-start q-gutter-md">
    <!-- Card İnfo Start -->
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
      <!-- Card İnfo End -->
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
    <!-- Product List End -->
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
    <div class="q-pa-md">
      <h4 class="text-center text-red">Notification</h4>
      <div class="row q-gutter-sm">
        <q-btn
          no-caps
          unelevated
          color="positive"
          @click="triggerPositive"
          label="Trigger 'positive'"
        />
        <q-btn
          no-caps
          unelevated
          color="negative"
          @click="triggerNegative"
          label="Trigger 'negative'"
        />
        <q-btn
          no-caps
          unelevated
          color="warning"
          text-color="dark"
          @click="triggerWarning"
          label="Trigger 'warning'"
        />
        <q-btn
          no-caps
          unelevated
          color="info"
          @click="triggerInfo"
          label="Trigger 'info'"
        />
        <q-btn
          no-caps
          unelevated
          color="grey-8"
          @click="triggerOngoing"
          label="Trigger 'ongoing'"
        />
        <q-btn color="teal" @click="showNotif" label="Show Notification" />
      </div>
    </div>
  </div>
  <!-- Loading Content End -->
  <div class="row justify-center q-my-md">
    <div class="col-12 col-sm-10 col-md-8 col-lg-6">
      <div class="q-pa-md">
        <div
          class="fixed-full image-gallery__blinder bg-grey-8"
          :class="
            indexZoomed !== void 0 ? 'image-gallery__blinder--active' : void 0
          "
          @click="zoomImage()"
        />

        <div
          class="row justify-center q-gutter-sm q-mx-auto scroll relative-position"
          style="max-width: 80vw; max-height: 80vh"
        >
          <q-img
            v-for="(src, index) in images"
            :key="index"
            :ref="
              (el) => {
                thumbRef[index] = el;
              }
            "
            class="image-gallery__image"
            :style="index === indexZoomed ? 'opacity: 0.3' : void 0"
            :src="src"
            @click="zoomImage(index)"
          />
        </div>

        <q-img
          ref="fullRef"
          class="image-gallery__image image-gallery__image-full fixed-center"
          :class="
            indexZoomed !== void 0
              ? 'image-gallery__image-full--active'
              : void 0
          "
          :src="images[indexZoomed]"
          @load="imgLoadedResolve"
          @error="imgLoadedReject"
          @click="zoomImage()"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUpdate } from "vue";
/* Default Value */
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
/* Define Card İnfo */
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
/* Dialog Settings */
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
import { useQuasar } from "quasar";

const $q = useQuasar();
const showNotif = () => {
  const notif = $q.notify({
    group: false, // required to be updatable
    position: "top-right", // set the position to top-right
    timeout: 0, // we want to be in control when it gets dismissed
    spinner: true,
    message: "Uploading file...",
    caption: "0%",
  });

  // we simulate some progress here...
  let percentage = 0;
  const interval = setInterval(() => {
    percentage = Math.min(100, percentage + Math.floor(Math.random() * 22));

    // we update the dialog
    notif({
      caption: `${percentage}%`,
    });

    // if we are done...
    if (percentage === 100) {
      notif({
        icon: "done", // we add an icon
        position: "top-right", // set the position to top-right
        spinner: false, // we reset the spinner setting so the icon can be displayed
        message: "Uploading done!",
        timeout: 2500, // we will timeout it in 2.5s
      });
      clearInterval(interval);
    }
  }, 500);
};
const triggerPositive = () => {
  $q.notify({
    type: "positive",
    position: "top-right", // set the position to top-right
    message: 'This is a "positive" type notification.',
  });
};

const triggerNegative = () => {
  $q.notify({
    type: "negative",
    position: "top-right", // set the position to top-right
    message: 'This is a "negative" type notification.',
  });
};

const triggerWarning = () => {
  $q.notify({
    type: "warning",
    position: "top-right", // set the position to top-right
    message: 'This is a "warning" type notification.',
  });
};

const triggerInfo = () => {
  $q.notify({
    type: "info",
    position: "top-right", // set the position to top-right
    message: 'This is a "info" type notification.',
  });
};

const triggerOngoing = () => {
  // we need to get the notification reference
  // otherwise it will never get dismissed ('ongoing' type has timeout 0)
  const notif = $q.notify({
    type: "ongoing",
    position: "top-right", // set the position to top-right
    message: "Looking up the search terms...",
  });

  // simulate delay
  setTimeout(() => {
    notif({
      type: "positive",
      position: "top-right", // set the position to top-right
      message: "Found the results that you were looking for",
      timeout: 1000,
    });
  }, 4000);
};
import { morph } from "quasar";

const thumbRef = ref([]);
const fullRef = ref(null);

const indexZoomed = ref(undefined);
const images = ref(
  Array(24)
    .fill(null)
    .map((_, i) => "https://picsum.photos/id/" + i + "/500/300")
);
const imgLoaded = {
  promise: Promise.resolve(),
  resolve: () => {},
  reject: () => {},
};

function imgLoadedResolve() {
  imgLoaded.resolve();
}

function imgLoadedReject() {
  imgLoaded.reject();
}

function zoomImage(index) {
  const indexZoomedState = indexZoomed.value;
  let cancel = undefined;

  imgLoaded.reject();

  const zoom = () => {
    if (index !== undefined && index !== indexZoomedState) {
      imgLoaded.promise = new Promise((resolve, reject) => {
        imgLoaded.resolve = () => {
          imgLoaded.resolve = () => {};
          imgLoaded.reject = () => {};

          resolve();
        };
        imgLoaded.reject = () => {
          imgLoaded.resolve = () => {};
          imgLoaded.reject = () => {};

          reject();
        };
      });

      cancel = morph({
        from: thumbRef.value[index].$el,
        to: fullRef.value.$el,
        onToggle: () => {
          indexZoomed.value = index;
        },
        waitFor: imgLoaded.promise,
        duration: 400,
        hideFromClone: true,
        onEnd: (end) => {
          if (end === "from" && indexZoomed.value === index) {
            indexZoomed.value = undefined;
          }
        },
      });
    }
  };

  if (
    indexZoomedState !== undefined &&
    (cancel === undefined || cancel() === false)
  ) {
    morph({
      from: fullRef.value.$el,
      to: thumbRef.value[indexZoomedState].$el,
      onToggle: () => {
        indexZoomed.value = undefined;
      },
      duration: 200,
      keepToClone: true,
      onEnd: zoom,
    });
  } else {
    zoom();
  }
}

// Reset dynamic refs before each update.
onBeforeUpdate(() => {
  thumbRef.value = [];
});
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 350px;
}
.image-gallery__image {
  border-radius: 3% / 5%;
  width: 150px;
  max-width: 20vw;
  cursor: pointer;
}

.image-gallery__image-full {
  width: 800px;
  max-width: 70vw;
  z-index: 2002;
  pointer-events: none;
}

.image-gallery__image-full--active {
  pointer-events: all;
}

.image-gallery__blinder {
  opacity: 0;
  z-index: 2000;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
}

.image-gallery__blinder--active {
  opacity: 0.6;
  pointer-events: all;
}

.image-gallery__blinder--active + div > .image-gallery__image {
  z-index: 2001;
}
</style>
