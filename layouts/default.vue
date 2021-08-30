<template>
  <v-app style="background-color: #f2ece4">
    <v-app-bar app color="primary" dark dense>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('~/assets/logo.png')"
          transition="scale-transition"
          width="40"
        />
      </div>
      <span> DnD Location Visualisation </span>

      <v-spacer />
    </v-app-bar>
    <v-main>
      <Nuxt class="pa-6" />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
