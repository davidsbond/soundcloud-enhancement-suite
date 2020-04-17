import {removeReposts} from './stream/stream.js';
import {hideDiscoverLinks} from './header/header.js';
import {onPath, redirect} from './util/util.js';
import {Log} from './log/log.js';

// Paths
const PATH_STREAM = '/stream';
const PATH_HOME = '/';
const PATH_DISCOVER = '/discover';
const PATH_ANY = '*';

Log.info('Initialising...');

// Invoke functions on specific paths
onPath(PATH_STREAM, removeReposts);
onPath(PATH_HOME, () => redirect(PATH_STREAM));
onPath(PATH_DISCOVER, () => redirect(PATH_STREAM));
onPath(PATH_ANY, hideDiscoverLinks);
