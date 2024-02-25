import { deletePost } from "../../api/posts/deletePost.mjs";

/**
 * Attaches a click event listener to all elements with a data-action attribute of "delete".
 * The event listener triggers the deletion of a post.
 */

export function deletePostHandler() {
  const deleteButton = document.querySelectorAll(`[data-action="delete"]`);
  deleteButton.forEach((button) => {
    button.addEventListener("click", handleDeletePost);
  });
}

/**
 * Handles the deletion of a post.
 * Confirms the deletion with the user and then calls the deletePost API.
 * @param {Event} event - The event object from the click event.
 */
async function handleDeletePost(event) {
  const { id } = event.target.dataset;

  const deleteComfirm = confirm("Are you sure you want to delete this post?");
  if (deleteComfirm) {
    await deletePost(id);
  }
}
