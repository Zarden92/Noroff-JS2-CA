import * as utilities from "../storage/index.mjs";

export function getUserName() {
  return utilities.get("userName");
  //console.log("getUsername.mjs is running", getUserName());
}
