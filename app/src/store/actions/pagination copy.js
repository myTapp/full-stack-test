export function getDataApi(page) {
   console.log("getDataApi", page);
   return {
      type: 'ASYNC_GET_API_DATA',
      payload: {
         page: page
        
      }
  }
    }
