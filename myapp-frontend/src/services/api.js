import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api",
});

export const login = async (username, password) => {
  return api.post("/login", { username, password });
};

export const getTaps = async (token) => {
  return axios.get("https://app2.mytapp.com.br/api/app/getTaps?e_id=456", {
    headers: {
      Authorization: token,
    },
  });
};
