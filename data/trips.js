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

export function addAttraction(id, attraction) {
  return fetchWithResponse(`trips/${id}/attraction`, {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attraction),
  });
}

export function removeTripAttendee(id, attendee) {
  return fetchWithoutResponse(`trips/${id}/attendee`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attendee),
  });
}
export function removeTripAttraction(id, attraction) {
  return fetchWithoutResponse(`trips/${id}/attraction`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attraction),
  });
}
