import Image from "next/image";
import React from "react";

export default function HeroPhoto() {
  const imageDetails = {
		src: "/assets/hero.png",
		width: "400",
		height: "400"
	};
	return (
		<div>
			<Image
				src={imageDetails.src}
				width={imageDetails.width}
				height={imageDetails.height}
				alt="Hero Photo"
			/>
		</div>
	);
}
