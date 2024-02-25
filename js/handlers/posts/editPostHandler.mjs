import { getSinglePost } from "../../api/posts/getSinglePost.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { handleEditPost } from "./handleEditPost.mjs";

/**
 * Handles the process of editing a post.
 * It fetches the post with the given id from the URL parameters,
 * populates the form with the post data and sets up the form submission handler.
 * @throws {Error} If no post id was provided in the URL parameters.
 */

export async function editPostHandler() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (!id) {
    throw new Error("No post id was provided");
  }

  try {
    const post = await getSinglePost(id);
    populateForm(post);
  } catch (error) {
    console.log(error);
    displayMessage("#message", "danger", error);
  }
}

/**
 * Populates the form with the given post data.
 * It sets the form fields with the post properties and sets up the form submission handler.
 * @param {Object} post - The post data.
 * @param {string} post.id - The id of the post.
 * @param {string} post.title - The title of the post.
 * @param {string} post.body - The body of the post.
 * @param {string} post.media.url - The URL of the media.
 */

function populateForm(post) {
  const { id, title, body, media } = post;
  const form = document.querySelector("#editPostForm");
  if (!form) {
    console.error("Form element not found");
    return;
  }

  form.id.value = id;
  form.title.value = title;
  form.body.value = body;

  if (media && media.url) {
    form.media.value = media.url;
  }

  form.addEventListener("submit", handleEditPost); 
}
