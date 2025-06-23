import React from 'react'

const skills = [
  { name: 'Languages', icon: null , skills: "Python , C++"},
  { name: 'Frameworks & Libraries:', icon: null, skills: "React.js, Node.js, Express.js, MongoDB, TailwindCSS" },
  { name: 'Tools', icon: '',skills: "Git,Github,Bruno, Netlify,Render" },
  { name: 'Technologies', icon: '',skills: "JWT, REST APIs, Razorpay API" }
]

const Home = () => {
  return (
    <>
      <header className="header-animated">
        <h1 className="animated-gradient-text">About me</h1>
        <section className="about-me-section">
          <h2>Hi I am Albin Shiju</h2>
          <p>
            I am a passionate React developer with experience in building modern, responsive web applications using React, Vite, and CSS. I enjoy creating clean, efficient, and user-friendly interfaces.
          </p>
        </section>
      </header>

      <section className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-container">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card animated-skill-card">
              {skill.icon ? (
                <img src={skill.icon} alt={skill.name + ' icon'} className="skill-icon" />
              ) : (
                <div className="skill-placeholder">{skill.name}</div>
              )}
              <p>{skill.skills}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
