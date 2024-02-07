export function renderPosts(parent, posts) {
  const container = document.querySelector(parent);

  container.innerHTML = "";

  //posts.forEach((post) => {
  //const postContainer = createPost(post);
  //container.appendChild(postContainer);
  //});

  // Should get used to map for react later on
  const postsHtml = posts.map((post) => {
    return createPost(post);
  });

  container.append(...postsHtml);
  console.log(postsHtml);
}

/*
function createPost(post) {
  const { id, title: heading, body } = post; // destructuring

  const postContainer = document.createElement("div");
  postContainer.classList.add("post");

  const title = document.createElement("h3");
  title.textContent = heading;

  // test
  const bodyParagraph = document.createElement("p");
  bodyParagraph.textContent = body;

  // create link to post html with id in the querystring
  const link = document.createElement("a");
  link.href = `/post/index.html?id=${id}`;
  link.textContent = "Read more";
  link.classList.add("post-link");

  postContainer.appendChild(title);

  postContainer.appendChild(bodyParagraph); // test

  postContainer.appendChild(link);

  return postContainer;
}*/

function createPost(post) {
  const { id, title: heading, body, image } = post; // destructuring

  // Create a Bootstrap card element
  const card = document.createElement("div");
  card.classList.add("card");

  // Create a card body
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  // Create a card title
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = heading;

  // Create a card text for the post body
  const bodyParagraph = document.createElement("p");
  bodyParagraph.classList.add("card-text");
  bodyParagraph.textContent = body;

  // Create an image element within a card
  const postImage = document.createElement("img");
  postImage.classList.add("card-img-top");
  postImage.src = image; // Set the image source

  // create link to post html with id in the querystring
  const link = document.createElement("a");
  link.href = `/post/index.html?id=${id}`;
  link.textContent = "Read more";
  link.classList.add("btn", "btn-primary");

  // Append elements to card body
  cardBody.appendChild(title);
  cardBody.appendChild(bodyParagraph);
  cardBody.appendChild(link);

  // Append image and card body to card
  card.appendChild(cardBody);

  return card;
}
