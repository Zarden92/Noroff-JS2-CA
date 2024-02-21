import { POSTS_URL } from "../../constants/constants.mjs";

export async function editPost(post) {
  const token = localStorage.getItem("token");

  const { id } = post;
  delete post.id;

  if (!token) {
    throw new Error("Please log in to edit post");
  }

  const options = {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(`${POSTS_URL}/${id}`, options);
  console.log(response);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.errors[0].message);
  }

  return json;
}
