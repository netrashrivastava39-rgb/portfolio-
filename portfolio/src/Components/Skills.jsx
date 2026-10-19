function Skills() {

  const skills = {
    "Languages": [
      "C++",
      "Java",
      "JavaScript"
    ],

    "Frontend": [
      "HTML",
      "CSS",
      "React",
      "Tailwind CSS"
    ],

    "Backend": [
      "Node.js",
      "Express.js"
    ],

    "Tools": [
      "Git",
      "GitHub",
      "VS Code"
    ],

    "DSA": [
      "Arrays",
      "Linked Lists",
      "Trees",
      "Graphs"
    ]
  };


  return (
    <section className="section" id="skills">

      <h2 className="section-title">
        Skills
      </h2>

      <div className="skills-container">

        {Object.entries(skills).map(
          ([category, skillList]) => (

          <div className="skill-card" key={category}>

            <h3>{category}</h3>

            <div className="skill-list">

              {skillList.map((skill) => (
                <span key={skill}>
                  {skill}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;