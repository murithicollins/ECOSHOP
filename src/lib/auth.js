// src/lib/auth.js

// Function to check if the user is authenticated
export function isAuthenticated() {
  // Replace with your logic to check the validity of the token
  const jwtToken = sessionStorage.getItem("access_token");
  return !!jwtToken; // Simple check for token existence
}
