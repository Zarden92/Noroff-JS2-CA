export function renderSinglePost(parent, post) {
  const container = document.querySelector(parent);

  container.innerHTML = "";

  const postContainer = createPost(post); // Create HTML elements for the single post
  container.appendChild(postContainer);
}

/*export function renderSinglePost(parent, post) {
  const container = document.querySelector(parent);

  container.innerHTML = "";

  post.forEach((singlePost) => {
    const postContainer = createPost(singlePost);
    container.appendChild(postContainer);
  });
}*/

function createPost(post) {
  const { id, title: heading, body } = post; // destructuring

  // Create a Bootstrap card element
  const card = document.createElement("div");
  card.classList.add("card");

  // Create a card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Create a card title
  const title = document.createElement("h3");
  title.classList.add("card-title");
  title.textContent = heading;

  // Create a card text for the post body
  const bodyParagraph = document.createElement("p");
  bodyParagraph.classList.add("card-text");
  bodyParagraph.textContent = body;

  // create link to post html with id in the querystring
  const link = document.createElement("a");
  link.href = `/post/index.html?id=${id}`;
  link.textContent = "Read more";
  link.classList.add("btn", "btn-primary");

  // Add event listener to handle link click
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    window.location.href = link.href; // Redirect to the single post page
  });

  // Append elements to card body
  cardBody.appendChild(title);
  cardBody.appendChild(bodyParagraph);
  cardBody.appendChild(link);

  // Append image and card body to card
  card.appendChild(cardBody);

  return card;
}
