<template>
  <v-container>
    <v-row>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Locations
        </h1>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <v-data-table :items="locations" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'LocationsTable',

  data: () => ({
  }),
  computed: {
    ...mapState({
      locations: state => state.locations.locations
    })
  },
  mounted() {
    this.getLocations()
  },
  methods: {
    ...mapActions({
      getLocations: 'locations/getLocations'
    })
  }
}
</script>
