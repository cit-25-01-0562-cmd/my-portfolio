import './App.css'
import ThreeScene from "./ThreeScene";
function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      
<header className="navbar">
  <a href="#home" className="logo">
    Rashini Lakshila
  </a>

  <nav>
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#education">Education</a>
    <a href="#skills">Skills</a>
    <a href="#portfolio">Projects</a>
    <a href="#artworks">Artworks</a>
    <a href="#contact">Contact</a>
  </nav>
</header>


      {/* HOME */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Hello, I'm Rashini Lakshila</h1>
          <p>IT Student | Software Engineering Enthusiast | Artist</p>
          <a href="#portfolio" className="hero-button">
            Explore My Work
          </a>
        </div>

        <div className="hero-image">
          <div className="hero-image">
  <ThreeScene />
</div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="section-heading">
          <h2>About Me</h2>
          <p>
            A little introduction about my journey,
            interests and passions.
          </p>
        </div>

        <div className="about-content">
          <p>
            I am an IT student and Software Engineering
            undergraduate with an interest in technology,
            software development and creative design.
            Alongside my technical journey, I enjoy creating
            pencil portraits and exploring different forms of art.
          </p>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" id="education">
        <div className="section-heading">
          <h2>Education</h2>
          <p>My academic journey</p>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <h3>Bachelor of Information Technology</h3>
            <p>University of Colombo</p>
            <span>Undergraduate</span>
          </div>

          <div className="info-card">
            <h3>BSc in Software Engineering</h3>
            <p>SLTC Research University</p>
            <span>Undergraduate</span>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section" id="skills">
        <div className="section-heading">
          <h2>My Skills</h2>
          <p>Technical knowledge and creative abilities</p>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <h3>Technical Skills</h3>
            <ul>
              <li>Java</li>
              <li>React.js</li>
              <li>Spring Boot</li>
              <li>PostgreSQL</li>
              <li>UI/UX Design</li>
              <li>Figma</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>Creative Skills</h3>
            <ul>
              <li>Pencil Portrait Drawing</li>
              <li>Traditional Art</li>
              <li>Creative Illustration</li>
              <li>Design and Creativity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOFTWARE PROJECTS */}
      <section className="section" id="portfolio">
        <div className="section-heading">
          <h2>Software Projects</h2>
          <p>Some of the projects I have worked on</p>
        </div>

        <div className="project-grid">

          <div className="project-card">
            <div className="project-image">
              Project Preview
            </div>

            <h3>Payroll Management System</h3>

            <p>
              A full-stack payroll management system developed
              with a Spring Boot backend and React.js frontend,
              featuring 3D animations and a PostgreSQL database.
            </p>

            <div className="tags">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>React.js</span>
              <span>PostgreSQL</span>
            </div>

            <div className="project-links">
              <a
                href="https://payroll-management-system-sage.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/cit-25-01-0562-cmd/Payroll_Management_System"
                target="_blank"
                rel="noreferrer"
              >
                Frontend Code
              </a>

              <a
                href="https://github.com/cit-25-01-0562-cmd/Payroll_Management_Backend"
                target="_blank"
                rel="noreferrer"
              >
                Backend Code
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              Project Preview
            </div>

            <h3>Vehicle Management System</h3>

            <p>
              A Java-based vehicle management application
              developed using Object-Oriented Programming
              concepts as a practical software development project.
            </p>

            <div className="tags">
              <span>Java</span>
              <span>OOP</span>
            </div>
          </div>

        </div>
      </section>

      {/* ART GALLERY */}
      <section className="section" id="artworks">
        <div className="section-heading">
          <h2>My Artworks</h2>
          <p>
            I enjoy creating realistic portraits,
            pencil drawings and unique creative designs.
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-placeholder">Artwork 01</div>
          <div className="gallery-placeholder">Artwork 02</div>
          <div className="gallery-placeholder">Artwork 03</div>
          <div className="gallery-placeholder">Artwork 04</div>
          <div className="gallery-placeholder">Artwork 05</div>
          <div className="gallery-placeholder">Artwork 06</div>
        </div>
      </section>

      {/* DESIGNS & COMMISSIONS */}
      <section className="section" id="commissions">
        <div className="section-heading">
          <h2>Designs & Commissions</h2>
          <p>Creative work and custom artwork services</p>
        </div>

        <div className="info-grid">
          <div className="info-card">
            <h3>Creative Designs</h3>
            <p>
              Exploring creative ideas through visual
              design and artistic expression.
            </p>
          </div>

          <div className="info-card">
            <h3>Custom Commissions</h3>
            <p>
              Personalized portrait artwork created
              based on individual requests.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-heading">
          <h2>Let's Connect</h2>
          <p>
            Feel free to get in touch with me
            for collaborations, projects or artwork.
          </p>
        </div>

        
<div className="contact-links">
  <a href="mailto:lakshilarashini@gmail.com">
    Email Me
  </a>

  <a
    href="https://www.linkedin.com/in/rashini-lakshila-a03828277/?lipi=urn%3Ali%3Apage%3Ad_flagship3_creator_analytics_grow_performance%3B2q65PyhqQwGwlPCCfKjgqw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>

  <a
    href="https://www.facebook.com/rashini.lakshila"
    target="_blank"
    rel="noopener noreferrer"
  >
    Facebook
  </a>

  <a
    href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Flakshilarashini%3Ffbclid%3DIwZXh0bgNhZW0CMTAAcGRvZgVicmlkETEwQTFUWU0xTWJNWVJSV3M4c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHyVzQgC94BCvUWIM33i6KVdC9iwnWC8msRNsak9bMOsnANtuZ9geHI9QrlPm_aem_f9VH9qSsX9-UEaef3-DLmQ&h=AUA7JYg8KJzpdixCxyIA7YFb30dFXwm2i6n_5MFb3gdLMhULWPj0yGOllBQKD0kgVOSLsoGhYy1l5E2Xv49ytxX5XCQiMt9ayVm6Ovjp5DVij4Bpt8vNZTEEDt2rR12ZVZ11"
    target="_blank"
    rel="noopener noreferrer"
  >
    Instagram
  </a>
</div>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Rashini Lakshila. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App
