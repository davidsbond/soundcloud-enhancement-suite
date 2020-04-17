import {PlayerControl} from '../common/common.js';

/**
 * Adds a button to the player that does a sick reload when you click it
 */
export function addReloadButton() {
  const player = new PlayerControl({
    onFound(elem) {
      const reloadPath = 'audio/reload.wav';
      const reload = new Audio(chrome.runtime.getURL(reloadPath));

      const btn = newReloadButton();
      btn.onclick = () => {
        if (!player.isPlaying()) {
          return;
        }

        player.toggle();
        reload.play().then(() => {
          player.previous();
        });
      };

      // Add the button to the player
      const elementsSelector = '.playControls__elements';
      const elements = elem.querySelector(elementsSelector);
      elements.insertBefore(btn, elements.childNodes[0]);
    },
  });
}

/**
 * Creates the DOM element for the reload button
 * @return {HTMLButtonElement}
 */
function newReloadButton() {
  const btn = document.createElement('button');

  btn.textContent = 'reload';
  btn.setAttribute('class', 'play-control');

  return btn;
}
