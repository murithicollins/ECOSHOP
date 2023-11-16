// @ts-nocheck
import Cookies from "js-cookie";
import { apiFetch } from "$lib/fetch";
import { accessToken, refreshToken, authenticated } from "../store/auth";
import { redirect } from "@sveltejs/kit";

export async function authenticate(username, password) {
  try {
    const response = await apiFetch("token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();

      return {
        access_token: data.access,
        refresh_token: data.refresh,
        success: true,
      };
    } else {
      return {
        success: false,
      };
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return false;
  }
}

export async function fetchUserData(accessToken) {
  try {
    const response = await apiFetch(
      "users/me",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
      accessToken,
      false
    );

    console.log(`Getting user responded with status ${response.status}`);

    if (response.ok) {
      const userData = await response.json();
      // Process user data as needed
      return userData;
    } else {
      // Handle unauthorized access or other errors
      return null;
    }
  } catch (error) {
    //   console.error('Error fetching user data:', error);
    return null;
  }
}
