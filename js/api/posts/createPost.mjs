import { POSTS_URL } from "../../constants/constants.mjs";

/**
 * Creates a new post on the server.
 * @param {Object} postData - The data for the new post.
 * @throws {Error} If the user is not logged in.
 * @throws {Error} If the server responds with an error.
 * @returns {Promise<Object>} The data for the newly created post.
 */

export async function createPost(postData) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please log in to create post");
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  };

  const response = await fetch(POSTS_URL, options);
  const json = await response.json();

  if (response.ok) {
    return json;
  }

  throw new Error(json.errors[0].message);
}
