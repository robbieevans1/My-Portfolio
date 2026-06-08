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
		tech: ["Next.js", "Postpres", "Prisma"],
		link: "https://www.nuuvi.dev",
		github: "https://github.com/robbieevans1/nuuvi",
	},
	{
		title: "Project Currently in Witness Protection",
		description:
			"This project exists mostly in my imagination, but it has a great vibe.",
		tech: ["Next.js", "Postgres", "Prisma"],
		link: "#",
		github: "#",
	},
	{
		title: "Coming Soon-ish",
		description:
			"A groundbreaking app that will definitely be finished after I fix one more CSS issue.",
		tech: ["React", "TypeScript", "Coffee"],
		link: "#",
		github: "#",
	},
	{
		title: "Top Secret Side Quest",
		description:
			"Details are classified until I figure out what this actually does.",
		tech: ["Next.js", "Prisma", "Optimism"],
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

						<a href={project.link} target="_blank" rel="noopener noreferrer">
							View Project
						</a>
					</article>
				))}
			</div>
		</section>
	);
};

export default Projects;
