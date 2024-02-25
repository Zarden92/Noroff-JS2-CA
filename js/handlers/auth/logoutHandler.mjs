import * as utilities from "../../utlilities/storage/index.mjs";

/**
 * Handles the logout process.
 * When the logout button is clicked, the access token is removed from storage and the user is redirected to the home page.
 */

export function logoutHandler() {
  const logoutButton = document.querySelector("#logoutBtn");

  logoutButton.addEventListener("click", handleLogout);

  function handleLogout(event) {
    event.preventDefault();

    console.log("Logging out...");

    utilities.remove("accessToken");
    console.log("Access token removed.");
    window.location.href = "/";
  }
}
