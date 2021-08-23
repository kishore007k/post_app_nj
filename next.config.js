// next.config.js
const withMDX = require("@next/mdx")({
	extensions: /\.(md|mdx)$/,
});
module.exports = withMDX({
	pageExtensions: ["js", "jsx", "md", "mdx"],
	webpack(config, options) {
		return config;
	},
});
