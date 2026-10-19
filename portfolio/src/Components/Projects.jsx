function Projects() {

  const projects = [
    {
      title: "DSA Tracker",
      description:
        "A React application to track DSA problems, difficulty levels and progress.",
      tech: "React • JavaScript • LocalStorage"
    },

    {
      title: "Weather App",
      description:
        "A responsive weather application that fetches real-time weather data using an API.",
      tech: "HTML • CSS • JavaScript • API"
    },

    {
      title: "Expense Tracker",
      description:
        "A simple expense management application for tracking income and expenses.",
      tech: "React • JavaScript • CSS"
    }
  ];


  return (
    <section className="section" id="projects">

      <h2 className="section-title">
        Projects
      </h2>

      <div className="projects-container">

        {projects.map((project) => (

          <div className="project-card" key={project.title}>

            <h3>{project.title}</h3>

            <p>
              {project.description}
            </p>

            <span className="tech">
              {project.tech}
            </span>

            <div className="project-links">

              <a href="#" target="_blank">
                GitHub
              </a>

              <a href="#" target="_blank">
                Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;