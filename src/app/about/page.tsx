import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Profile",
  description: "About Shmuel Leider, a full-stack developer and product-minded builder in Brooklyn.",
  alternates: { canonical: "/about" },
};

const capabilities = [
  { label: "Product", value: "Prototyping, interaction design, workflow modeling" },
  { label: "Frontend", value: "React, Next.js, Angular, accessible interfaces" },
  { label: "Backend", value: "Node.js, APIs, PostgreSQL, Supabase, background jobs" },
  { label: "Applied AI", value: "Agents, MCP, retrieval, structured generation" },
  { label: "Beyond JS", value: "C#, .NET, Rust, Axum" },
];

export default function AboutPage() {
  return (
    <>
      <header className="page-hero about-hero section-rule">
        <p className="mono-label">Profile / Shmuel Leider</p>
        <div>
          <h1>I’m interested in the whole system—not just the screen.</h1>
          <p>
            I’m a full-stack developer in Brooklyn who likes turning rough ideas and complicated
            workflows into software that feels calm, coherent, and useful.
          </p>
        </div>
      </header>

      <section className="profile-story section-rule">
        <div className="profile-aside">
          <p className="mono-label">What drives the work</p>
          <div className="profile-motif" aria-hidden="true"><span>SL</span></div>
        </div>
        <div className="profile-copy">
          <p className="profile-lead">
            I learn by making. That instinct has led me from full-stack web applications to AI
            orchestration, media pipelines, developer tools, and systems work in C# and Rust.
          </p>
          <p>
            The technologies change; the standard does not. I care about clear models, durable
            boundaries, honest interfaces, and the unglamorous details that let a product keep
            working after the demo ends.
          </p>
          <p>
            I’m at my best when a problem crosses disciplines—when the interface, data, automation,
            and operational reality all need to make sense together.
          </p>
        </div>
      </section>

      <section className="capabilities" aria-labelledby="capabilities-title">
        <div className="capabilities-heading">
          <p className="mono-label">Working range</p>
          <h2 id="capabilities-title">Broad enough to connect the pieces.</h2>
        </div>
        <dl>
          {capabilities.map((item, index) => (
            <div key={item.label}>
              <dt><span>0{index + 1}</span>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="about-next section-rule">
        <p className="mono-label">Next</p>
        <h2>See how that thinking shows up in the work.</h2>
        <Link className="button button-primary" href="/projects">Open the project index →</Link>
      </section>
    </>
  );
}
