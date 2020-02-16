import { takeLatest, put, all, call } from "redux-saga/effects";
import UserService  from '../service/UserService'




function* asyncGetApiData(action){
 const data = yield call(getApiData, action);
 yield put({
      type: "GET_API_DATA",
      payload: { chars: [...data.chars], info: data.info }
    });

}
async function getApiData(action){
  const userService = new UserService();
  const resp = await userService.getDataApi(action.payload.page);
  
  let data = {info: resp.data.info, chars: [...resp.data.chars]}

  return data;
}


export default function* root() {
  yield all([takeLatest("ASYNC_GET_API_DATA", asyncGetApiData)]);

}

