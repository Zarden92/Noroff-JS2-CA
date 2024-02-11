// handlers/displaySinglePostHandler.mjs
/*import { getSinglePost } from "../api/posts/getSinglePost.mjs";
import { displayMessage } from "../ui/common/displayMessage.mjs";
import { renderSinglePost } from "../ui/posts/renderSinglePost.mjs";

export async function displaySinglePostHandler() {
  console.log("Display single post handler");

  // Get the id from the querystring
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  try {
    if (!id) {
      throw new Error("No post id was provided");
    }

    const post = await getSinglePost(id);
    document.title = `${post.title} | JS 2`;
    renderSinglePost("#post", post);
  } catch (error) {
    console.log(error);
    displayMessage("#post", "danger", error.message);
  }
}*/

// chatgpt

import { getSinglePost } from "../../api/posts/getSinglePost.mjs"; // Import the function to fetch a single post
import { displayMessage } from "../../ui/common/displayMessage.mjs"; // Import the function to display messages
import { renderSinglePost } from "../../ui/posts/renderSinglePost.mjs";

export async function displaySinglePostHandler() {
  console.log("Display single post handler");

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id"); // Get the post ID from the query parameter

  try {
    const post = await getSinglePost(id); // Fetch the single post
    document.title = `${post.title} | JS 2`;
    console.log(document.title);

    renderSinglePost("#post", post); // Render the single post
  } catch (error) {
    console.log(error);
    displayMessage("#post", "danger", error.message); // Display an error message if fetching the post fails
    console.log(id);
  }
}
