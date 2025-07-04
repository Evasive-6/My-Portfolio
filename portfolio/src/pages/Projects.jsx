import React from 'react'

const projects = [
  {
    title: 'Project One',
    description: 'A cool React project demonstrating hooks and state management.',
    link: 'https://github.com/user/project-one'
  },
  {
    title: 'Project Two',
    description: 'An advanced React app with routing and context API.',
    link: 'https://github.com/user/project-two'
  },
  {
    title: 'Project Three',
    description: 'A portfolio website built with React and Vite.',
    link: 'https://github.com/user/project-three'
  }
]

const Projects = () => {
  return (
    <section className="projects-section">
      {/* Floating decorative shapes */}
      <div className="floating-shape floating-shape1"></div>
      <div className="floating-shape floating-shape2"></div>
      <div className="floating-shape floating-shape3"></div>

      <h2 className="animated-gradient-text">My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.title} className="project-card animated-project-card">
            <h3 className="animated-gradient-text">{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link animated-project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
