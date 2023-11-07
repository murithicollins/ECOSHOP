import { writable } from "svelte/store";
import api from "$lib/api";

export const categories = writable([]);

export async function getCategories() {
  try {
    const response = await api.get("/api/categories?populate[0]=image");
    // console.log(response.data.data);
    categories.set(response.data.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
