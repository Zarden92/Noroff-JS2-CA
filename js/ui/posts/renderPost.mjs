export function renderPost(parent, post) {
  const container = document.querySelector(parent);

  container.innerHTML = "";

  //posts.forEach((post) => {
  //const postContainer = createPost(post);
  //container.appendChild(postContainer);
  //});

  // Should get used to map for react later on
  const postsHtml = post.map((post) => {
    return createPost(post);
  });

  container.append(...postsHtml);
  console.log(postsHtml);
}

function createPost(post) {
  const { id, title: heading } = post; // destructuring

  const postContainer = document.createElement("div");
  postContainer.classList.add("post");

  const title = document.createElement("h3");
  title.textContent = heading;

  // create link to post html with id in the querystring
  const link = document.createElement("a");
  link.href = `/post/index.html?id=${id}`;
  link.textContent = "Read more";
  link.classList.add("post-link");

  postContainer.appendChild(title);
  postContainer.appendChild(link);

  return postContainer;
}
