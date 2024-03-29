import { createPost } from "../../api/posts/createPost.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";

/**
 * Handles the creation of a new post.
 * This function is attached to the submit event of the form with id "createPostForm".
 * It prevents the default form submission behavior, collects the data from the form fields,
 * and sends a request to create a new post using the createPost API.
 * If the post is created successfully, it displays a success message and redirects the user to the feed page after 2 seconds.
 * If there's an error, it logs the error and displays an error message.
 */

export async function createPostHandler() {
  const createPostForm = document.querySelector("#createPostForm");
  if (createPostForm) {
    createPostForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const { value: body } = document.querySelector("#post-body");
      const { value: media } = document.querySelector("#image-url");
      const { value: title } = document.querySelector("#post-title");
      const { value: tags } = document.querySelector("#post-tags");

      const postData = {
        title,
        body,
        media,
        tags: tags.split(",").map((tag) => tag.trim()), // Split tags by commas and trim whitespace
      };

      try {
        const json = await createPost(postData);
        displayMessage(
          "#message",
          "success",
          "Posted successfully, redirecting..."
        );
        setTimeout(() => {
          window.location.href = "/feed/";
        }, 2000);
      } catch (error) {
        console.error(error);
        displayMessage("#message", "danger", "oh no, post failed!");
      }
    });
  }
}
