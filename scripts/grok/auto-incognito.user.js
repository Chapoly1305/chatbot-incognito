// ==UserScript==
// @name         Grok Auto Private
// @namespace    https://github.com/Chapoly1305/chatbot-incognito
// @version      1.0.0
// @description  Automatically enable private chat mode on Grok for privacy
// @author       Chapoly1305
// @match        https://grok.com/*
// @icon         https://grok.com/favicon.ico
// @grant        none
// @license      MIT
// @homepage     https://github.com/Chapoly1305/chatbot-incognito
// @supportURL   https://github.com/Chapoly1305/chatbot-incognito/issues
// @updateURL    https://raw.githubusercontent.com/Chapoly1305/chatbot-incognito/main/scripts/grok/auto-incognito.user.js
// @downloadURL  https://raw.githubusercontent.com/Chapoly1305/chatbot-incognito/main/scripts/grok/auto-incognito.user.js
// ==/UserScript==

(function() {
    'use strict';

    function clickPrivateButton() {
        // Try multiple selectors to find the private chat button
        const selectors = [
            'a[href="/c#private"]',
            'a[aria-label*="Private Chat" i]',
            'a[data-testid*="private" i]'
        ];

        for (const selector of selectors) {
            const button = document.querySelector(selector);
            if (button) {
                // Check if we're already on the private chat page
                if (window.location.hash === '#private') {
                    console.log('[Grok Private] Private chat already active');
                    return true;
                }
                
                button.click();
                console.log('[Grok Private] Private chat mode activated');
                return true;
            }
        }
        return false;
    }

    // Try after page load
    setTimeout(() => {
        if (!clickPrivateButton()) {
            // Retry with MutationObserver if not found
            const observer = new MutationObserver(() => {
                if (clickPrivateButton()) {
                    observer.disconnect();
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
            setTimeout(() => observer.disconnect(), 10000);
        }
    }, 1000);
})();
