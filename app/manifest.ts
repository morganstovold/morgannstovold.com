import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "Morgan Stovold",
		short_name: "MORGAN STOVOLD",
		description: "Full Stack Software Engineer",
		start_url: "/",
		display: "standalone",
		icons: [
			{
				src: "/favicon",
				sizes: "16x16",
				type: "image/png",
			},
			{
				src: "/icon",
				sizes: "32x32",
				type: "image/png",
			},
			{
				src: "/apple-icon",
				sizes: "180x180",
				type: "image/png",
			},
		],
	};
}
