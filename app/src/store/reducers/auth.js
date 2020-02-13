const INITIAL_STATE = {
  posts: [],
  status: "initial"
};

export default function auhtUser(state , action) {
  if (!state) {
    state = INITIAL_STATE;
  }

  switch (action.type) {
    case "INITIAL_STATE":
      return {
        ...state,
 
      };
    case "GET_POSTS":
      return {
        ...state,
        status: "initialized",
        posts: action.payload.posts,
      };
      
    default:
      return state;
  }
}
