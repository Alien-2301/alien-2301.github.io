import { useState } from 'react'

import { projects } from "../data"
import { SectionHeader } from './SectionHeader'
import { ProjectCard } from './ProjectCard'



// use project Category as the only source of truth (use Flatmap for btn)
const categories = projects.flatMap((project) => project.category)
const filters = ['All', ...new Set(categories)] // I am confused by why set works but not array

console.log(projects)
console.log(categories)

export function Projects() {

    const [selected, setSelect] = useState('All');
    const shownProjects = projects.filter((project) => {
        if (selected == 'All') {
            return true;
        } else { return project.category.includes(selected);}
    })

    console.log("Shown Projects", shownProjects)

    return (
      <section id="projects" className="section section-alt">
        {/* Header */}
        <div className="container">
          <SectionHeader
            eyebrow="Selected work"
            title="Projects"
            text="Tap Show details on any card for specifics."
          />
        </div>

        {/* Filter  */}
        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={filter === selected ? "filter active" : "filter"}
              onClick={() => setSelect(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project-grid */}
        <div className="projects-grid">
          {shownProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    );
}
