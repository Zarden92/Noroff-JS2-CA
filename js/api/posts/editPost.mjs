import { POSTS_URL } from "../../constants/constants.mjs";

/**
 * Edits an existing post on the server.
 * @param {Object} post - The data for the post to edit. Must include the post's ID.
 * @throws {Error} If the user is not logged in.
 * @throws {Error} If the server responds with an error.
 * @returns {Promise<Object>} The data for the edited post.
 */

export async function editPost(post) {
  const token = localStorage.getItem("token");

  const { id } = post;
  delete post.id;

  if (!token) {
    throw new Error("Please log in to edit post");
  }

  const options = {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${POSTS_URL}/${id}`, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors[0].message);
  }

  return json;
}
