import { register } from "../../api/auth/register.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";

export function registerFormHandler() {
  console.log("Function registerFormHandler is called");

  const form = document.querySelector("#registerForm");

  form.addEventListener("submit", handleRegisterForm);
}

async function handleRegisterForm(event) {
  event.preventDefault();
  console.log(event);

  const form = event.target;

  const formData = new FormData(form);
  const entries = formData.entries();
  const userDetails = Object.fromEntries(entries);

  const fieldset = form.querySelector("fieldset");

  try {
    fieldset.disabled = true;
    await register(userDetails);
    displayMessage("#message", "success", "You registred successfully");
    form.reset();
  } catch (error) {
    console.log(error);
    displayMessage("#message", "danger", error.message);
  } finally {
    fieldset.disabled = false;
  }
}
