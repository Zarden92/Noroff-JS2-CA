/**
 * Targets container and renders profile posts for profile page with a loading feature
 * @param {container} parent
 * @param {container} profile_posts
 * @returns {content}
 */

export function renderProfilePosts(parent, profile_posts) {
  const container = document.querySelector(parent);

  container.innerHTML = "";

  // Should get used to map for react later on
  const postsHtml = profile_posts.map((post) => {
    return createPost(post);
  });

  container.append(...postsHtml);
  //console.log(postsHtml);
}

/**
 *
 * @param {dataType} post - creates content cards for the profile page
 * @returns content cards for profile/user posts
 */

function createPost(post) {
  const { id, title: heading, body, media } = post; // destructuring

  // Create a Bootstrap card element
  const card = document.createElement("div");
  card.classList.add("profile_card", "card", "mt-3", "text-center");

  // Create a card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Create a card title
  const title = document.createElement("h3");
  title.classList.add("card-title", "mt-3");
  title.textContent = heading;

  // Create a card text for the post body
  const bodyParagraph = document.createElement("p");
  bodyParagraph.classList.add("card-text", "mt-5", "mb-5");
  bodyParagraph.textContent = body;

  // Create an image element
  const img = document.createElement("img");
  img.src = media;
  img.classList.add("card-img-top");

  // create link to post html with id in the querystring
  const button = document.createElement("button");
  button.textContent = "Read more...";
  button.classList.add("btn", "btn-success"); // Add Bootstrap classes for styling

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn", "btn-danger", "mt-2");
  deleteButton.setAttribute("data-id", post.id);
  deleteButton.setAttribute("data-action", "delete");

  const editButton = document.createElement("a");
  editButton.textContent = "Edit";
  editButton.classList.add("btn", "btn-warning", "mt-2");
  editButton.href = `/profile/edit-post.html?id=${id}`;

  // Add an event listener to the button
  button.addEventListener("click", () => {
    window.location.href = `/post/index.html?id=${id}`;
  });

  // Append title to card
  card.appendChild(title);

  // Append image to card
  card.appendChild(img);

  // Append body paragraph to card
  card.appendChild(bodyParagraph);

  // Append button to card
  card.appendChild(button);

  card.appendChild(deleteButton);
  card.appendChild(editButton);

  return card;
}
