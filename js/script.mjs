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

  //console.log(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      loginFormHandler();
      break;
    case "/registration/":
    case "/registration/index.html":
      registerFormHandler();
      break;
    case "/feed/":
    case "/feed/index.html":
      logoutHandler();
      displayPostHandler();
      handleSearch();
      break;
    case "/feed/newPost.html":
      logoutHandler();
      createPostHandler();
      break;
    case "/post/index.html":
      displaySinglePostHandler();
      logoutHandler();
      break;
    case "/profile/":
      displayProfilePostHandler();
      logoutHandler();
      break;
    case "/profile/edit-post.html":
      editPostHandler();
      logoutHandler();
      break;
  }
}

router();
