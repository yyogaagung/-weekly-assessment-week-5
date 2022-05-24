import axios from "axios";

export const increment= (value) => {
    return {
        type: 'STATE/INCREMENT',
        payload : value
    };
};

export const decrement = (value) => {
    return {
        type: 'STATE/DECREMENT',
        payload : value
    };
};

const fetchPostStart = () => {
    return {
        type: 'POST/FETCH-START',
    };
};
const fetchPostSuccess = (payload) => {
    return {
        type: 'POST/FETCH-SUCCESS',
        payload
    };
};
const fetchPostFailed= (payload) => {
    return {
        type: 'POST/FETCH-FAILED',
        payload
    };
};
export const countIncrementPerId= (payload) => {
    return {
        type: 'COUNT/ID/INCREMENT',
        payload
    };
};

export const fetchPostAsync = () => {
    return function(dispatch, getState) {
        dispatch(fetchPostStart())
        axios.get('https://my-json-server.typicode.com/irhamhqm/placeholder-shops/items')
        .then((res)=>{
        //     const temp1 = [...res.data];  
        //     const addKeyValue = temp1.map((object,index )=> {
        //     return {...object, index};
        // });
            
            dispatch(fetchPostSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(fetchPostFailed)
        })
    };
};