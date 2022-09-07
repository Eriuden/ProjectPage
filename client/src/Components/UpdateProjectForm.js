import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateProject } from '../redux/actions/project.action'

export default function UpdateProjectForm(project) {

    //J'ai mis en true edit car sans lui, pas de formulaire !
    //pour les autres, leur usestate deviendra une string
    const [name, setName] = useState(false)
    const [pics, setPics] = useState(false)
    const [description, setDescription] = useState(false)
    const [completion, setCompletion] = useState(false)
    const [edit,setEdit] = useState(true)
    
    const dispatch = useDispatch()

    const editProject = (e) => {
        e.preventDefault()

        if (name || pics || description || completion) {
            dispatch(updateProject(project, name, pics, description, completion))
            setName("")
            setPics("")
            setDescription("")
            setCompletion("")
            setEdit(false)
            
        }
    }
  return (
    <div className='flex flex-col'>
    {
        edit && (
            <form action="" onSubmit={editProject}>
                <input type="text"
                name="name"
                onChange={(e) => setName(e.target.value)} />

                <input type="file"
                name="pics"
                onChange={(e) => setPics(e.target.value)} />

                <input type="text"
                name="description"
                onChange={(e) => setDescription(e.target.value)} />

                <input type="text"
                name="completion"
                onChange={(e) => setCompletion(e.target.value)} />

                <input type="submit" value ="valider les modifications" />
            </form>
        )
    }
      
    </div>
  )
}
