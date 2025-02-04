"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							My name is Ali Nazery, and I am currently studying programming at the University of
							the People (UoPeople).
						</p>
						<p>
							{/* During my university years, I developed a deep passion for web programming, and I
							consistently engaged in learning new concepts and techniques in this field. */}
							While studying at university, I developed a deep passion for web programming and
							continually engaged in learning new concepts and techniques in this field
						</p>
						<p>My programming journey officially began in 2021 as a software programmer.</p>
						<p className="my-3.5">
							{/* I enjoy learning technologies that interest me, which is why I dedicated a significant
							amount of time to working with WordPress. */}
							I enjoy learning technologies that interest me, so I dedicated significant time to
							working with Programming, especially Web Development(front-end).
						</p>
						<p>
							{/* One day, I decided to try something new, and I started learning React. I was so
							excited to see how fast I can build a website with it, and how easy it is to maintain
							it. Consequently, I quickly learnt Next.js and I used it to build some company
							projects working in a team with a backend dev. */}
							One day, I decided to try something new and started learning React. Excited by how
							fast and easy it was to build and maintain websites, I quickly learned Next.js and
							used it to build company projects, collaborating with a backend developer.
						</p>
						<p className="my-3.5">
							{/* In december 2023, I had an opportunity to start working as a React developer for a
							company with the possibility of transitioning to mobile development. I was skeptical
							about it at first, but I decided to give it a try, and I don&lsquo;t regret it. Now, I
							thoroughly enjoy working with Flutter and Dart. */}
							In December 2023, I started working as a React developer with the possibility of
							transitioning to mobile development. Initially skeptical, I decided to give it a try
							and now thoroughly enjoy working with Reactjs and Nextjs.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
