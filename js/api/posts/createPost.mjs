import { POSTS_URL } from "../../constants/constants.mjs";

export async function createPost(postData) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Please log in to create post");
  }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  };

  const response = await fetch(POSTS_URL, options);
  const json = await response.json();

  if (response.ok) {
    return json;
  }

  throw new Error(json.errors[0].message);
}
