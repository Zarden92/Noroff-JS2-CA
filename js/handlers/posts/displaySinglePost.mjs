import { getSinglePost } from "../../api/posts/getSinglePost.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { renderPost } from "../../ui/posts/renderPost.mjs";

export async function displaySinglePostHandler() {
  console.log("Display posts handler");

  // Get the id from the querystring

  try {
    if (!id) {
      throw new Error("No post id was provided");
    }

    const post = await getSinglePost(id);
    document.title = `${post.title} ! JS 2`;
    renderPost("#post", post);
  } catch (error) {
    console.log(error);
    displayMessage("#post", "danger", error.message);
  }
}
