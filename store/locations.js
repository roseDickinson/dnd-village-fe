import locationsApi from "~/api/locations";

export const state = () => ({
  locations: [],
  activeLocation: {},
});

export const mutations = {
  setLocations: (state, l) => {
    state.locations = l;
  },
  setActiveLocation: (state, al) => {
    state.activeLocation = al;
  },
};

export const actions = {
  async getLocations({ commit }) {
    const response = await locationsApi.listLocations();
    commit("setLocations", response.data);
  },
  async getLocationById({ commit }, id) {
    const response = await locationsApi.getLocationById(id);
    commit("setActiveLocation", response.data);
  },
};
