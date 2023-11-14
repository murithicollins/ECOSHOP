import { writable } from "svelte/store";

export const shopitems = writable([]);
export const itemsBycategory = writable([]);

const API_BASE_URL = import.meta.env.VITE_BASE_URL; // Replace with your actual API base URL

// @ts-ignore
async function getByCategooryName(categoryName) {
  // @ts-ignore
  const response = await fetch(
    `${API_BASE_URL}/api/catalogs?filters[category][categoryName][$eq]=${categoryName}&populate[0]=images&pagination[pageSize]=5`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    const { data } = await response.json();
    return data;
  }
}

export async function getshopitems() {
  let categoryItems = [];

  const response = await fetch(
    `${API_BASE_URL}/api/catalogs?populate[0]=images`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    const { data } = await response.json();
    shopitems.set(data);
  }
}
