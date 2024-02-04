import { loginFormHandler } from "./handlers/auth/loginFormHandler.mjs";
import { registerFormHandler } from "./handlers/auth/registerFormHandler.mjs";

function router() {
  const pathname = window.location.pathname;

  console.log(pathname);

  switch (pathname) {
    case "/":
      console.log("this is the login page");
      loginFormHandler();
      break;
    case "/registration/":
      console.log("this is the registration page");
      // Kjører registerFormHandler på registreringssiden
      registerFormHandler();
      break;
  }
}

router();
