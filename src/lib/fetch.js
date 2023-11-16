// @ts-nocheck

// import BASE_URL
import Cookies from "js-cookie";
import { redirect } from "@sveltejs/kit";
//
const API_BASE_URL = import.meta.env.VITE_BASE_URL; // Replace with your actual API base URL

export async function apiFetch(
  url,
  options = {},
  token = null,
  redirect_if_unauthorized = true
) {
  // if url is not a relative pathe prappend BASE_URL
  if (!url.startsWith("http")) {
    url = API_BASE_URL + url;
  }

  if (!options.headers) {
    options.headers = {};
  }

  if (token) {
    options.headers.Authorization = `Bearer ${token}`;
  }

  // if Content-Type header is not set set it to application/json
  if (!options.headers["Content-Type"]) {
    options.headers["Content-Type"] = "application/json";
  }

  const response = await fetch(url, options);

  console.log(response);

  if (response.status == 401 && redirect_if_unauthorized) {
    return redirect(303, "/login");
  }

  return response;
}
