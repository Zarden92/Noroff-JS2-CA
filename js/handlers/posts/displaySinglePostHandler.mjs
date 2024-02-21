import { getSinglePost } from "../../api/posts/getSinglePost.mjs"; // Import the function to fetch a single post
import { displayMessage } from "../../ui/common/displayMessage.mjs"; // Import the function to display messages
import { renderSinglePost } from "../../ui/posts/renderSinglePost.mjs";

/**
 * @param {dataType} id - checks the id of the post
 * returns displays single post
 */
export async function displaySinglePostHandler() {
  console.log(displaySinglePostHandler);

  try {
    // this can be moved into a utility function
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id"); // Get the post ID from the query parameter

    if (!id) {
      throw new Error("No post id was provided");
    }

    const post = await getSinglePost(id); // Fetch the single post

    if (post) {
      document.title = `JS 2 / ${post.title}`;
      renderSinglePost("#post", post); // Render the single post
    }
  } catch (error) {
    console.log(error);
    displayMessage("#post", "danger", error.message); // Display an error message if fetching the post fails
  }
}
