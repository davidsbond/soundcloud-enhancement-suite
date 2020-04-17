/**
 * The ElementWatcher class is used to ensure a given element
 * exists on the page and react to when it is found or changed.
 */
class ElementWatcher {
  /**
   * Initialises a new instance of the ElementWatcher class.
   * A MutationObserver instance is used to determine
   * when the desired element has been added to the DOM.
   * @param {String} selector
   * @param {*} callbacks
   */
  constructor(selector, callbacks) {
    this.onChange = callbacks.onChange;
    this.onFound = callbacks.onFound;

    const options = {
      childList: true,
      subtree: true,
    };

    const body = document.querySelector('body');

    // Watch for changes to the body element. When we can locate the stream
    // list element within the body stop this observer
    const finder = new MutationObserver(() => {
      const list = body.querySelector(selector);
      if (!list) {
        return;
      }

      const elem = list;
      finder.disconnect();
      if (this.onFound) {
        this.onFound(elem);
      }

      // Once we've found the activity feed, set up a new observer
      // that will be invoked whenever elements within the activity feed
      // change.
      const elemWatcher = new MutationObserver(() => {
        if (this.onChange) {
          this.onChange(elem);
        }
      });

      elemWatcher.observe(list, options);
    });

    finder.observe(body, options);
  }
}

/**
 * The ActivityFeed class represents the activity feed on the stream
 * page of SoundCloud.
 */
export class ActivityFeed extends ElementWatcher {
  /**
   * Initialises a new instance of the ActivityFeed class
   * @param {*} callbacks
   */
  constructor(callbacks) {
    const selector = '.stream__list';
    super(selector, callbacks);
  }
}

/**
 * The PageHeader class represents the page header at the top of
 * the SoundCloud page
 */
export class PageHeader extends ElementWatcher {
  /**
   * Initialises a new instance of the PageHeader class
   * @param {*} callbacks
   */
  constructor(callbacks) {
    const selector = '.header__left';
    super(selector, callbacks);
  }
}


