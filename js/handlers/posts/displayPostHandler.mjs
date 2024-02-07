import { getPosts } from "../../api/posts/getPosts.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { renderPosts } from "../../ui/posts/renderPosts.mjs";

export async function displayPostHandler() {
  console.log("Display posts handler");

  try {
    const posts = await getPosts();
    renderPosts("#posts", posts);
  } catch (error) {
    console.log(error);
    displayMessage("#posts", "danger", error.message);
  }
}
