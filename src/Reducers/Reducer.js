import { DELETE_USER_BY_ID_SUCCESS, GET_USER_BY_ID_SUCCESS, GET_USER_SUCCESS } from "../Actions/action";

export const userReducer =( state ={user:[]}, action)=>{
    switch (action.type){
case GET_USER_SUCCESS:
    console.log('put user in saga ?:-',action )

    return {...state,user:action.user}
        default:
        return state
    }

};

export const userReducerById =( state ={userById:{}}, action)=>{
    switch (action.type){
case GET_USER_BY_ID_SUCCESS:
    console.log('put userId in saga ?:-',action)

    return {...state, userById:action.userId}
        default:
        return state
    }
};

export const deleteReducerById =( state ={userById:{}}, action)=>{
    switch (action.type){
case DELETE_USER_BY_ID_SUCCESS:
    console.log('put userId in saga ?:-',action)

    return {...state, userById:action.userId}
        default:
        return state
    }
};
