/**
 * Removes all links to the discover page
 */
export function hideDiscoverLinks() {
  // Remove direct links to the discover page
  document
      .querySelectorAll('a[href="/discover"]')
      .forEach((elem) => elem.parentElement.removeChild(elem));

  // Replace links to the home page to the stream page
  document
      .querySelectorAll('[href="/"]')
      .forEach((elem) => elem.setAttribute('href', '/stream'));
}
