import {
  postGetApi,
  postSave,
  setVote,
  removePost,
  removeVote
} from "../service/PostService";

const POST_SAVE = {
  type: "ASYNC_SAVE_POST",
  payload: { title: "Jest test", description: "Integration Test" }
};
const POST_ACTION = {
  type: "ASYNC_SET_VOTES",
  payload: {
    postId: 825,
    posts:[]
  }
};

describe(" Testing  Post Api", () => {

  it("assync save  post", async () => {
    const postRequest = await postSave(POST_SAVE);
    expect(postRequest.id).not.toBeNull();
  });

  it("assync delete  post", async () => {
    const postRequest = await postSave(POST_SAVE);
    expect(postRequest.id).not.toBeNull();
    POST_ACTION.payload.postId = postRequest.id;

    let deletedPost = await removePost(POST_ACTION)
    expect(deletedPost.data).toEqual('post deleted')
  });

  it("assync setVote  post", async () => {
    const postRequest = await postSave(POST_SAVE);
    expect(postRequest.id).not.toBeNull();

    POST_ACTION.payload.postId = postRequest.id;
    let votePost = await setVote(POST_ACTION);
    expect(votePost.data).toEqual('add 1 vote')
  });

  it("assync setVote  post", async () => {
    const postRequest = await postSave(POST_SAVE);
    expect(postRequest.id).not.toBeNull();
    let votePost = await removeVote(POST_ACTION);
    POST_ACTION.payload.postId = postRequest.id;
    expect(votePost.data).toEqual('remove 1 vote')
  });

  it("assync get all posts", async () => {
    const posts = await postGetApi();

    expect(posts).not.toBeNull();
    expect(posts.length).toBeGreaterThan(0);
  });
});
