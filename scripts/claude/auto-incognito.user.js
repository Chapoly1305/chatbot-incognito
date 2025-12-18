// ==UserScript==
// @name         Claude.ai Auto Incognito
// @namespace    https://github.com/Chapoly1305/chatbot-incognito
// @version      1.0.0
// @description  Automatically enable incognito mode on Claude.ai for privacy
// @author       Chapoly1305
// @match        https://claude.ai/*
// @icon         https://claude.ai/favicon.ico
// @grant        none
// @license      MIT
// @homepage     https://github.com/Chapoly1305/chatbot-incognito
// @supportURL   https://github.com/Chapoly1305/chatbot-incognito/issues
// @updateURL    https://raw.githubusercontent.com/Chapoly1305/chatbot-incognito/main/scripts/claude/auto-incognito.user.js
// @downloadURL  https://raw.githubusercontent.com/Chapoly1305/chatbot-incognito/main/scripts/claude/auto-incognito.user.js
// ==/UserScript==

(function() {
    'use strict';

    function clickIncognitoButton() {
        const button = document.querySelector('.fixed.right-3.z-header button');
        if (button) {
            button.click();
            console.log('[Claude Incognito] Incognito mode activated');
            return true;
        }
        return false;
    }

    // Try after page load
    setTimeout(() => {
        if (!clickIncognitoButton()) {
            // Retry with MutationObserver if not found
            const observer = new MutationObserver(() => {
                if (clickIncognitoButton()) {
                    observer.disconnect();
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
            setTimeout(() => observer.disconnect(), 10000);
        }
    }, 1000);
})();
