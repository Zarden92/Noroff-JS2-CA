import { PROFILE_URL } from "../../constants/constants.mjs";

/**
 *
 * @param {dataType} userName checking userName from localStorage
 * @returns json userdata from API URL
 */
export async function getProfilePosts(userName) {
  const token = localStorage.getItem("token");
  console.log("Token retrieved from storage:", token);

  if (!token) {
    throw new Error("Please log in to view posts");
  }

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(PROFILE_URL, options);
    const json = await response.json();
    console.log(response);

    if (!response.ok) {
      throw new Error(json.errors[0].message);
    }

    return json;
  } catch (error) {
    console.error(" Error fetching posts", error);
    throw error;
  }
}
