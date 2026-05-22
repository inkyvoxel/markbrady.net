import { DateTime } from "luxon";

export default function (eleventyConfig) {
	eleventyConfig.addFilter("isoDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toISO();
	});

	eleventyConfig.addPassthroughCopy({ "./src/robots.txt": "/robots.txt" });
	eleventyConfig.addPassthroughCopy({ "./src/_headers": "_headers" });

	return {
		dir: {
			input: "src",
		},
		passthroughFileCopy: true,
	};
}
