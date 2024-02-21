//import { getUserName } from "../utlilities/helpers/getUserName.mjs";

const API_URL = "https://api.noroff.dev/api/v1/social/";
export const REGISTER_URL = `${API_URL}auth/register`;
export const LOGIN_URL = `${API_URL}auth/login`;
export const POSTS_URL = `${API_URL}posts`;
//export const DELETE_URL = `${API_URL}posts/${id}`;
//export const PROFILE_URL = `${API_URL}profiles/${getUserName}/posts`;
//console.log(PROFILE_URL);

const userName = localStorage.getItem("userName");

export const PROFILE_URL = `${API_URL}profiles/${userName}/posts`;
