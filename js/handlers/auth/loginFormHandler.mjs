import { login } from "../../api/auth/login.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import * as utlilities from "../../utlilities/storage/index.mjs";

/**
 * Attaches the login form submission event handler.
 * This function is called to attach the `handleLoginForm` function to the submit event of the form with id "loginForm".
 * @function
 */

export function loginFormHandler() {
  console.log("Function loginFormHandler is called");
  const form = document.querySelector("#loginForm");
  form.addEventListener("submit", handleLoginForm);
}

/**
 * Handles the login form submission.
 * This function is called when the form with id "loginForm" is submitted.
 * It prevents the default form submission behavior, collects the data from the form fields,
 * and sends a request to login the user using the login API.
 * If the login is successful, it saves the user's token, name, and email to storage, and redirects the user to the feed page.
 * If there's an error, it logs the error and displays an error message.
 *
 * @async
 * @function
 * @param {Event} event - The form submission event
 * @returns {Promise<void>}
 */

async function handleLoginForm(event) {
  event.preventDefault();

  const form = event.target;

  const formData = new FormData(form);
  const entries = formData.entries();
  const userDetails = Object.fromEntries(entries);

  const fieldset = form.querySelector("fieldset");

  try {
    fieldset.disabled = true;
    const response = await login(userDetails);

    // Laura
    if (response && response.accessToken) {
      utlilities.save("token", response.accessToken);
      utlilities.save("userName", response.name);
      utlilities.save("email", response.email);
      window.location.href = "/feed";
      console.log(response.name);
    }
  } catch (error) {
    console.log(error);
    displayMessage("#message", "danger", error.message);
  } finally {
    fieldset.disabled = false;
  }
}
