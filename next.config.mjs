// next.config.mjs
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	images: {
		domains: ['cdn-bucket.hb.ru-msk.vkcs.cloud'],
	},
};

export default nextConfig;
