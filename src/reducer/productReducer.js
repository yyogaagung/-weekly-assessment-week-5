const initialState = {
    list: [],
    loading:false,
    error:''
}



const productReducer= (state = initialState, action) => {
    switch(action.type){
        case 'POST/FETCH-START':
            return {
                    ...state,
                    loading:true
                }
        case 'POST/FETCH-SUCCESS':
            return {
                    ...state,
                    loading:false,
                    list:action.payload,
                    error:''
                }
        case 'POST/FETCH-FAILED':
            return {
                    ...state,
                    loading:false,
                    error:action.payload
                }
        default:
            return state;
    }
}

export default productReducer;