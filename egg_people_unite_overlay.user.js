// ==UserScript==
// @name         r/OMORI place template
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  r/omori template | OMORI WILL NOT SUCCUMB
// @author       forked from a whole bunch of other people 
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==
if (window.top !== window.self) {
    window.addEventListener('load', () => {
            document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
        (function () {
            const i = document.createElement("img");
            i.src = "https://github.com/Tonny2442/omoriplace/raw/main/new_overlay.png";
            i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 1000px;";
            console.log(i);
            return i;
        })())
 
    }, false);
 
}
