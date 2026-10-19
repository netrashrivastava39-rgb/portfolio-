function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-text">

        <p className="intro">
          Hi, I'm
        </p>

        <h1>
          Netra Shrivastav
        </h1>

        <h2>
          IT Student & Developer
        </h2>

        <p className="hero-description">
          I enjoy building web applications, solving
          DSA problems and exploring new technologies.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="btn">
            View Projects
          </a>

          <a href="#contact" className="btn secondary">
            Contact Me
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;