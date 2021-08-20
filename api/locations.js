import { authHeader } from "./auth";
import axios from "axios";
import { locationsUrl } from "./urls";

async function listLocations() {
  return await axios.get(locationsUrl, authHeader);
}

async function getLocationById(id) {
  return await axios.get(`${locationsUrl}${id}/`, authHeader);
}

export default {
  listLocations,
  getLocationById,
};
