import { getPosts } from "../../api/posts/getPosts.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { renderPosts } from "../../ui/posts/renderPosts.mjs";

/**
 * Handles the display of posts.
 * This function is called to fetch and display posts from the API.
 * It uses the `getPosts` function to fetch the posts, and the `renderPosts` function to display them.
 * If there's an error, it logs the error and displays an error message using the `displayMessage` function.
 */

export async function displayPostHandler() {
  try {
    const posts = await getPosts();
    renderPosts("#posts", posts);
  } catch (error) {
    console.log(error);
    displayMessage("#posts", "danger", error.message);
  }
}
