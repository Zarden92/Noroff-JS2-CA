import { REGISTER_URL } from "../../constants/constants.mjs";

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
