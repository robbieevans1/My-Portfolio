type Project = {
	title: string;
	description: string;
	tech: string[];
	link?: string;
	github: string;
};

const projects: Project[] = [
	{
		title: "Robflix",
		description:
			"A movie streaming web application that uses films from the Internet Archive, allowing users to browse and watch free movies through a clean, Netflix-inspired interface.",
		tech: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres", "Prisma","Auth.js"],
		link: "https://robflix-three.vercel.app/",
		github: "https://github.com/robbieevans1/robflix",
	},
	{
		title: "Nuuvi",
		description:
			"A web application that helps users quickly check whether a domain name is available.",
		tech: ["Next.js", "Postgres", "Prisma"],
		link: "https://www.nuuvi.dev",
		github: "https://github.com/robbieevans1/nuuvi",
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
							{project.link && (
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
								>
									Live Site
								</a>
							)}

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
