import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Project Index",
  description: "Selected software, AI, and developer-tooling projects by Shmuel Leider.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <header className="page-hero section-rule">
        <p className="mono-label">Project index / Selected repositories</p>
        <div>
          <h1>Experiments that became systems.</h1>
          <p>
            A curated cross-section of product work, open-source tools, and technical studies.
            Each one started with a question worth answering by building.
          </p>
        </div>
      </header>

      <section className="index-list" aria-label="Projects">
        {projects.map((project) => (
          <article className="index-project" key={project.title}>
            <span className="project-number mono-label">{project.number}</span>
            <div className="index-project-title">
              <p className="mono-label">{project.type}</p>
              <h2>{project.title}</h2>
            </div>
            <div className="index-project-detail">
              <p>{project.description}</p>
              <ul aria-label={`${project.title} technologies`}>
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="project-links">
                <a href={project.repo} target="_blank" rel="noreferrer">Repository ↗</a>
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer">Live site ↗</a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="github-band section-rule">
        <p className="mono-label">The wider archive</p>
        <p>More prototypes, learning projects, and earlier work live on GitHub.</p>
        <a className="button button-primary" href="https://github.com/sammyl720?tab=repositories" target="_blank" rel="noreferrer">
          Browse every repository ↗
        </a>
      </section>
    </>
  );
}
