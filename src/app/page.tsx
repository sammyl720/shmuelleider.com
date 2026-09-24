import Link from "next/link";
import { featuredProjects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <section className="hero section-rule" aria-labelledby="hero-title">
        <div className="hero-kicker mono-label">
          <span>Full-stack developer</span>
          <span>Brooklyn, New York</span>
        </div>
        <div className="hero-grid">
          <div>
            <h1 id="hero-title">
              I build useful software <em>from the system outward.</em>
            </h1>
          </div>
          <div className="hero-summary">
            <p>
              I’m Shmuel Leider. I turn complex workflows into clear, durable products—across
              applied AI, the web, and developer tooling.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work</a>
              <Link className="text-link" href="/about">More about me <span>↗</span></Link>
            </div>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">
          <span>PRODUCT</span><i />
          <span>SYSTEMS</span><i />
          <span>CRAFT</span>
        </div>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <p className="mono-label">Selected work / 2024—Now</p>
          <h2 id="work-title">Built to be used.</h2>
          <p>Projects where product thinking, technical depth, and practical utility meet.</p>
        </div>

        <div className="project-list">
          {featuredProjects.map((project) => (
            <a
              className="project-row"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <span className="project-number mono-label">{project.number}</span>
              <div className="project-main">
                <p className="project-type mono-label">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <div className="section-cta">
          <Link className="text-link" href="/projects">View the full project index <span>→</span></Link>
        </div>
      </section>

      <section className="throughline section-rule" id="approach" aria-labelledby="throughline-title">
        <div className="throughline-intro">
          <p className="mono-label">The throughline</p>
          <h2 id="throughline-title">Curious enough to explore. Disciplined enough to finish.</h2>
        </div>
        <div className="quality-grid">
          <article>
            <span className="quality-number">01</span>
            <h3>Product-minded</h3>
            <p>I start with the person and the workflow, then choose the technology that makes the experience simpler.</p>
          </article>
          <article>
            <span className="quality-number">02</span>
            <h3>Systems-comfortable</h3>
            <p>Interfaces, APIs, data models, background jobs, security, and deployment all belong to the same product.</p>
          </article>
          <article>
            <span className="quality-number">03</span>
            <h3>Always learning</h3>
            <p>My work moves between TypeScript, C#, Rust, AI, and the web—guided by a genuine habit of building to understand.</p>
          </article>
        </div>
      </section>

      <section className="contact-band" aria-labelledby="contact-title">
        <p className="mono-label">Start a conversation</p>
        <h2 id="contact-title">Have a useful problem worth solving?</h2>
        <a className="contact-link" href="mailto:hello@shmuelleider.com">
          hello@shmuelleider.com <span aria-hidden="true">↗</span>
        </a>
      </section>
    </>
  );
}
