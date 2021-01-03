import { Debug, LogTag } from "../00_Utils/debugger";

describe('Debugger', function () {
	it('Logging', function (_done) {
		Debug.log('normal');
		Debug.log(LogTag.TEST, 'test');
		throw Error('error test');
		// done();
	});
});