"use client";

import { useEffect, useState } from "react";

type Project = {
	title: string;
	description: string;
	tech: string[];
	link?: string;
	github: string;
};

type ProjectWithCommit = Project & {
	latestCommitDate?: string | null;
};

type GitHubCommit = {
	commit: {
		committer: {
			date: string;
		};
	};
};

const projects: Project[] = [
	{
		title: "LiftLog (In Progress)",
		description:
			"A workout tracking app for logging lifts, organizing training history, and monitoring progress over time.",
		tech: ["Java", "Spring Boot", "TypeScript", "MySQL"],
		github: "https://github.com/robbieevans1/liftlog",
	},
	{
		title: "Web Scraper",
		description:
			"A web scraping tool for extracting structured data from websites and organizing the results for analysis.",
		tech: ["Python", "Beautiful Soup", "Requests"],
		github: "https://github.com/robbieevans1/webscrape",
	},
	{
		title: "UpNext",
		description:
			"UpNext is a stack-based task management app that helps users focus on what they should do next. Mandatory tasks stay at the top, while grouped recurring tasks rotate after completion so users avoid neglecting important tasks.",
		tech: ["Next.js", "TypeScript", "Tailwind CSS", "Postgres", "Prisma"],
		link: "https://upnext-liard.vercel.app/",
		github: "https://github.com/robbieevans1/upnext",
	},
	{
		title: "Robflix",
		description:
			"A movie streaming web application that uses films from the Internet Archive, allowing users to browse and watch free movies through a clean, Netflix-inspired interface.",
		tech: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Postgres",
			"Prisma",
			"Auth.js",
		],
		link: "https://robflix-three.vercel.app/",
		github: "https://github.com/robbieevans1/robflix",
	},
	{
		title: "Portfolio",
		description:
			"A portfolio website to display current projects I am working on.",
		tech: ["React", "TypeScript"],
		link: "https://robbieevans1.github.io/My-Portfolio/",
		github: "https://github.com/robbieevans1/My-Portfolio",
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

function getRepoInfo(githubUrl: string) {
	const url = new URL(githubUrl);
	const [owner, repo] = url.pathname.split("/").filter(Boolean);

	return { owner, repo };
}

async function getLatestCommitDate(githubUrl: string) {
	try {
		const { owner, repo } = getRepoInfo(githubUrl);

		const response = await fetch(
			`https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
			{
				headers: {
					Accept: "application/vnd.github+json",
				},
			}
		);

		if (!response.ok) {
			return null;
		}

		const commits: GitHubCommit[] = await response.json();

		return commits[0]?.commit.committer.date ?? null;
	} catch {
		return null;
	}
}

function formatRelativeDate(dateString: string) {
	const date = new Date(dateString);
	const now = new Date();

	const diffMs = date.getTime() - now.getTime();
	const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));

	const formatter = new Intl.RelativeTimeFormat("en", {
		numeric: "auto",
	});

	if (Math.abs(diffDays) < 1) {
		return "today";
	}

	if (Math.abs(diffDays) < 30) {
		return formatter.format(diffDays, "day");
	}

	const diffMonths = Math.round(diffDays / 30);

	if (Math.abs(diffMonths) < 12) {
		return formatter.format(diffMonths, "month");
	}

	const diffYears = Math.round(diffMonths / 12);

	return formatter.format(diffYears, "year");
}

const Projects = () => {
	const [projectsWithCommits, setProjectsWithCommits] =
		useState<ProjectWithCommit[]>(projects);

	useEffect(() => {
		async function loadCommitDates() {
			const updatedProjects = await Promise.all(
				projects.map(async (project) => {
					const latestCommitDate = await getLatestCommitDate(project.github);

					return {
						...project,
						latestCommitDate,
					};
				})
			);

			setProjectsWithCommits(updatedProjects);
		}

		loadCommitDates();
	}, []);

	return (
		<section className="section" id="projects">
			<h2>Projects</h2>

			<div className="project-grid">
				{projectsWithCommits.map((project) => (
					<article className="project-card" key={project.title}>
						<h3>{project.title}</h3>

						<p>{project.description}</p>

						<p className="last-commit">
							Last commit:{" "}
							{project.latestCommitDate
								? formatRelativeDate(project.latestCommitDate)
								: "Loading..."}
						</p>

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
