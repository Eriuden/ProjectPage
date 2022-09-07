import React from 'react'
import {useDispatch} from "react-redux"
import { deleteProject } from '../redux/actions/project.action'

export default function DeleteButton(projectId) {
  const dispatch = useDispatch()
  const endProject = () => {
    dispatch(deleteProject(projectId))
  }
  return (
    <div>
      <button onClick={endProject()}>Arrêter le projet</button>
    </div>
  )
}
