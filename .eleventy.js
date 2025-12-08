import { DateTime } from "luxon";

export default function (eleventyConfig) {
	eleventyConfig.addFilter("isoDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toISO();
	});

	eleventyConfig.addPassthroughCopy({ "./src/robots.txt": "/robots.txt" });

	return {
		dir: {
			input: "src",
		},
		passthroughFileCopy: true,
	};
}
