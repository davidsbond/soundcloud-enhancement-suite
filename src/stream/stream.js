import {ActivityFeed} from '../common/common.js';
import {Log} from '../log/log.js';

/**
 * Locates all elements in the document with a class matching CLASS_REPOST.
 * If any are found, their nearest ancestor element of class CLASS_LIST_ITEM
 * is removed from the DOM. This method uses a MutationObserver to react when
 * elements on the page change, specifically child nodes of elements with class
 * CLASS_STREAM_LIST.
 */
export function removeReposts() {
  new ActivityFeed({
    onFound() {
      Log.info('Repost removing enabled');
    },
    onChange(elem) {
      const repostSelector = '.soundContext__repost';
      const listItemSelector = '.soundList__item';
      const reposts = elem.querySelectorAll(repostSelector);

      if (!reposts || !reposts.length) {
        return;
      }

      reposts.forEach((rp) => {
        const item = rp.closest(listItemSelector);

        item.parentNode.removeChild(item);
      });

      Log.info(`Removed ${reposts.length} reposted items`);
    },
  });
}

