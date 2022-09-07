import React, {useEffect,useState} from "react";
import {useDispatch} from "react-redux"
import { getAllProjects } from "../redux/actions/project.action";
import ProjectCard from "./ProjectCard";

export default function ProjectForm() {

    const[ProjectsData, setProjectsData]=useState([])
    
    const dispatch=useDispatch()
    useEffect(()=> {
        dispatch(getAllProjects)
    })

  return (
    <div>
      <div>
        <form action="" className="my-4">

            <input type="text" className="border-2 border-black mx-2"
             placeholder="Nommez votre projet" id="search input" />
             <input type="textarea" className="border-2 border-black mx-2"
             placeholder="Décrivez le plus en détail ici" id="search input" />
             
        </form>
      </div>

      <div className="result">
        {ProjectsData
        .map((project)=>{
            return <ProjectCard key={project.id} props={project}/>
        })}
      </div>
    </div>
    
  )
}
