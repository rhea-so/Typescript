require('app-module-path').addPath(__dirname);
require('source-map-support').install();

import '00_Utils/debugger';

import Runtime from 'rhea-runtime';

async function main() {
	await Runtime.boot();

	Runtime.get('/', async (_req, res) => {
		res.json({
			code: 1,
			message: 'Hello, World!'
		});
	});

	await Runtime.open(); // .env에 PORT를 넣어주세요
	console.log('Server has started');
}

main().catch((error) => {
	console.error(error);
	process.exit(0);
});