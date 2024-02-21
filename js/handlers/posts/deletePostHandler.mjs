import { deletePost } from "../../api/posts/deletePost.mjs";

export function deletePostHandler() {
  const deleteButton = document.querySelectorAll(`[data-action="delete"]`);
  console.log("deletePostHandler");
  console.log(deleteButton);
  deleteButton.forEach((button) => {
    button.addEventListener("click", handleDeletePost);
  });
}

async function handleDeletePost(event) {
  const { id } = event.target.dataset;

  //const parentElement = event.target.parentElement;
  //console.log(parentElement);

  const deleteComfirm = confirm("Are you sure you want to delete this post?");
  if (deleteComfirm) {
    // delete post using API
    await deletePost(id);
    //remove post from the UI
    //parentElement.remove();
  }
}
