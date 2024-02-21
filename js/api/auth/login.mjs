import { LOGIN_URL } from "../../constants/constants.mjs";

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
