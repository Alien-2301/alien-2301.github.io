import { useState } from 'react'
import type { Project } from '../data';

export function ProjectCard( {project}: {project:Project} ){
    const [open, setOpen] = useState(false);

    return(
        <div className='project-card'>
            <div className="project-cover">
                <div className='project-cover-grid'> </div>
                <span className ="project-category"> {project.category} </span>
            </div>

        <div className="project-body" style={{padding : "20px"}}>
            <h3>{project.title}</h3>

            <p className="project-desc">{project.shortDescription}</p>

            {/* Tech Stack in the form of Badge */}
            <div className="badges">
            {project.techStack.map((ts) => (
                <span className="badge" key={ts}>{ts}</span>
            ))}
            </div>

            {/* only shown when open is true */}
            {open && (
            <ul className="project-points">
                {project.points.map((point, index) => (
                <li style= {{marginBottom: "6px"}}key={ index }> { point } </li>
                ))}
            </ul>
            )}

            {/* Reversing State */}
            <div className="project-actions">
                <button className="link-button" onClick={() => setOpen(!open)}>
                    {open ? 'Hide details' : 'Show Details'}
                </button>

                {project.link && (
                    // "_blank" --> new tab
                    <a href = {project.link} target = "_blank"> GitHub Repo Link</a>
                )}
            </div>
        </div>
        </div>
    )
}