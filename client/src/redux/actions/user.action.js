import axios from "axios";

export const GET_USERS = "GET_USERS"
export const GET_USER = "GET_USER"
export const UPDATE_USER = "UPDATE_USER"
export const DELETE_USER = "DELETE_USER"

export const GET_USER_ERRORS = "GET_USER_ERRORS"

export const getAllUsers = () => {
    return(dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/users`)
            .then((res) => {
                dispatch({type: GET_USERS , payload: res.data})
            })
            .catch((err) => console.log(err))
    }
}

export const getUser = (uid) => {
    return(dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}/api/users/${uid}`)
            .then((res)=> {
                dispatch({type: GET_USER , payload: res.data})
            })
            .catch((err) => console.log(err))
    }
}

export const updateUser = (userId, name, password) => {
    return(dispatch) => {
        return axios({
            method:"put",
            url: `${process.env.REACT_APP_API_URL}/api/users` + userId,
            data: {name}
        })
            .then((res) => {
                dispatch({type: UPDATE_USER , payload: name, password})
            })
            .catch ((err) => console.log(err))
    }
}

export const deleteUser = (userId, name, email, password) => {
    return(dispatch) => {
        return axios({
            method:"delete",
            url: `${process.env.REACT_APP_API_URL}/api/users` + {userId},
            data: {name, email, password},
        })
        .then((res) => {
            dispatch({type: DELETE_USER, payload: { userId } })
        })
        .catch((err) => console.log(err))
    }
}