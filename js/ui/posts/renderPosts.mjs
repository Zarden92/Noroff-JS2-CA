export function renderPosts(parent, posts) {
  const container = document.querySelector(parent);

  container.innerHTML = "";

  const postsHtml = posts.map((post) => {
    return createPost(post);
  });

  container.append(...postsHtml);
}

function createPost(post) {
  const { id, title: heading, body, media } = post;

  // Create a Bootstrap card element
  const card = document.createElement("div");
  card.classList.add("card", "mt-3", "text-center");

  // Create a card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // username maybe?? author - > author.name should give username

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

  return card;
}
