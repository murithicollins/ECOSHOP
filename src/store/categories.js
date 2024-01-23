// @ts-nocheck
// import { writable } from "svelte/store";

// export const categories = writable([]);

// const API_BASE_URL = import.meta.env.VITE_BASE_URL; // Replace with your actual API base URL

// export async function getCategories() {
//   const response = await fetch(
//     `${API_BASE_URL}/api/categories?populate[0]=image`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   if (response.ok) {
//     const { data } = await response.json();
//     categories.set(data);
//     return data;
//   }
// }
import { writable } from "svelte/store";

export const categories = writable([]);

const API_BASE_URL = import.meta.env.VITE_BASE_URL_2; // Replace with your actual API base URL

export async function getCategories(business) {
  const response = await fetch(
    `${API_BASE_URL}/category/?business_code=${business}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    const json = await response.json();
    categories.set(json);
    // console.log(json);

    return json;
  }
}
