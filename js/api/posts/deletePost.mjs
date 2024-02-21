import { POSTS_URL } from "../../constants/constants.mjs";

export async function deletePost(id) {
  const token = localStorage.getItem("token");
  //console.log("Token retrieved from storage:", token);

  if (!token) {
    throw new Error("Please log in to DELETE posts");
  }

  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const url = `${POSTS_URL}/${id}`;

  const response = await fetch(url, options);
  console.log(response);
  const results = await response.json();

  if (!response.ok) {
    throw new Error(results.errors[0].message);
  }
  return results;
}
