import { fetchWithResponse } from "./fetcher";

export function login(user) {
  return fetchWithResponse("login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

export function register(user) {
  return fetchWithResponse("register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
}

export function getUser() {
  return fetchWithResponse("current_user", {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  });
}
