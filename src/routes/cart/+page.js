// src/routes/[...slug].js
import { error } from "@sveltejs/kit";

export async function load() {
  try {
    // Your logic that might result in an error
    // For example, throw new Error('Something went wrong');

    // If successful, return an empty props object
    return { props: {} };
  } catch (err) {
    // Handle errors
    console.log(err);

    // Return an empty props object to prevent rendering the page
    return { props: {} };
  }
}
