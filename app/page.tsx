"use client";

import { FiGithub } from "react-icons/fi";
import { useEffect, useState, useRef } from "react";
import Repository from "./components/Repository";

interface Repository {
	name: string;
	description: string;
	html_url: string;
	stargazers_count: number;
	forks_count: number;
	language: string;
}

export default function Home() {
	const [repos, setRepos] = useState<Repository[]>([]);
	const [loading, setLoading] = useState(true);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await fetch(
					"https://api.github.com/users/motorphobe/repos",
					{
						headers: {
							Accept: "application/vnd.github.v3+json",
						},
					}
				);
				if (!response.ok) throw new Error("Failed to fetch");
				const data = await response.json();
				setRepos(
					data.sort(
						(a: Repository, b: Repository) =>
							b.stargazers_count - a.stargazers_count
					)
				);
			} catch (error) {
				console.error("Error fetching repos:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchRepos();
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate-fade-show");
					}
				});
			},
			{ threshold: 0.1 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex flex-col w-full gap-0">
				<section className="min-h-screen flex items-center justify-center px-8">
					<div className="flex flex-col gap-6 text-center max-w-2xl">
						<h1 className="text-4xl font-bold sm:text-3xl lg:text-4xl">
							Hey, I'm{" "}
							<span className="bg-gradient-to-r from-[#3D90D7] to-[#7AC6D2] bg-clip-text text-transparent">
								Nathan
							</span>
							{" "}👋
						</h1>
						<p className="text-base text-zinc-400">
							A 16 year old passionate developer.
						</p>
					</div>
				</section>

				<section className="min-h-screen flex flex-col items-center justify-center px-8 mb-3" ref={sectionRef}>
					<div className="w-full max-w-5xl">
						<div className="text-center mb-12">
							<span className="px-3 py-1 border rounded-full shadow-[inset_0_-7px_11px_#7AC6D2]/20 text-[0.92rem] border-[#3D90D7]/60 flex text-white bg-black/20 backdrop-blur-md w-max mx-auto">
								Projects
							</span>
							<h2 className="text-3xl font-bold mt-6">My Work</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{loading ? (
								<div className="text-zinc-400 text-center">
									Loading repositories...
								</div>
							) : repos.length > 0 ? (
								repos.map((repo, index) => (
									<Repository key={repo.name} {...repo} index={index} />
								))
							) : (
								<div className="text-zinc-400 text-center">
									No repositories found
								</div>
							)}
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
