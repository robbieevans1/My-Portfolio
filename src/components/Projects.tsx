type Project = {
	title: string;
	description: string;
	tech: string[];
	link: string;
	github: string;
};

const projects: Project[] = [
	{
		title: "Nuuvi",
		description: "An app to check if a web domain is available",
		tech: ["Next.js", "Postgres", "Prisma"],
		link: "https://www.nuuvi.dev",
		github: "https://github.com/robbieevans1/nuuvi",
	},
	{
		title: "Coming Soon",
		description: "Coming soon.",
		tech: ["Next.js", "Postgres", "Prisma"],
		link: "#",
		github: "#",
	},
];

const Projects = () => {
	return (
		<section className="section" id="projects">
			<h2>Projects</h2>

			<div className="project-grid">
				{projects.map((project) => (
					<article className="project-card" key={project.title}>
						<h3>{project.title}</h3>
						<p>{project.description}</p>

						<div className="tech-list">
							{project.tech.map((item) => (
								<span key={item}>{item}</span>
							))}
						</div>

						<div className="project-links">
							<a href={project.link} target="_blank" rel="noopener noreferrer">
								Live Site
							</a>

							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Projects;
