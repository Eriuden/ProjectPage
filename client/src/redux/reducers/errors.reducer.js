import React from 'react'
import { GET_PROJECT_ERRORS } from '../actions/project.action'
import { GET_USER_ERRORS } from '../actions/user.action'

const initialState = { userError: [], projectError:{}}

export default function ErrorsReducer(state = initialState, action) {
  switch(action.type){
    case GET_PROJECT_ERRORS:
        return {
            projectError: action.payload,
            userError: []
        }
    case GET_USER_ERRORS:
        return {
            projectError: [],
            userError: action.payload,
        }
    default:
        return state
  }
}
