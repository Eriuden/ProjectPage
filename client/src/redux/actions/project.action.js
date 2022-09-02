import axios from "axios"

export const GET_ALL_PROJECTS = "GET_ALL_PROJECTS"
export const GET_PROJECT = "GET_PROJECT"
export const GET_PROJECT_ERRORS = "GET_PROJECT_ERRORS"
export const UPDATE_PROJECT = "UPDATE_PROJECT"
export const DELETE_PROJECT = "DELETE_PROJECT"


export const getAllProjects = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/projects`)
            .then((res) => {
                dispatch({ type: GET_ALL_PROJECTS, payload: res.data})
            })
            .catch((err) => console.log(err))
    }
}

export const getProject = () => {
    return (dispatch) => {
        return axios

            .get(`${process.env.REACT_APP_API_URL}api/projects`)
            .then((res) => {
                dispatch({ type: GET_PROJECT, payload: res.data})
            })
            .catch((err) => console.log(err))
    }
}

export const addProject = (data) => {
    return (dispatch) => {
        return axios
        .post(`${process.env.REACT_APP_API_URL}`, data)
        .then((res) => {
            if (res.data(errors)) {
                dispatch({type: GET_PROJECT_ERRORS, payload: res.data.errors})
            }
        })
    }
}

export const updateProject = (
    userId,
    picture,
    projectId,
    projectName,
    description,
    completion,
) => {
    return (dispatch) => {
        return axios({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/projects/${projectId}`,
            data: {  picture, projectName, description, completion},
        })
        .then((res) => {
            dispatch({
                type: UPDATE_PROJECT,
                payload: {picture, projectName, description, completion},
            })
        })
        .catch((err) => console.log(err))
    }
}

export const deleteProject = (
    projectId,
    picture,
    projectName,
    description,
    completion

) => {
    return (dispatch) => {
        return axios({
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}api/projects/${projectId}`,
            data: { picture, projectName, description, completion}
        })
        .then((res) => {
            dispatch({ type: DELETE_PROJECT, payload: { projectId} })
        })
        .catch((err) => console.log(err))
    }
}

