import {
  MutationObserver,
} from '../util/util';

const CLASS_REPOST = '.soundContext__repost';
const CLASS_LIST_ITEM = '.soundList__item';
const CLASS_STREAM_LIST = '.stream__list';

/**
 * Locates all elements in the document with a class matching CLASS_REPOST.
 * If any are found, their nearest ancestor element of class CLASS_LIST_ITEM
 * is removed from the DOM. This method uses a MutationObserver to react when
 * elements on the page change, specifically child nodes of elements with class
 * CLASS_STREAM_LIST.
 */
export function removeReposts() {
  const list = document.querySelector(CLASS_STREAM_LIST);
  if (!list) {
    return;
  }

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
    childList: true,
    subtree: true,
  };

  mutationObserver.observe(list, options);
}

