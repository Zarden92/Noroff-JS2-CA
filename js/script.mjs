import { loginFormHandler } from "./handlers/auth/loginFormHandler.mjs";
import { registerFormHandler } from "./handlers/auth/registerFormHandler.mjs";
import { logoutHandler } from "./handlers/auth/logoutHandler.mjs";
import { displayPostHandler } from "./handlers/posts/displayPostHandler.mjs";
import { displaySinglePostHandler } from "./handlers/posts/displaySinglePostHandler.mjs";
import { displayProfilePostHandler } from "./handlers/posts/displayProfilePostHandler.mjs";
import { editPostHandler } from "./handlers/posts/editPostHandler.mjs";
import { createPostHandler } from "./handlers/posts/createPostHandler.mjs";
import { handleSearch } from "./handlers/posts/handleSearch.mjs";

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
      handleSearch();
      break;
    case "/feed/newPost.html":
      console.log("create a new post Page");
      logoutHandler();
      createPostHandler();
      break;
    case "/post/index.html":
      console.log("This is the page for a single post");
      displaySinglePostHandler();
      logoutHandler();
      break;
    case "/profile/":
      console.log("This is the profile page");
      displayProfilePostHandler();
      logoutHandler();
      break;
    case "/profile/edit-post.html":
      console.log("This is the profile-edit page");
      editPostHandler();
      logoutHandler();
      break;
  }
}

router();
