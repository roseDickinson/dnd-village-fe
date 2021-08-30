import locationsApi from "~/api/locations";

export const state = () => ({
  locations: [],
  activeLocation: {},
  selectedPerson: null,
});

export const getters = {
  getPeople: (state) => {
    return state.activeLocation.people;
  },
  getSelectedPerson: (state) => {
    return (
      (state.activeLocation.people &&
        state.activeLocation.people.find(
          // eslint-disable-next-line
          (p) => p.id == state.selectedPerson
        )) ||
      {}
    );
  },
};

export const mutations = {
  setLocations: (state, l) => {
    state.locations = l;
  },
  setActiveLocation: (state, al) => {
    state.activeLocation = al;
  },
  setSelectedPerson: (state, sp) => {
    state.selectedPerson = sp;
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
