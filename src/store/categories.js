import { writable } from "svelte/store";
import api from "$lib/api";

export const categories = writable([
  //   {
  //     id: 1,
  //     attributes: {
  //       categoryName: "Water Tanks",
  //       createdAt: "2023-10-27T09:39:51.429Z",
  //       updatedAt: "2023-10-27T10:04:26.465Z",
  //       publishedAt: "2023-10-27T10:04:26.462Z",
  //     },
  //   },
]);

export async function getCategories() {
  try {
    const response = await api.get("/categories?populate[0]=image");
    // console.log(response.data.data);
    categories.set(response.data.data);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
