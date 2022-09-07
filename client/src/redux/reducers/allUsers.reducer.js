import React from 'react'
import { GET_USERS } from '../actions/user.action'

const initialState = {}


export default function AllUsersReducer(state = initialState, action) {
  switch(action.type) {
    case GET_USERS:
        return action.payload 
    default:
        return state
  }
}
