/**
 * Targets container and renders profile posts for profile page with a loading feature
 * @param {container} parent
 * @param {container} profile_posts
 * @returns {content}
 */

export function renderProfilePosts(parent, profile_posts) {
  const container = document.querySelector(parent);

  container.innerHTML = "";

  const postsHtml = profile_posts.map((post) => {
    return createPost(post);
  });

  container.append(...postsHtml);
}

/**
 *
 * @param {dataType} post - creates content cards for the profile page
 * @returns content cards for profile/user posts
 */

function createPost(post) {
  const { id, title: heading, body, media, tags } = post; // destructuring

  const card = document.createElement("div");
  card.classList.add("profile_card", "card", "mt-3", "text-center");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h3");
  title.classList.add("card-title", "mt-3");
  title.textContent = heading;

  const bodyParagraph = document.createElement("p");
  bodyParagraph.classList.add("card-text", "mt-5", "mb-5");
  bodyParagraph.textContent = body;

  const img = document.createElement("img");
  img.src = media;
  img.classList.add("card-img-top");

  const tagsDiv = document.createElement("div");
  tagsDiv.classList.add("tags", "card-body");

  const tagsContent = tags.join(", ");
  const tagsLabel = document.createElement("span");
  tagsLabel.textContent = `Tags: ${tagsContent}`;
  tagsDiv.appendChild(tagsLabel);

  const button = document.createElement("button");
  button.textContent = "Read more...";
  button.classList.add("btn", "btn-success");

  const editButton = document.createElement("a");
  editButton.textContent = "Edit";
  editButton.classList.add("btn", "btn-warning", "mt-2");
  editButton.href = `/profile/edit-post.html?id=${id}`;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn", "btn-danger", "mt-2");
  deleteButton.setAttribute("data-id", post.id);
  deleteButton.setAttribute("data-action", "delete");

  button.addEventListener("click", () => {
    window.location.href = `/post/index.html?id=${id}`;
  });

  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(bodyParagraph);
  card.appendChild(tagsDiv);
  card.appendChild(button);
  card.appendChild(editButton);
  card.appendChild(deleteButton);

  return card;
}
