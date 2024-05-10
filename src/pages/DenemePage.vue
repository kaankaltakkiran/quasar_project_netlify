<template>
  <div class="q-pa-md">
    <h1 class="text-h2 text-blue text-center">Desserts</h1>
    <div class="row justify-center">
      <div class="col-6">
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
      <div class="col-6">
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
  </div>
</template>

<script setup></script>
