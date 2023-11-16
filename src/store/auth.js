import Cookies from "js-cookie";
import { derived, writable } from "svelte/store";

export const accessToken = writable(Cookies.get("access_token"));
export const refreshToken = writable(Cookies.get("refresh_token"));
export const authenticated = derived(
  [accessToken, refreshToken],
  ([$accessToken, $refreshToken]) => {
    return $accessToken && $refreshToken;
  }
);
