import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

export function createNewAttraction(attraction) {
  return fetchWithResponse("/attractions", {
    method: "POST",
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(attraction),
  });
}

export function getCategories() {
  return fetchWithResponse("/categories", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });
}
