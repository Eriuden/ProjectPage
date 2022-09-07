import React from 'react'
import DeleteButton from './DeleteButton'


export default function ProjectCard(projectProps) {

  
  return (
    <div>
      <img src={projectProps.picture} alt="" />
      <h2>Nom : {projectProps.name}</h2>
      <h5>Description: {projectProps.description}</h5>
      <p>Comppletion:{projectProps.completion}</p>

      <DeleteButton/>

    </div>
  )
}
