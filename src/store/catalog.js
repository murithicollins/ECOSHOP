// @ts-nocheck
import { writable } from "svelte/store";
import { getCategories } from "./categories";

export const shopitems = writable([]);
export const itemsBycategory = writable([]);

const API_BASE_URL = import.meta.env.VITE_BASE_URL; // Replace with your actual API base URL

// @ts-ignore
export async function getByCategoryName(categoryName) {
  // @ts-ignore
  getCategories().then((res) => {
    itemsBycategory.set([]);

    res.forEach(async (category) => {
      const response = await fetch(
        `${API_BASE_URL}/api/catalogs?filters[category][categoryName][$eq]=${category.attributes.categoryName}&populate[0]=images&pagination[pageSize]=8`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const { data } = await response.json();

        itemsBycategory.update((items) => [
          ...items,
          { categoryName: category.attributes.categoryName, items: data },
        ]);
      }
    });
  });
}

export async function getshopitems() {
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
