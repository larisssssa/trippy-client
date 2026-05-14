import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

export function getTrips() {
  return fetchWithResponse("trips", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}
