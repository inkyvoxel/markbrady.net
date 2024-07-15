export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "./src/robots.txt": "/robots.txt" });

  return {
    dir: {
      input: "src",
    },
    passthroughFileCopy: true,
  };
}
