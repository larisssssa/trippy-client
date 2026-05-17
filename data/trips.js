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
export function createNewTrip(trip) {
  return fetchWithResponse("trips", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(trip),
  });
}

export function createNewTripUser(id, username) {
  return fetchWithResponse(`trips/${id}/attendee`, {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(username),
  });
}

export function editTripDetails(data, id) {
  return fetchWithoutResponse(`trips/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export function deleteTrip(id) {
  return fetchWithoutResponse(`trips/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}
