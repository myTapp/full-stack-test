import reducers from "../store/reducers/index";
const INITIAL_STATE = {
  posts: [],
  status: "initial"
};
  
describe("RREDUCER INITIAL_STATE", () => {
    it("should create an action with corrent type:  INITIAL_STATE", () => {
      expect(
        reducers(INITIAL_STATE, {
          type: "INITIAL_STATE",
        })
      ).toEqual({ posts: {}});
    });
  });
  

  