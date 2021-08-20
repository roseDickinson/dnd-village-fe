import locationsApi from "~/api/locations";

export const state = () => ({
  locations: [],
});

export const mutations = {
  setLocations: (state, l) => {
    state.locations = l;
  },
};

export const actions = {
  async getLocations({ commit }) {
    const response = await locationsApi.listLocations();
    commit("setLocations", response.data);
  },
};
