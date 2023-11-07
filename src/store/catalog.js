import { writable } from "svelte/store";
import api from "$lib/api";

export const shopitems = writable([]);

export async function getshopitems() {
  try {
    const response = await api.get("/api/catalogs?populate[0]=images");
    // console.log(response.data.data);
    shopitems.set(response.data.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
