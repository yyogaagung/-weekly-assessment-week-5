// const counterReducer = (state = 0, action) =>{
//     switch(action.type){
//         case 'STATE/INCREMENT':
//             return state + action.payload;
//         case 'STATE/DECREMENT':
//             return state - action.payload;
//         default:
//             return state;
//     }
// }

// export default counterReducer;

const initialState = {
    product:[],
    price:0
}

const counterReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'STATE/INCREMENT':
            // let i= 0;
            // const temp1 = [...state.product];  
            // const addKeyValue = temp1.map(object => {
            //     return {...object, index: i++};
            //   });
            return {
                ...state,
                product: [...state.product, action.payload],
                price: state.price + action.payload.price
            }
        case 'STATE/DECREMENT':
            // const tempPrice = state.price
            const temp = [...state.product];              
            const result = temp.filter((val) => val.uid !== action.payload.uid);
            return { 
                ...state,               
                product : result,
                price: state.price - action.payload.price
            }
            // return {
            //     ...state,
            //     product: [...state.product, action.payload],
            //     price: state.price + action.payload.price
            // }
        default:
            return state;
    }
}

export default counterReducer;