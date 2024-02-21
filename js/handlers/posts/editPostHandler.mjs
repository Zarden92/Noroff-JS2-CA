import { getSinglePost } from "../../api/posts/getSinglePost.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { editPost } from "../../api/posts/editPost.mjs";

export async function editPostHandler() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (!id) {
    throw new Error("No post id was provided");
  }

  try {
    const post = await getSinglePost(id);
    console.log(post); // Log the post object to verify its structure and content
    populateForm(post); // Call populateForm with the retrieved post
  } catch (error) {
    console.log(error);
    displayMessage("#message", "danger", error);
  }
}

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

  // Check if media exists and has a URL
  if (media && media.url) {
    form.media.value = media.url;
  }

  form.addEventListener("submit", handleEditPost);
}

// move this to another file and import
async function handleEditPost(event) {
  event.preventDefault();

  const form = event.target;

  const formData = new FormData(form);
  const entries = formData.entries();
  const post = Object.fromEntries(entries);

  console.log(post);

  try {
    await editPost(post);
    displayMessage("#message", "success", "Post successfully edited.");
    setTimeout(() => {
      window.location.href = "/profile/";
    }, 2000);
  } catch (error) {
    console.log(error);
    displayMessage("#message", "danger", error.message);
  }
}
