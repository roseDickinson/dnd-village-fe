import axios from "axios";
import { locationsUrl } from "./urls";

async function listLocations() {
  return await axios.get(locationsUrl);
}

export default {
  listLocations,
};
