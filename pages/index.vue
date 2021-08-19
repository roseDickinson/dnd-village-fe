<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="~/assets/logo.png"
          transition="scale-transition"
          width="40"
        />
      </div>
      <span>
        DnD Location Visualisation
      </span>

      <v-spacer />
    </v-app-bar>

    <v-main>
      <LocationsTable />
    </v-main>
  </v-app>
</template>

<script>
import LocationsTable from '~/components/LocationsTable';

export default {
  name: 'App',
  components: {
    LocationsTable,
  },
  data: () => ({
    // 
  }),
};
</script>
