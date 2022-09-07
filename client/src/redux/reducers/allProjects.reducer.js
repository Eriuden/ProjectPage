import React from 'react'
import { GET_ALL_PROJECTS } from '../actions/project.action'

const initialState = {}
export default function AllProjectsReducer(state = initialState, action) {
   switch (action.type) {
    case GET_ALL_PROJECTS:
        return action.payload
    default:
        return state
   }
}
