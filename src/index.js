import {removeReposts} from './stream/stream.js';
import {onPath} from './util/util.js';

// Paths
const PATH_STREAM = '/stream';

// Invoke functions on specific paths
onPath(PATH_STREAM, removeReposts);
