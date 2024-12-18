export default function Aboutme() {
  return (
      <div className="container">

        <section className="section about-me">
        <h2>About Me</h2>

      
        <p>Hello! Iam a web developer with experience n JavaScript, TypeScript and Next.js 
          I enjoy building dynamic and interactive applications
        </p>
      </section>
 
     
      <section className="section skills">
        <h2>Skkils</h2>
        <ul className="skills-list">
          <li>Html & CSs</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>Next.js</li>
        </ul>
      </section>
 
      <section className="section projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Currency Converter</h3>
          <p> A web application that converts currency values based on real-time exchange rates</p>
          </div>
          <div className="project-card">
            <h3>Number gasing game </h3>
            <p>This is an interactive game where players must guess a secret number within a given range</p>
        </div>
      </section>

 
      <section className="section contact-info">
        <h2>Get in Touch</h2>
        <p>If you did like connect or have any queries , fell free to reach out</p>
      </section>
 </div>
);
}
