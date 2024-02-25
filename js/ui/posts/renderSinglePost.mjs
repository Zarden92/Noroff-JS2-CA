/**
 * Renders a single post in the specified parent element.
 * @param {string} parent - The CSS selector for the parent element.
 * @param {Object} post - The data for the post to render.
 */

export function renderSinglePost(parent, post) {
  const container = document.querySelector(parent);

  container.innerHTML = "";

  const postHtml = createPost(post);
  container.appendChild(postHtml);
}

/**
 * Creates a DOM element for a post.
 * @param {Object} post - The data for the post.
 * @returns {HTMLElement} The DOM element for the post.
 */

function createPost(post) {
  const { title: heading, body, media } = post; // destructuring

  const card = document.createElement("div");
  card.classList.add("card", "text-center", "bg-light");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h3");
  title.classList.add("card-title");
  title.textContent = heading;

  const img = document.createElement("img");
  img.src = media;
  img.classList.add("card-img-top", "mt-5");

  const createdDate = document.createElement("p");
  createdDate.textContent = `Created: ${new Date(
    post.created
  ).toLocaleDateString()}`;

  const updatedDate = document.createElement("p");
  updatedDate.textContent = `Updated: ${new Date(
    post.updated
  ).toLocaleDateString()}`;

  const text = document.createElement("p");
  text.classList.add("card-text");
  text.textContent = body;

  const button = document.createElement("button");
  button.textContent = "Return to Feed";
  button.classList.add("btn", "btn-danger");

  button.addEventListener("click", () => {
    window.location.href = "/feed/";
  });

  cardBody.appendChild(title);
  cardBody.appendChild(text);
  cardBody.appendChild(createdDate);
  cardBody.appendChild(updatedDate);
  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(button);

  return card;
}
