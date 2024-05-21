<template>
  <div class="row justify-center">
    <div class="col-12 col-sm-10 col-md-8 col-lg-6">
      <div class="q-px-lg q-py-md">
        <q-timeline :layout="layout" color="secondary">
          <q-timeline-entry heading>
            Timeline heading
            <br />
            ({{
              $q.screen.lt.sm
                ? "Dense"
                : $q.screen.lt.md
                ? "Comfortable"
                : "Loose"
            }}
            layout)
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 21, 1986"
            side="right"
            icon="delete"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry heading>November, 2017</q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="right"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
            color="orange"
            icon="done_all"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="right"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Event Title"
            subtitle="February 22, 1986"
            side="left"
          >
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>
  </div>
  <div class="row justify-center">
    <div class="col-12 col-sm-10 col-md-8 col-lg-6">
      <q-splitter v-model="treeModel" style="height: 400px">
        <template v-slot:before>
          <div class="q-pa-md">
            <q-tree
              :nodes="simple"
              node-key="label"
              selected-color="primary"
              v-model:selected="selected"
              default-expand-all
            />
          </div>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="selected"
            animated
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="Relax Hotel">
              <div class="text-h4 q-mb-md">Welcome</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>

            <q-tab-panel name="Food">
              <div class="text-h4 q-mb-md">Food</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>

            <q-tab-panel name="Room service">
              <div class="text-h4 q-mb-md">Room service</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>

            <q-tab-panel name="Room view">
              <div class="text-h4 q-mb-md">Room view</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
              </p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </div>
  <div class="q-pa-md">
    <h1 class="text-h2 text-blue text-center">Desserts</h1>
    <div class="row justify-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6">
        <q-markup-table dark class="bg-indigo-8">
          <thead>
            <tr>
              <th class="text-left">Dessert (100g serving)</th>
              <th class="text-right">Calories</th>
              <th class="text-right">Fat (g)</th>
              <th class="text-right">Carbs (g)</th>
              <th class="text-right">Protein (g)</th>
              <th class="text-right">Sodium (mg)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-left">Frozen Yogurt</td>
              <td class="text-right">159</td>
              <td class="text-right">6</td>
              <td class="text-right">24</td>
              <td class="text-right">4</td>
              <td class="text-right">87</td>
            </tr>
            <tr>
              <td class="text-left">Ice cream sandwich</td>
              <td class="text-right">237</td>
              <td class="text-right">9</td>
              <td class="text-right">37</td>
              <td class="text-right">4.3</td>
              <td class="text-right">129</td>
            </tr>
            <tr>
              <td class="text-left">Eclair</td>
              <td class="text-right">262</td>
              <td class="text-right">16</td>
              <td class="text-right">23</td>
              <td class="text-right">6</td>
              <td class="text-right">337</td>
            </tr>
            <tr>
              <td class="text-left">Cupcake</td>
              <td class="text-right">305</td>
              <td class="text-right">3.7</td>
              <td class="text-right">67</td>
              <td class="text-right">4.3</td>
              <td class="text-right">413</td>
            </tr>
            <tr>
              <td class="text-left">Gingerbread</td>
              <td class="text-right">356</td>
              <td class="text-right">16</td>
              <td class="text-right">49</td>
              <td class="text-right">3.9</td>
              <td class="text-right">327</td>
            </tr>
          </tbody>
        </q-markup-table>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6">
        <h1 class="text-h2 text-red text-center">Loading Tables</h1>
        <div class="q-pa-md">
          <q-markup-table>
            <thead>
              <tr>
                <th class="text-left" style="width: 150px">
                  <q-skeleton animation="blink" type="text" />
                </th>
                <th class="text-right">
                  <q-skeleton animation="blink" type="text" />
                </th>
                <th class="text-right">
                  <q-skeleton animation="blink" type="text" />
                </th>
                <th class="text-right">
                  <q-skeleton animation="blink" type="text" />
                </th>
                <th class="text-right">
                  <q-skeleton animation="blink" type="text" />
                </th>
                <th class="text-right">
                  <q-skeleton animation="blink" type="text" />
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="n in 5" :key="n">
                <td class="text-left">
                  <q-skeleton animation="blink" type="text" width="85px" />
                </td>
                <td class="text-right">
                  <q-skeleton animation="blink" type="text" width="50px" />
                </td>
                <td class="text-right">
                  <q-skeleton animation="blink" type="text" width="35px" />
                </td>
                <td class="text-right">
                  <q-skeleton animation="blink" type="text" width="65px" />
                </td>
                <td class="text-right">
                  <q-skeleton animation="blink" type="text" width="25px" />
                </td>
                <td class="text-right">
                  <q-skeleton animation="blink" type="text" width="85px" />
                </td>
              </tr>
            </tbody>
          </q-markup-table>
        </div>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12 col-sm-10 col-md-8 col-lg-6">
        <div class="q-pa-md q-gutter-xs">
          <div class="q-gutter-md row justify-center">
            <div>
              <q-spinner-audio color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerAudio</q-tooltip>
            </div>
            <div>
              <q-spinner-ball color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerBall</q-tooltip>
            </div>
            <div>
              <q-spinner-bars color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerBars</q-tooltip>
            </div>
            <div>
              <q-spinner-box color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerBox</q-tooltip>
            </div>
            <div>
              <q-spinner-clock color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerClock</q-tooltip>
            </div>
            <div>
              <q-spinner-comment color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerComment</q-tooltip>
            </div>
            <div>
              <q-spinner-cube color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerCube</q-tooltip>
            </div>
            <div>
              <q-spinner-dots color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerDots</q-tooltip>
            </div>
            <div>
              <q-spinner-facebook color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerFacebook</q-tooltip>
            </div>
            <div>
              <q-spinner-gears color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerGears</q-tooltip>
            </div>
            <div>
              <q-spinner-grid color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerGrid</q-tooltip>
            </div>
            <div>
              <q-spinner-hearts color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerHearts</q-tooltip>
            </div>
            <div>
              <q-spinner-hourglass color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerHourglass</q-tooltip>
            </div>
            <div>
              <q-spinner-infinity color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerInfinity</q-tooltip>
            </div>
            <div>
              <q-spinner-ios color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerIos</q-tooltip>
            </div>
            <div>
              <q-spinner-orbit color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerOrbit</q-tooltip>
            </div>
            <div>
              <q-spinner-oval color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerOval</q-tooltip>
            </div>
            <div>
              <q-spinner-pie color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerPie</q-tooltip>
            </div>
            <div>
              <q-spinner-puff color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerPuff</q-tooltip>
            </div>
            <div>
              <q-spinner-radio color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerRadio</q-tooltip>
            </div>
            <div>
              <q-spinner-rings color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerRings</q-tooltip>
            </div>
            <div>
              <q-spinner-tail color="primary" size="2em" />
              <q-tooltip :offset="[0, 8]">QSpinnerTail</q-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <h1 class="text-h2 text-green text-center">Stepper</h1>
  <div class="row justify-center q-my-md">
    <div class="col-12 col-sm-10 col-md-8 col-lg-6">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
        >
          <q-tab name="mails" label="Mails" />
          <q-tab name="alarms" label="Alarms" />
          <q-tab name="movies" label="Movies" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails" class="q-pa-none">
            <q-splitter v-model="splitterModel" style="height: 250px">
              <template v-slot:before>
                <q-tabs v-model="innerTab" vertical class="text-teal">
                  <q-tab name="innerMails" icon="mail" label="Mails" />
                  <q-tab name="innerAlarms" icon="alarm" label="Alarms" />
                  <q-tab name="innerMovies" icon="movie" label="Movies" />
                </q-tabs>
              </template>

              <template v-slot:after>
                <q-tab-panels
                  v-model="innerTab"
                  animated
                  transition-prev="slide-down"
                  transition-next="slide-up"
                >
                  <q-tab-panel name="innerMails">
                    <div class="text-h4 q-mb-md">Mails</div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                  </q-tab-panel>

                  <q-tab-panel name="innerAlarms">
                    <div class="text-h4 q-mb-md">Alarms</div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                  </q-tab-panel>

                  <q-tab-panel name="innerMovies">
                    <div class="text-h4 q-mb-md">Movies</div>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quis praesentium cumque magnam odio iure quidem, quod
                      illum numquam possimus obcaecati commodi minima assumenda
                      consectetur culpa fuga nulla ullam. In, libero.
                    </p>
                  </q-tab-panel>
                </q-tab-panels>
              </template>
            </q-splitter>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <div class="text-h6">Alarms</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">Movies</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </div>
  <div class="row justify-center q-my-md">
    <div class="col-12 col-sm-10 col-md-8 col-lg-6">
      <div class="q-pa-md">
        <q-video
          :ratio="16 / 9"
          src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0"
        />
      </div>
    </div>
  </div>
  <div class="row justify-center q-my-md">
    <div class="col-12 col-sm-10 col-md-8 col-lg-6">
      <div class="q-pa-md q-gutter-sm">
        <q-btn
          label="Uplaod Video"
          color="deep-orange"
          icon-right="send"
          @click="showCustom"
        />
      </div>
    </div>
  </div>
  <div
    class="q-pa-md relative-position"
    style="height: 280px; max-height: 80vh"
  >
    <q-btn
      v-morph:btn:mygroup:300.resize="morphGroupModel"
      class="absolute-bottom-left q-ma-md"
      fab
      color="primary"
      size="lg"
      icon="add"
      @click="nextMorph"
    />

    <q-card
      v-morph:card1:mygroup:500.resize="morphGroupModel"
      class="absolute-bottom-left q-ma-md bg-primary text-white"
      style="width: 300px; border-bottom-left-radius: 2em"
    >
      <q-card-section class="text-h6"> New user </q-card-section>

      <q-card-section class="text-subtitle1">
        Please fill the details for a new user.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Next" @click="nextMorph" />
      </q-card-actions>
    </q-card>

    <q-card
      v-morph:card2:mygroup:500.tween="morphGroupModel"
      class="absolute-bottom-left q-ma-md bg-primary text-white"
      style="width: 300px; border-bottom-left-radius: 2em"
    >
      <q-card-section class="text-h6"> Finalize registration </q-card-section>

      <q-card-section class="q-py-xl text-center text-subtitle2">
        Thank you for registering.
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="Close" @click="nextMorph" />
      </q-card-actions>
    </q-card>
  </div>
  <div class="q-pa-md">
    <q-btn
      color="secondary"
      @click="$q.fullscreen.toggle()"
      :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
      :label="$q.fullscreen.isActive ? 'Exit Fullscreen' : 'Go Fullscreen'"
    />
  </div>
