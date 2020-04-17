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
  let lastPath = '';

  const observer = new MutationObserver(() => {
    let actual = window.location.pathname;
    if (actual.endsWith('/')) {
      actual = actual.slice(0, -1);
    }

    // If the path has actually changed and matches the expected path, invoke
    // the callback.
    if (actual !== lastPath && (expected === '*' || expected === actual)) {
      cb();
    }

    lastPath = actual;
  });

  // Elements within <head> change when we switch path. This was
  // chosen to minimise the amount of times we'll invoke the
  // MutationObserver.
  const head = document.querySelector('head');
  const config = {childList: true, subtree: true};
  observer.observe(head, config);
}

/**
 * Redirects the user to the given URI
 * @param {String} uri
 */
export function redirect(uri) {
  if (window.location.pathname !== uri) {
    window.stop();
    window.location.pathname = uri;
  }
}
