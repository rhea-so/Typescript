require('app-module-path').addPath(__dirname);
require('source-map-support').install();

import { Debug, LogTag } from 'modules/debugTool';

Debug.log(LogTag.NOWAY, 'Hello, World!');
