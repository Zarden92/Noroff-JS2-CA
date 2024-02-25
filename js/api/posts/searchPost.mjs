import { POSTS_URL } from "../../constants/constants.mjs";

/**
 * Searches for posts with a specific tag.
 * @param {string} tag - The tag to search for.
 * @returns {Promise<Array<Object>>} The posts with the provided tag.
 * @throws {Error} If no posts are found with the provided tag.
 */

export async function searchPosts(tag) {
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

  const response = await fetch(`${POSTS_URL}?_tag=${tag}`, options);
  const json = await response.json();

  if (response.ok) {
    if (json.length === 0) {
      throw new Error("No posts found with the provided tag.");
    }
    return json;
  } else {
    throw new Error("Failed to fetch posts.");
  }
}
