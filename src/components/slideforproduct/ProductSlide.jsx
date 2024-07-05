import React, { Children } from 'react'
import "./productslide.css"
import { projects } from '../../data.js'
import ProjectCard from '../productCard/ProjectsCard.jsx'




const ProductSlide = () => {
  
  return (
    <div className='slidep'>
        <div className="containersp">
        {projects.map(project=>(
          <ProjectCard item={project} key={project.id}/>
        ))}
        </div>
    </div>
          
)}

export default ProductSlide