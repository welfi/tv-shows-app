import { searchQuery } from "constants/apiConstants";
import { axiosTMDB } from "utils/axios";

export default function axiosSearch(search) {
  const response = axiosTMDB.get(`${searchQuery}${search}`);
  return response;
}
