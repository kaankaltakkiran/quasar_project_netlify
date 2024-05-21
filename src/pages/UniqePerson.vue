<template>
  <div class="row justify-center q-my-md">
    <div class="col-12 col-sm-10 col-md-8 col-lg-6">
      <h2 class="text-center text-red">{{ userName }}</h2>
      <q-page>
        <q-card class="q-mt-md">
          <q-card-section>
            <q-table
              flat
              bordered
              title="Person Details"
              :rows="users"
              :columns="columns"
              color="primary"
              row-key="id"
            >
              <template v-slot:top-right>
                <q-btn
                  color="primary"
                  icon-right="archive"
                  label="Export to csv"
                  no-caps
                  @click="exportTable"
                />
              </template>
            </q-table>
          </q-card-section>
        </q-card>
      </q-page>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "src/stores/userStore";
import { ref, onMounted } from "vue";
import { exportFile, useQuasar } from "quasar";
import { useRoute } from "vue-router";

const userStore = useUserStore();
const users = ref([]);
const route = useRoute();
const $q = useQuasar();
const userName = ref("");

onMounted(async () => {
  await userStore.fetchUsers(); // tüm kullanıcıları getirir
  const userId = route.params.id;
  const user = userStore.users.find((user) => user.id === parseInt(userId)); // id'si eşleşen kullanıcıyı getirir
  if (user) {
    users.value.push(user);
    userName.value = user.name;
  }
});

// tablo kolonları tanımlanır
const columns = [
  {
    name: "id",
    required: true,
    label: "User Id",
    align: "left",
    field: "id",
    sortable: true,
  },
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: "name",
    sortable: true,
  },
  {
    name: "username",
    required: true,
    label: "User Name",
    align: "left",
    field: "username",
    sortable: true,
  },
  {
    name: "email",
    required: true,
    label: "Email",
    align: "left",
    field: "email",
    sortable: true,
  },
];

function wrapCsvValue(val) {
  let formatted = val === void 0 || val === null ? "" : String(val);
  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}

function exportTable() {
  const content = [
    columns.map((col) => wrapCsvValue(col.label)).join(","),
    ...users.value.map((row) =>
      columns.map((col) => wrapCsvValue(row[col.field]))
    ),
  ]
    .map((row) => row.join(","))
    .join("\r\n");

  const status = exportFile("table-export.csv", content, "text/csv");

  if (status == true) {
    $q.notify({
      type: "positive",
      message: "File downloaded successfully...",
      color: "positive",
      position: "top-right",
    });
  } else {
    $q.notify({
      message: "Browser denied file download...",
      color: "negative",
      icon: "warning",
      position: "top-right",
    });
  }
}
</script>
