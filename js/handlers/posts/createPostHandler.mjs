import { createPost } from "../../api/posts/createPost.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";

export async function createPostHandler() {
  const createPostForm = document.querySelector("#createPostForm");
  if (createPostForm) {
    createPostForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent default form submission behavior

      const newPostText = document.querySelector("#post-body").value;
      const newPostMediaUrl = document.querySelector("#image-url").value;
      const newPostTitle = document.querySelector("#post-title").value;

      const postData = {
        title: newPostTitle,
        body: newPostText,
        media: newPostMediaUrl,
        tags: [""],
      };

      try {
        const json = await createPost(postData);
        displayMessage("#message", "success", "Posted successfully");
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
