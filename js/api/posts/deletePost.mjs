import { POSTS_URL } from "../../constants/constants.mjs";

/**
 * Deletes a post from the server.
 * @param {string} id - The ID of the post to delete.
 * @throws {Error} If the user is not logged in.
 * @throws {Error} If the server responds with an error.
 * @returns {Promise<Object>} The server's response to the deletion request.
 */

export async function deletePost(id) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please log in to DELETE posts");
  }

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const url = `${POSTS_URL}/${id}`;

  const response = await fetch(url, options);
  const results = await response.json();

  if (!response.ok) {
    throw new Error(results.errors[0].message);
  }
  return results;
}
