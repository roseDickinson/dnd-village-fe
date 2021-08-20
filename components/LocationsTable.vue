<template>
  <v-data-table
    :items="locations"
    :headers="locationHeaders"
    style="border: thin solid rgba(0, 0, 0, 0.12)"
  >
    <template #item.name="{ item }">
      <nuxt-link
        :to="{
          name: 'LocationVisualisation',
          query: {
            id: item.id,
          },
        }"
      >
        {{ item.name }}
      </nuxt-link>
    </template>
  </v-data-table>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "LocationsTable",

  data: () => ({
    locationHeaders: [
      {
        text: "Name",
        value: "name",
      },
      {
        text: "Type",
        value: "location_type",
      },
    ],
  }),
  computed: {
    ...mapState({
      locations: (state) => state.locations.locations,
    }),
  },
  mounted() {
    this.getLocations();
  },
  methods: {
    ...mapActions({
      getLocations: "locations/getLocations",
    }),
  },
};
</script>
