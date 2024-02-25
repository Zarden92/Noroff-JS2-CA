import { POSTS_URL } from "../../constants/constants.mjs";

/**
 * Fetches a single post from the server.
 * @param {string} id - The ID of the post to fetch.
 * @throws {Error} If no post ID is provided.
 * @throws {Error} If the user is not logged in.
 * @throws {Error} If the server responds with an error.
 * @returns {Promise<Object>} The post data.
 */

export async function getSinglePost(id) {
  if (!id) {
    throw new Error("No post ID was provided");
  }
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please log in to view posts");
  }

  const options = {
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
