import React from 'react'
import { GET_USER, UPDATE_USER, DELETE_USER } from '../actions/user.action'

const initialState = {}

export default function UserReducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER:
            return action.payload 
        
        case UPDATE_USER:
            return {
                ...state,
                name:action.payload.name,
                picture:action.payload.picture,
                password:action.payload.password 
            }
        case DELETE_USER:
            return state.filter((user) => user._id !== action.payload.userId)
        
        default:
            return state
    }
}
