import { searchPosts } from "../../api/posts/searchPost.mjs"; // Update the path accordingly
import { renderPosts } from "../../ui/posts/renderPosts.mjs"; // Update the path accordingly
import { displayMessage } from "../../ui/common/displayMessage.mjs";

// Handler function for searching posts by tag
export async function handleSearch() {
  try {
    const searchInput = document.getElementById("search-feed");
    const tag = searchInput.value.trim(); // Get the tag from the input field

    if (!tag) {
      throw new Error("Please enter a search tag"); // Corrected error message
    }

    const searchResults = await searchPosts(tag); // Call the searchPosts function with the tag
    renderPosts("#posts", searchResults); // Render the search results in the specified parent container
  } catch (error) {
    console.log(error);
    displayMessage("#posts", "danger", error.message); // Corrected selector from #post to #posts
  }
}

// Check if the search-feed element exists before attaching the event listener
const searchFeedButton = document.querySelector(".search-feed");
if (searchFeedButton) {
  searchFeedButton.addEventListener("click", handleSearch);
}
