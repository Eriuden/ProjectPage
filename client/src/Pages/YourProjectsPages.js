import React,{useEffect} from 'react'
import ProjectCard from '../Components/ProjectCard'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getAllProjects } from '../redux/actions/project.action'
import { isEmpty } from '../utils'


export default function YourProjectsPages() {

  const projects = useSelector((state)=> state.AllProjectsReducer)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getAllProjects())
  })

  return (
    <div>

      <ul>

        {!isEmpty(projects) && projects.map((project) => {
          <ProjectCard
          project={projectProps}
          key={project._id}
          />
        })}

      </ul>
      
    </div>
  )
}
