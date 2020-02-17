export default function auhtUser(state , action) {
  if (!state) {
    state = INITIAL_STATE;
  }

  switch (action.type) {
 
    case "INITIAL_STATE":
      return {
        ...state,
 
      };
      case "GET_API_DATA":

        return {
          ...state,
          status: "initialized",
          info: action.payload.info.pages,
          chars: charsDataHandling(action.payload.chars),
   
        };
      
    default:
      return state;
  }
}

const INITIAL_STATE = {
  chars: [],
  status: "initial"
};

function charsDataHandling (chars){
  let rows = [];
  let controleElemento = 0;
  let eachRow = [];
  for (let index = 0; index < chars.length; index++) {
    controleElemento = controleElemento + 1;
    eachRow.push(chars[index]);
    if (controleElemento % 4 === 0) {
      rows.push(eachRow);
      eachRow = [];
    }
  }
  return rows;
}