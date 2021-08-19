import axios from 'axios';
import locationsUrl from './urls'

async function listLocations() {
  return axios.get(locationsUrl)
}

export default {
  listLocations
}