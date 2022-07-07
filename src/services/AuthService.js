import axios from "axios";

const baseUrl = "http://10.0.2.2:8060/api";

export async function logInUser(data) {
  let res = await axios.post(`${baseUrl}/user/signin`, data);
  return res;
}

export async function createUser(data) {
  let res = await axios.post(`${baseUrl}/user/signup`, data);
  return res;
}
