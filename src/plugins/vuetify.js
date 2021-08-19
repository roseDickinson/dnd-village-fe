import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
              primary: "#58180d",
              secondary: "#f2ece4",
              accent: "#c9ad6a"
            }
        }
    }
});
