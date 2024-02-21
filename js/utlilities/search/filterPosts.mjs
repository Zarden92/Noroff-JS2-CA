/*export function filterPosts() {
  // Declare variables
  let input, filter, posts, post, title, i, txtValue;
  input = document.getElementById("search-feed");
  filter = input.value.toLowerCase();
  posts = document.querySelectorAll(".post"); // Assuming each post has a class named 'post'

  // Loop through all posts, and hide those that don't match the search query
  posts.forEach(function (post) {
    title = post.querySelector(".card-title"); // Assuming post title is within an element with class 'card-title'
    txtValue = title.textContent.toLowerCase();
    if (txtValue.includes(filter)) {
      post.style.display = "";
    } else {
      post.style.display = "none";
    }
  });
}*/

export const filteredPosts = posts.filter((posts) => {
  // Define your filtering logic here
  const searchTerm = searchInput.toLowerCase(); // Assuming searchInput contains the search query
  return (
    posts.title.toLowerCase().includes(searchTerm) ||
    posts.body.toLowerCase().includes(searchTerm)
  );
});
