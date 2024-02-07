import * as utilities from "../../utlilities/storage/index.mjs";

// Assuming you have a function to remove accessToken, let's call it removeAccessToken
export function logoutHandler() {
  console.log("logoutHandler is called");

  // Corrected selector to use #logoutBtn
  const logoutButton = document.querySelector("#logoutBtn");

  // Use 'click' event for handling logout button click
  logoutButton.addEventListener("click", handleLogout);

  function handleLogout(event) {
    // Prevent the default behavior of the button (form submission, etc.)
    event.preventDefault();

    console.log("Logging out...");

    // Call the existing remove function from your utilities
    utilities.remove("accessToken");
    console.log("Access token removed.");

    // Redirect to the main login page
    window.location.href = "/"; // Replace with the actual path to your login page
  }
}
