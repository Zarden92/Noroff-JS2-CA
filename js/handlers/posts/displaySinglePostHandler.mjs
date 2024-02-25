import { getSinglePost } from "../../api/posts/getSinglePost.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { renderSinglePost } from "../../ui/posts/renderSinglePost.mjs";

/**
 * Fetches and displays a single post based on the post ID from the URL query parameter.
 * If the post ID is not provided, it throws an error.
 * If the post is fetched successfully, it changes the document title to include the post title and renders the post.
 * If there is an error in fetching the post, it logs the error and displays an error message.
 * @throws {Error} When no post id is provided in the URL query parameter.
 */

export async function displaySinglePostHandler() {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    if (!id) {
      throw new Error("No post id was provided");
    }

    const post = await getSinglePost(id);

    if (post) {
      document.title = `JS 2 / ${post.title}`;
      renderSinglePost("#post", post);
    }
  } catch (error) {
    console.log(error);
    displayMessage("#post", "danger", error.message);
  }
}
