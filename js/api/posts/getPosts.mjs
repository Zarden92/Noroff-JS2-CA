import { POSTS_URL } from "../../constants/constants.mjs";
import * as storage from "../../utlilities/storage/index.mjs";

export async function getPosts() {
  //const token = getToken();
  //const token = storage.load("token"); // or key?
  const token = localStorage.getItem("token");
  console.log("Token retrieved from storage:", token);

  if (!token) {
    throw new Error("Please log in to view posts");
  }

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(POSTS_URL, options);
  const json = await response.json();
  console.log(response);

  if (!response.ok) {
    throw new Error(json.errors[0].message);
  }

  return json;
}
// Try fetch the posts
// if success, retur the posts
// if error, throw the error
