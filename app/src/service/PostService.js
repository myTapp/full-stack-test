import axios from "axios";
const API_URL = "http://localhost:8080/v1/posts";

export async function removeVote(action) {
  return (
    await axios.delete(
      `http://localhost:8080/v1/posts/vote?postId=${action.payload.postId}`
    )
  ).data;
}

export async function removePost(action) {
  return await (
    await axios.delete(`${API_URL}?postId=${action.payload.postId}`)
  ).data;
}

export async function setVote(action) {

  return (await axios.post(`${API_URL}/vote?postId=${action.payload.postId}`))
    .data;
}

export async function postSave(action) {
    console.log(action);
  let requestBodyParam = {
    title: action.payload.title,
    description: action.payload.description
  };
  return await (await axios.post(`${API_URL}`, requestBodyParam)).data.data;
}

export async function postGetApi() {
  let resp = await axios.get(`${API_URL}`);

  return resolveResp(resp);
}

function resolveResp(resp) {
  let posts = resp.data.data;
  posts.sort(function(a, b) {
    return b.upVotes.length - a.upVotes.length;
  });
  return posts;
}
