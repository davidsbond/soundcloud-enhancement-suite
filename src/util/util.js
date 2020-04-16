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

    if (expected === '*' || expected === actual && actual !== lastPath) {
      cb();
    }

    lastPath = actual;
  });

  const body = document.querySelector('body');
  const config = {childList: true, subtree: true};
  observer.observe(body, config);
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
