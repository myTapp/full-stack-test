const INITIAL_STATE = {
  chars: [],
  status: "initial"
};

export default function auhtUser(state , action) {
  console.log(state)
  if (!state) {
    state = INITIAL_STATE;
  }

  switch (action.type) {
 
    case "INITIAL_STATE":
      return {
        ...state,
 
      };
      case "GET_API_DATA":
       
        let rows = [];
        let controleElemento = 0;
        let eachRow = [];
        for (let index = 0; index < action.payload.chars.length; index++) {
          controleElemento = controleElemento + 1;
          eachRow.push(action.payload.chars[index]);
          if (controleElemento % 4 === 0) {
            rows.push(eachRow);
            eachRow = [];
          }
        }

        return {
          ...state,
          status: "initialized",
          info: action.payload.info.pages,
          
          chars: rows,
   
        };
      
    default:
      return state;
  }
}
