import { login } from "../../api/auth/login.mjs"; // create here
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import * as utlilities from "../../utlilities/storage/index.mjs";

export function loginFormHandler() {
  console.log("Function loginFormHandler is called");
  const form = document.querySelector("#loginForm");
  form.addEventListener("submit", handleLoginForm);
}

async function handleLoginForm(event) {
  event.preventDefault();

  const form = event.target;

  const formData = new FormData(form);
  const entries = formData.entries();
  const userDetails = Object.fromEntries(entries);

  const fieldset = form.querySelector("fieldset");

  try {
    fieldset.disabled = true;
    const response = await login(userDetails); // or userData??
    console.log(response);
    // location.href ="/posts or /feed"

    // Laura
    if (response && response.accessToken) {
      utlilities.save("token", response.accessToken);
      window.location.href = "/feed";
    }
  } catch (error) {
    console.log(error);
    displayMessage("#message", "danger", error.message);
  } finally {
    fieldset.disabled = false;
  }
  //console.log(userDetails);
}
