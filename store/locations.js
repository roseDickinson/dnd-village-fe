import listLocations from '~/api/locations'

export const state = () => ({
  locations: []
})

export const mutations = {
  setLocations: (state, l) => {
    state.locations = l
  }
}

export const actions = {
  async getLocations({commit}) {
    let response = await listLocations()
    commit('setLocations', response.data)
  }
}