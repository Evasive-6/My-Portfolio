import React from 'react'

const skills = [
  { name: 'React', icon: null },
  { name: 'Vite', icon: null },
  { name: 'JavaScript', icon: '' },
  { name: 'CSS3', icon: '' }
]

const Home = () => {
  return (
    <>
      <header className="header-animated">
        <h1 className="animated-gradient-text">My React Portfolio</h1>
        <section className="about-me-section">
          <h2>About Me</h2>
          <p>
            I am a passionate React developer with experience in building modern, responsive web applications using React, Vite, and CSS. I enjoy creating clean, efficient, and user-friendly interfaces.
          </p>
        </section>
      </header>

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
    </>
  )
}

export default Home
