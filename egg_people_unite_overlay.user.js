// ==UserScript==
// @name         r/OMORI Place Overlay
// @namespace    http://tampermonkey.net/
// @version      3.7
// @description  Keep the canvas beautiful!
// @author       FORKED FROM R/ROCKETLEAGUE! | Adapted by u/kylomorales for r/RocketLeague, Original author oralekin from osu! /r/osuplace, Rocket League template by u/WestonHawk
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/Tonny2442/omoriplace/raw/main/egg_people_unite_overlay.user.js
// @downloadURL  https://github.com/Tonny2442/omoriplace/raw/main/egg_people_unite_overlay.user.js
// @grant        none
// OMORI WILL NOT SUCCUMB!
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
