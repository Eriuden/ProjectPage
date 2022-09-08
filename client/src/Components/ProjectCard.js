import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getProject } from '../redux/actions/project.action'
import DeleteButton from './DeleteButton'
import UpdateProjectForm from './UpdateProjectForm'


export default function ProjectCard(projectProps) {

  const [updateForm, setUpdateForm] = useState(false)

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getProject(project._id))
  })

  return (
    <div>
      <img src={projectProps.picture} alt="" />
      <h2>Nom : {projectProps.name}</h2>
      <h5>Description: {projectProps.description}</h5>
      <p>Comppletion:{projectProps.completion}</p>

      <DeleteButton/>

      <button onClick={setUpdateForm(true)}>Editer</button>

      {updateForm && (
        <UpdateProjectForm/>
        )}
      

    </div>
  )
}
