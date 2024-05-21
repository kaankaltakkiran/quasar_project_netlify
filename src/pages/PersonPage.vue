<template>
  <div class="row justify-center q-my-md">
    <div class="col-12 col-sm-10 col-md-8 col-lg-6">
      <h2 class="text-center text-red">Person List</h2>
      <q-page>
        <q-card class="q-mt-md">
          <q-card-section>
            <q-table
              flat
              bordered
              title="Person List"
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
import { computed, onMounted } from "vue";
import { exportFile, useQuasar } from "quasar";
// storedan gelen verileri almak için
const userStore = useUserStore();
const users = computed(() => userStore.users);

const $q = useQuasar();
// tablo kolonları tanımlanır
//name ve field alanları eşleşmelidir
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
// mounted fonksiyonu ile sayfa yüklendiğinde userStore içerisindeki fetchUsers fonksiyonu çalıştırılır
onMounted(() => {
  userStore.fetchUsers();
});

function wrapCsvValue(val, formatFn, row) {
  let formatted = formatFn !== void 0 ? formatFn(val, row) : val;

  formatted =
    formatted === void 0 || formatted === null ? "" : String(formatted);

  formatted = formatted.split('"').join('""');
  return `"${formatted}"`;
}

function exportTable() {
  const content = [columns.map((col) => wrapCsvValue(col.label))]
    .concat(
      users.value.map((row) =>
        columns
          .map((col) =>
            wrapCsvValue(
              typeof col.field === "function"
                ? col.field(row)
                : row[col.field === void 0 ? col.name : col.field],
              col.format,
              row
            )
          )
          .join(",")
      )
    )
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
