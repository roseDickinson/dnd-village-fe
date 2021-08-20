<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <BreadCrumb :breadcrumb-list="breadcrumbList" />
      </v-col>
      <v-col class="pb-0">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ activeLocation.name }}
        </h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-data-table
          :items="activeLocation.people"
          :headers="peopleHeaders"
          style="border: thin solid rgba(0, 0, 0, 0.12)"
        >
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
import BreadCrumb from "~/components/BreadCrumb";

export default {
  name: "LocationsVisualisation",
  components: {
    BreadCrumb,
  },
  data: () => ({
    breadcrumbList: [
      {
        text: "Home",
        disabled: false,
        to: "/",
      },
      {
        text: "",
        disabled: true,
      },
    ],
    peopleHeaders: [
      {
        text: "Id",
        value: "id",
      },
      {
        text: "Name",
        value: "name",
      },
      {
        text: "Status",
        value: "status",
      },
      {
        text: "Parents",
        value: "parents",
      },
      {
        text: "Siblings",
        value: "siblings",
      },
    ],
  }),
  computed: {
    ...mapState({
      activeLocation: (state) => state.locations.activeLocation,
    }),
  },
  async mounted() {
    await this.getLocationById(this.$route.query.id);
    this.breadcrumbList[1].text = this.activeLocation.name;
  },
  methods: {
    ...mapActions({
      getLocationById: "locations/getLocationById",
    }),
  },
};
</script>
