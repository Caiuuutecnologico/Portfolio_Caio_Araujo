type Project = {
  title: string;
  description: string;
  technologies: string[];
  kind: "web" | "hardware";
};

const webProjects: Project[] = [
  {
    title: "Projeto web 01",
    description: "Uma breve apresentação do problema, da proposta e do que foi desenvolvido neste projeto acadêmico.",
    technologies: ["React", "TypeScript", "CSS"],
    kind: "web",
  },
  {
    title: "Projeto web 02",
    description: "Conte aqui os principais recursos da aplicação e o que você aprendeu durante o desenvolvimento.",
    technologies: ["Next.js", "TypeScript", "API"],
    kind: "web",
  },
  {
    title: "Projeto web 03",
    description: "Descreva em poucas linhas o objetivo do projeto e como a solução atende às necessidades propostas.",
    technologies: ["JavaScript", "HTML", "CSS"],
    kind: "web",
  },
];

const hardwareProject: Project = {
  title: "Projeto de hardware",
  description:
    "Apresente aqui o objetivo do projeto e explique como a solução funciona por completo. Este espaço maior permite detalhar os componentes físicos utilizados, as conexões entre eles, a lógica de funcionamento e a integração com o software — incluindo aspectos que não ficam visíveis no código-fonte.",
  technologies: ["Arduino", "C++", "Sensores"],
  kind: "hardware",
};

function GithubIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.68-3.75-1.32-3.75-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.72 1.15 1.72 1.15 1 .1.52 2.49 3.22 1.9.1-.72.39-1.22.7-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3 0 4.3-2.61 5.24-5.1 5.51.4.35.75 1.02.75 2.06V22c0 .3.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-card-${project.kind}`}>
      <div className="project-card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-card-bottom">
        <ul className="project-tags" aria-label="Tecnologias utilizadas">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <a
          className="github-button"
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          aria-label={`Código de ${project.title} no GitHub`}
        >
          <GithubIcon />
          <span>Código</span>
        </a>
      </div>
    </article>
  );
}

export default function ProjectSection() {
  return (
    <section className="projects-section" id="projetos" aria-labelledby="projects-title">
      <div className="projects-inner">
        <header className="projects-header">
          <p className="projects-eyebrow"><span /> TRABALHOS DA GRADUAÇÃO</p>
          <h2 id="projects-title">Projetos <span>acadêmicos</span></h2>
          <p className="projects-intro">
            Ideias que saíram da sala de aula e ganharam forma em projetos reais.
          </p>
        </header>

        <section className="project-category" aria-labelledby="web-projects-title">
          <div className="category-heading">
            <div>
              <span className="category-index">01 /</span>
              <h3 id="web-projects-title">Projetos web</h3>
            </div>
          </div>
          <div className="web-project-grid">
            {webProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="project-category hardware-category" aria-labelledby="hardware-projects-title">
          <div className="category-heading">
            <div>
              <span className="category-index">02 /</span>
              <h3 id="hardware-projects-title">Projetos de hardware</h3>
            </div>
          </div>
          <ProjectCard project={hardwareProject} />
        </section>
      </div>
    </section>
  );
}
