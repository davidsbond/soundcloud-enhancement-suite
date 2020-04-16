import {
  MutationObserver,
} from '../util/util';

const CLASS_REPOST = '.soundContext__repost';
const CLASS_LIST_ITEM = '.soundList__item';

/**
 * Locates all elements in the document with a class matching CLASS_REPOST.
 * If any are found, their nearest ancestor element of class CLASS_LIST_ITEM
 * is removed from the DOM. This method uses a MutationObserver to react when
 * elements on the page change.
 */
export function removeReposts() {
  const mutationObserver = new MutationObserver(() => {
    const reposts = document.querySelectorAll(CLASS_REPOST);

    if (!reposts) {
      return;
    }

    reposts.forEach((rp) => {
      const item = rp.closest(CLASS_LIST_ITEM);

      item.parentNode.removeChild(item);
    });
  });

  const options = {
    attributes: false,
    childList: true,
    characterData: false,
    subtree: true,
  };

  mutationObserver.observe(document, options);
}

