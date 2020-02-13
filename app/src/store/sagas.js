import { takeLatest, put, all, call } from "redux-saga/effects";

import axios from "axios";
import { postGetApi , postSave, setVote, removePost} from "../service/PostService";


// GetPosts
function* asyncGetPosts() {
  const resp = yield call(postGetApi);
  yield put({
    type: "GET_POSTS",
    payload: { posts: [...resp] }
  });
}

function* asyncSavePost(action) {
  yield call(postSave, action);
  const resp = yield call(postGetApi);
  yield put({
    type: "GET_POSTS",
    payload: { posts: [...resp] }
  });
}

function* asyncSetVotes(action) {
  yield call(setVote, action);
  const resp = yield call(postGetApi);
  yield put({
    type: "GET_POSTS",
    payload: { posts: [...resp] }
  });
}

// RemovePost
function* asyncRemovePost(action) {
  yield call(removePost, action);
  const resp = yield call(postGetApi);

  yield put({
    type: "GET_POSTS",
    payload: { posts: [...resp] }
  });
}
// RemovePost End

// RemoveVote
function* asyncRemoveVote(action) {
  yield call(removeVote, action);
  const resp = yield call(postGetApi);

  yield put({
    type: "GET_POSTS",
    payload: { posts: [...resp] }
  });
}

async function removeVote(action) {
  return new Promise((resolve, reject) => {
    resolve(
      axios.delete(
        `http://localhost:8080/v1/posts/vote?postId=${action.payload.postId}`
      )
    );
  });
}
// ReomoveVote End
export default function* root() {
  // yield all([takeLatest("ASYNC_GET_STATE", asyncGetPosts)]);

}
