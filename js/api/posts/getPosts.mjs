import { POSTS_URL } from "../../constants/constants.mjs";

/**
 * Fetches all posts from the server.
 * @throws {Error} If the user is not logged in.
 * @throws {Error} If the server responds with an error.
 * @returns {Promise<Array<Object>>} An array of post data.
 */

export async function getPosts() {
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

  const response = await fetch(POSTS_URL, options);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors[0].message);
  }

  return json;
}
