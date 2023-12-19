// @ts-nocheck
import { handleSession } from "svelte-kit-cookie-session";
import { fetchUserData } from "$lib/auth.js";
import { redirect } from "@sveltejs/kit";

export const handle = handleSession(
  {
    secret: "SOME_COMPLEX_SECRET_32_CHARSLONG",
  },
  async ({ event, resolve }) => {
    // event.locals is populated with the session `event.locals.session`

    const protectedRoutesPatterns = [
      new RegExp("/Account"),
      //match all url with /dashboard or tralin after it
      new RegExp("/Account.*"),
    ];

    let token = event.locals.session.data.accessToken;

    let user = event.locals.session.data.user;

    //  && (!user || JSON.stringify(user) === '{}')
    if (token) {
      let user = await fetchUserData(token);
      if (user) {
        // console.log(user);
        await event.locals.session.set({ accessToken: token, user: user });
      } else {
        token = "";
      }
    }
    console.log(event.url.pathname);
    if (event.url.pathname === "/Account") {
      // console.log("hook hook");
    }
    if (
      protectedRoutesPatterns.some((pattern) =>
        pattern.test(event.url.pathname)
      ) &&
      !token
    ) {
      // Redirect to login
      console.log("Preotected route without token");
      throw redirect(307, "/Login");
    }

    // Do anything you want here
    // console.log(event.locals.session.data)
    return resolve(event);
  }
);
