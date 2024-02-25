import { editPost } from "../../api/posts/editPost.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";

/**
 * Handles the form submission event for editing a post.
 * It prevents the default form submission, creates a post object from the form data,
 * sends a request to the API to edit the post, and then redirects the user to the profile page.
 * If an error occurs during this process, it displays an error message.
 * @param {Event} event - The form submission event.
 * @throws {Error} If an error occurs while editing the post.
 */

export async function handleEditPost(event) {
  event.preventDefault();

  const form = event.target;

  const formData = new FormData(form);
  const entries = formData.entries();
  const post = Object.fromEntries(entries);

  try {
    await editPost(post);
    displayMessage(
      "#message",
      "success",
      "Successfully edited! Redirecting..."
    );
    setTimeout(() => {
      window.location.href = "/profile/";
    }, 2000);
  } catch (error) {
    console.log(error);
    displayMessage("#message", "danger", error.message);
  }
}
