export const MutationObserver =
        window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver;

/**
 * Executes the given callback if the window's current location has the
 * given path
 * @param {String} expected
 * @param {Function} cb
 */
export function onPath(expected, cb) {
  let actual = window.location.pathname;
  if (actual.endsWith('/')) {
    actual = actual.slice(0, -1);
  }

  if (expected === actual) {
    cb();
  }
}
