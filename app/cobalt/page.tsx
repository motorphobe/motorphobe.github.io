"use client";

import Image from "next/image";
import Nav from "@/app/components/Nav";
import Footer from "../components/Footer";
import { FiZap, FiSettings, FiClock, FiShield, FiCode, FiRefreshCw } from "react-icons/fi";
import Feature from "../components/Feature";
import { useEffect, useRef } from "react";

const features = [
	{
		icon: FiShield,
		title: "Smart Protection",
		description: "Advanced safety systems to protect your account while using automated features",
		color: "text-green-400",
	},
	{
		icon: FiClock,
		title: "Time Tracking",
		description: "Monitor your gameplay sessions and view detailed statistics of your progress",
		color: "text-purple-400",
	},
	{
		icon: FiSettings,
		title: "Customization",
		description: "Personalize every aspect of the mod to match your playstyle and preferences",
		color: "text-blue-400",
	},
	{
		icon: FiZap,
		title: "Optimization",
		description: "Enhanced performance and gameplay improvements for a smoother experience",
		color: "text-yellow-400",
	},
	{
		icon: FiCode,
		title: "Open Source",
		description: "Fully transparent development with active community contributions welcome",
		color: "text-pink-400",
	},
	{
		icon: FiRefreshCw,
		title: "Regular Updates",
		description: "Constant improvements and new features based on community feedback",
		color: "text-cyan-400",
	},
];

export default function Home() {
	const featuresRef = useRef<HTMLDivElement>(null);

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

		const featuresSection = featuresRef.current;
		if (featuresSection) {
			observer.observe(featuresSection);
		}

		return () => {
			if (featuresSection) {
				observer.unobserve(featuresSection);
			}
		};
	}, []);

	return (
		<>
			<title>Cobalt</title>
			<meta property="og:title" content="Cobalt - Hypixel SkyBlock Scripts" />
			<meta property="og:description" content="Simple and effective." />
			
			<Nav />
			<div id="home" className="flex min-h-screen flex-col items-center px-8 sm:px-4 lg:px-12 pt-30 sm:pt-20 lg:pt-24 bg-gradient-to-b from-[#000B18] to-[#0E0E10]">
				<main className="flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-4 lg:flex-row lg:justify-between lg:gap-6 min-h-[calc(100vh-200px)]">
					<div className="flex max-w-2xl flex-col gap-5">
						<h1 className="text-4xl tracking-tight font-[700] sm:text-5xl lg:text-6xl">
							Simple and <br />
							<span className="bg-gradient-to-r from-[#3D90D7] via-[#4794c9] to-[#7AC6D2] bg-clip-text text-transparent">
								Effective
							</span>
						</h1>
						<p className="text-base text-zinc-400 max-w-lg">
							A <strong>quality of life modification</strong> for{" "}
							<strong>Hypixel Skyblock</strong>, designed to enhance your{" "}
							<strong>gaming experience</strong> with powerful features and
							optimizations.
						</p>
						<div className="flex gap-4">
							<a className="rounded-full bg-[#3E90D6] hover:bg-[#2C7DC2] transition-colors px-7 py-2.5 text-white font-[525] hover:shadow-[inset_0_-7px_11px_#7AC6D2]/20">
								Download
							</a>
							<a className="rounded-full border border-zinc-800 hover:bg-zinc-800/20 transition-colors px-7 py-2.5 text-zinc-300 font-[525] hover:border-zinc-700">
								Coming Soon...
							</a>
						</div>
					</div>
					<div className="relative h-[320px] w-full max-w-lg lg:h-[440px]">
						<Image
							src="/minecraft-block.png"
							alt="A Minecraft Block"
							fill
							priority
							className="object-contain"
						/>
					</div>
				</main>
				<section id="features" className="w-full max-w-7xl mx-auto px-8 py-32 mt-20">
					<div ref={featuresRef} className="section-fade">
						<div className="text-center mb-16">
							<span className="px-3 py-1 border rounded-full shadow-[inset_0_-7px_11px_#7AC6D2]/20 text-[0.92rem] border-[#3D90D7]/60 flex text-white bg-black/20 backdrop-blur-md w-max mx-auto">
								Features
							</span>
							<h2 className="text-3xl font-bold mt-6">Everything you need</h2>
							<p className="text-zinc-400 mt-2">
								Enhance your Skyblock experience with powerful features
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{features.map((feature, index) => (
								<Feature key={index} {...feature} />
							))}
						</div>
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
}
