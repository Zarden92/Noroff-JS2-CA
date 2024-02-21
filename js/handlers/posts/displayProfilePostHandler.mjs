import { getProfilePosts } from "../../api/posts/getProfilePosts.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";
import { renderProfilePosts } from "../../ui/posts/renderProfilePosts.mjs";
import { deletePostHandler } from "./deletePostHandler.mjs";

/**
 *
 * @param {dataType} userName - checks userName from localStorage
 * returns displays posts from user profile
 */
export async function displayProfilePostHandler(userName) {
  try {
    console.log("profile posts handler");
    //const userName = getUserName();

    const userName = localStorage.getItem("userName");
    console.log(userName);

    if (!userName) {
      throw new error("User not found");
    }

    const posts = await getProfilePosts(userName);
    renderProfilePosts("#profile_posts", posts);
    deletePostHandler();
  } catch (error) {
    console.error(error);
    displayMessage("#profile_posts", "danger", error.message);
  }
}