</template>
<script setup>
import { ref, computed } from "vue";
import { useQuasar, QSpinnerGears } from "quasar";

const tab = ref("mails");
const innerTab = ref("innerMails");
const splitterModel = ref(20);

const $q = useQuasar();

const layout = computed(() => {
  return $q.screen.lt.sm ? "dense" : $q.screen.lt.md ? "comfortable" : "loose";
});

const treeModel = ref(50);
const selected = ref("Food");

const simple = [
  {
    label: "Relax Hotel",
    children: [
      {
        label: "Food",
        icon: "restaurant_menu",
      },
      {
        label: "Room service",
        icon: "room_service",
      },
      {
        label: "Room view",
        icon: "photo",
      },
    ],
  },
];

const nextMorphStep = {
  btn: "card1",
  card1: "card2",
  card2: "btn",
};

const morphGroupModel = ref("btn");

function nextMorph() {
  morphGroupModel.value = nextMorphStep[morphGroupModel.value];
}

function showCustom() {
  const dialog = $q.dialog({
    title: "Uploading Video...",
    dark: true,
    message: "0%",
    progress: {
      spinner: QSpinnerGears,
      color: "amber",
    },
    persistent: true, // we want the user to not be able to close it
    ok: false, // we want the user to not be able to close it
  });

  // we simulate some progress here...
  let percentage = 0;
  const interval = setInterval(() => {
    percentage = Math.min(100, percentage + Math.floor(Math.random() * 22));

    // we update the dialog
    dialog.update({
      message: `${percentage}%`,
    });

    // if we are done...
    if (percentage === 100) {
      clearInterval(interval);

      dialog.update({
        title: "Done!",
        message: "Video upload completed successfully !",
        progress: false,
        ok: true,
      });
    }
  }, 500);
}
</script>
