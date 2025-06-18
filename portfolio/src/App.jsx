import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
    { name: 'React', icon: reactLogo },
    { name: 'Vite', icon: viteLogo },
    { name: 'JavaScript', icon: '' },
    { name: 'CSS3', icon: '' }
  ]

  return (
    <>
      <header>
        <div>
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>My React Portfolio</h1>
      </header>

      <section className="counter-section">
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
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
            <div key={skill.name} className="skill-card">
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
            <div key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </>
  )
}

export default App
