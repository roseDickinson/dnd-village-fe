<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <BreadCrumb :breadcrumb-list="breadcrumbList" />
      </v-col>
      <v-col class="pb-0">
        <h1 class="display-2 font-weight-bold mb-3">Locations</h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <LocationsTable />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BreadCrumb from "~/components/BreadCrumb";
import LocationsTable from "~/components/LocationsTable";

export default {
  name: "HomePage",
  components: {
    BreadCrumb,
    LocationsTable,
  },
  data: () => ({
    breadcrumbList: [
      {
        text: "Home",
        disabled: true,
      },
    ],
  }),
};
</script>
