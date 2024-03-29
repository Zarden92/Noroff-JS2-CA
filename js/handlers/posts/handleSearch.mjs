import { searchPosts } from "../../api/posts/searchPost.mjs";
import { renderPosts } from "../../ui/posts/renderPosts.mjs";
import { displayMessage } from "../../ui/common/displayMessage.mjs";

/**
 * Handles the search operation.
 * @param {string} tag - The tag to search for.
 * @throws Will throw an error if the tag is not provided.
 */

export async function handleSearch(tag) {
  try {
    if (!tag) {
      throw new Error("Please enter a search tag");
    }

    const searchResults = await searchPosts(tag);
    renderPosts("#posts", searchResults);
  } catch (error) {
    console.log(error);
    displayMessage("#posts", "danger", error.message);
  }
}

const searchFeedButton = document.querySelector(".search-feed");

/**
 * Adds an event listener to the search feed button if it exists.
 */

if (searchFeedButton) {
  searchFeedButton.addEventListener("click", () => {
    const searchInput = document.getElementById("search-feed");
    const tag = searchInput.value.trim();

    if (tag) {
      handleSearch(tag);
    }
  });
}

// maybe make the function search tiltle and body?
/*
/social/posts/search?q=<query>
Search for posts by their title or body properties.
*/
