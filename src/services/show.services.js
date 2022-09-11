import { axiosTMDB } from "utils/axios";
import { apikey } from "constants/apiConstants";

export default function axiosShow(id) {
  const response = axiosTMDB.get(`/tv/${id}${apikey}`);
  return response;
}

export function axiosEpisodes(data) {
  const response = axiosTMDB.get(
    `/tv/${data.id}/season/${data.season_number}${apikey}`
  );
  return response;
}
