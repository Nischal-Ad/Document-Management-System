// webpack.config.js
import FlowbitePlugin from 'flowbite/plugin';

export default {
	content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [new FlowbitePlugin()],
};
