import { REGISTER_URL } from "../../constants/constants.mjs";

/**
 * Sends a POST request to the register URL with the provided user details.
 * @param {Object} userDetails - The user details for registration.
 * @returns {Promise<Object>} A promise that resolves to the response object if the request was successful.
 * @throws {Error} If the request was unsuccessful, an error is thrown with the first error message from the response.
 */

export async function register(userDetails) {
  const options = {
    method: "POST",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(userDetails),
  };

  const response = await fetch(REGISTER_URL, options);
  const json = await response.json();

  console.log(response);

  if (response.ok) {
    return json;
  }

  throw new Error(json.errors[0].message);
}
