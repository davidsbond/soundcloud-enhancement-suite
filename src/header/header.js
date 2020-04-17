import {PageHeader} from '../common/common.js';

/**
 * Removes all links to the discover page
 */
export function hideDiscoverLinks() {
  new PageHeader({
    onfound(elem) {
      // Remove direct links to the discover page
      elem
          .querySelectorAll('a[href="/discover"]')
          .forEach((elem) => elem.parentElement.removeChild(elem));

      // Replace links to the home page to the stream page
      elem
          .querySelectorAll('[href="/"]')
          .forEach((elem) => elem.setAttribute('href', '/stream'));
    },
  });
}
