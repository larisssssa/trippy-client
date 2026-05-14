import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

export function getTrips() {
  return fetchWithResponse("trips", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}
export function getTripById(id) {
  return fetchWithResponse(`trips/${id}`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}
