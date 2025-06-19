import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
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

  const skills = [
    { name: 'React', icon: null },
    { name: 'Vite', icon: null },
    { name: 'JavaScript', icon: '' },
    { name: 'CSS3', icon: '' }
  ]

  return (
    <>
      <header className="header-animated">
        <h1 className="animated-gradient-text">My React Portfolio</h1>
      </header>

      <section className="counter-section">
        <div className="card animated-card">
          <button onClick={() => setCount((count) => count + 1)} className="animated-button">
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </section>

      <section className="skills-section">
        <h2>My React Expertise</h2>
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card animated-skill-card">
              {skill.icon ? (
                <img src={skill.icon} alt={skill.name + ' icon'} className="skill-icon" />
              ) : (
                <div className="skill-placeholder">{skill.name}</div>
              )}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.title} className="project-card animated-project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link animated-project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p className="read-the-docs">
          Explore my projects and skills with cool animations!
        </p>
      </footer>
    </>
  )
}

export default App
