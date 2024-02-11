import { loginFormHandler } from "./handlers/auth/loginFormHandler.mjs";
import { registerFormHandler } from "./handlers/auth/registerFormHandler.mjs";
import { logoutHandler } from "./handlers/auth/logoutHandler.mjs";
import { displayPostHandler } from "./handlers/posts/displayPostHandler.mjs";
import { displaySinglePostHandler } from "./handlers/posts/displaySinglePostHandler.mjs";

function router() {
  const pathname = window.location.pathname;

  console.log(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      console.log("this is the login page");
      loginFormHandler();
      break;
    case "/registration/":
    case "/registration/index.html":
      console.log("this is the registration page");
      // Kjører registerFormHandler på registreringssiden
      registerFormHandler();
      break;
    case "/feed/":
    case "/feed/index.html":
      console.log("This is the feed page");
      logoutHandler();
      displayPostHandler();
      break;
    case "/post/index.html":
      console.log("This is the page for a single post");
      displaySinglePostHandler();
      logoutHandler();
      break;
  }
}

router();
