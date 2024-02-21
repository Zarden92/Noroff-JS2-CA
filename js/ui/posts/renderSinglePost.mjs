export function renderSinglePost(parent, post) {
  const container = document.querySelector(parent);

  container.innerHTML = "";

  // Create HTML elements for the single post
  const postHtml = createPost(post);

  // Append the single post HTML to the container
  container.appendChild(postHtml);

  // Optionally, log the created HTML for debugging
  console.log(postHtml);
}

function createPost(post) {
  const { title: heading, body, media } = post; // destructuring

  // Create a Bootstrap card element
  const card = document.createElement("div");
  card.classList.add("card", "text-center", "bg-light");

  // Create a card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Create a card title
  const title = document.createElement("h3");
  title.classList.add("card-title");
  title.textContent = heading;

  const img = document.createElement("img");
  img.src = media;
  img.classList.add("card-img-top", "mt-5");

  // Create elements for created and updated dates
  const createdDate = document.createElement("p");
  createdDate.textContent = `Created: ${new Date(
    post.created
  ).toLocaleDateString()}`;

  const updatedDate = document.createElement("p");
  updatedDate.textContent = `Updated: ${new Date(
    post.updated
  ).toLocaleDateString()}`;

  // Create a card text for the body
  const text = document.createElement("p");
  text.classList.add("card-text");
  text.textContent = body;

  const button = document.createElement("button");
  button.textContent = "Return to Feed";
  button.classList.add("btn", "btn-danger"); // Add Bootstrap classes for styling

  // Add an event listener to the button
  button.addEventListener("click", () => {
    window.location.href = "/feed/";
  });

  // Append the title and text to the card body
  cardBody.appendChild(title);
  cardBody.appendChild(text);

  cardBody.appendChild(createdDate);
  cardBody.appendChild(updatedDate);

  // Append the card body to the card

  card.appendChild(img);
  card.appendChild(cardBody);
  card.appendChild(button);

  return card;
}
