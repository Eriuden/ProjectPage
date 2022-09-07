import React from 'react'
import { GET_PROJECT, UPDATE_PROJECT, DELETE_PROJECT } from '../actions/project.action'

const initialState = {}

export default function ProjectReducer(state = initialState, action) {
  switch(action.type) {
    case GET_PROJECT:
        return action.payload
    case UPDATE_PROJECT:
        return state.map((project) => {
            if (project.id === action.payload.projectId) {
                return {
                    ...project,
                    projectName: action.payload.projectName,
                    picture: action.payload.picture,
                    description: action.payload.description,
                    completion: action.payload.completion
                }
            } else return project
        })
    case DELETE_PROJECT:
        return state.filter((project) => 
            project._id !== action.payload.projectId
            )
  }
}
