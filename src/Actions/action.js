export const GET_USER ='GET_USER'
export const GET_USER_BY_ID = 'GET_USER_BY_ID';
export const DELETE_USER ='DELETE_USER'

export const GET_USER_BY_ID_SUCCESS = 'GET_USER_BY_ID_SUCCESS';
export const GET_USER_BY_ID_FAILURE = 'GET_USER_BY_ID_FAILURE';
export const GET_USER_SUCCESS='GET_USER_SUCCESS';
export const DELETE_USER_BY_ID_SUCCESS='DELETE_USER_BY_ID_SUCCESS'
export const getUserFetch = ()=>({
    type: GET_USER
});
export const getUserbyId =(userId) =>({
    type : GET_USER_BY_ID,
    userId
});
export const deleteUserById =(Id) =>(
    {
    type : DELETE_USER,
    Id
});
