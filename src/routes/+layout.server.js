// import { BASE_API_URL } from "$lib/constants/index.js";
// import { fail } from "@sveltejs/kit";
// import { url } from "inspector";
import { hostname } from "os";
// import { handleSession } from "svelte-kit-cookie-session";

// import { getCategories } from "../../store/categories.js";

export async function load({ request, locals }) {
  const API_BASE_URL = import.meta.env.VITE_BASE_URL_2; // Replace with your actual API base URL
  const hostname = new URL(request.url).hostname;
  console.log(hostname);

  //   const response = await fetch(
  //     `${API_BASE_URL}hostname-business/?fqdn=${hostname}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     }
  //   );
  //   // const hostname = new URL(request.url).hostname;

  // //   const token = locals.session.data.accessToken;
  //   let settings;
  //   const response = await fetch(`${BASE_API_URL}settings/`, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  //   if (response.ok) {
  //     const json = await response.json();
  //     settings = json[0];
  //     // console.log(settings);
  //   } else {
  //     // console.log("something wrong happened");
  //     // console.log(response);
  //     return fail(500);
  //   }

  //   return {
  //     session: locals.session.data,
  //     settings,
  //   };
}

// export const logout = handleSession(
//   {
//     secret: "SOME_COMPLEX_SECRET_32_CHARSLONG",
//   },
//   async ({ event }) => {
//     event.locals.session.destroy();
//   }
// );
