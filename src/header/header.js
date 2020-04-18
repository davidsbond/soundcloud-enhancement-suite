import {PageHeader} from '../common/common.js';
import {Log} from '../log/log.js';

/**
 * Removes all links to the discover page
 */
export function hideDiscoverLinks() {
  new PageHeader({
    onFound(elem) {
      Log.info('Hiding discover page');

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

/**
 * Adds a link to 'The Upload' playlist to the navigation bar
 */
export function addTheUploadLink() {
  new PageHeader({
    onFound(elem) {
      const link = '/discover/sets/new-for-you';
      const exists = elem.querySelector(`[href="${link}"]`);

      // If the link is already displayed, check if we're on the page, if so
      // add the selected class.
      if (exists !== null && exists !== undefined) {
        document.location.pathname === link ?
                exists.classList.add('selected') :
                exists.classList.remove('selected');
        return;
      }

      Log.info(`Adding 'The Upload' to the header`);

      const list = elem.querySelector('ul');
      const li = document.createElement('li');
      const btn = createHeaderButton('The Upload', link);

      list.appendChild(li);
      li.appendChild(btn);
    },
  });
}

/**
 * Creates a link styled like buttons in the header
 * @param {String} text
 * @param {String} href
 * @return {HTMLAnchorElement}
 */
function createHeaderButton(text, href) {
  const btn = document.createElement('a');
  btn.setAttribute('href', href);
  btn.setAttribute('class', 'header__navMenuItem');
  btn.innerText = text;

  return btn;
}
