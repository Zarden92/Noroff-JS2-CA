import { LOGIN_URL } from "../../constants/constants.mjs";

/**
 * Sends a POST request to the login URL with the provided user details.
 * @param {Object} userDetails - The user details for login.
 * @param {string} userDetails.username - The username of the user.
 * @param {string} userDetails.password - The password of the user.
 * @returns {Promise<Object>} A promise that resolves to the response object if the request was successful.
 * @throws {Error} If the request was unsuccessful, an error is thrown with the message from the response.
 */

export async function login(userDetails) {
  const options = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(userDetails),
  };

  const response = await fetch(LOGIN_URL, options);
  const json = await response.json();

  if (response.ok) {
    return json;
  }

  throw new Error(json.errors[0].message);
}
