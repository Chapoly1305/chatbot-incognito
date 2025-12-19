// ==UserScript==
// @name         ChatGPT Auto Incognito
// @namespace    https://github.com/Chapoly1305/chatbot-incognito
// @version      1.0.0
// @description  Automatically enable temporary chat mode on ChatGPT for privacy
// @author       Chapoly1305
// @match        https://chatgpt.com/*
// @match        https://chat.openai.com/*
// @icon         https://chatgpt.com/favicon.ico
// @grant        none
// @license      MIT
// @homepage     https://github.com/Chapoly1305/chatbot-incognito
// @supportURL   https://github.com/Chapoly1305/chatbot-incognito/issues
// @updateURL    https://raw.githubusercontent.com/Chapoly1305/chatbot-incognito/main/scripts/chatgpt/auto-incognito.user.js
// @downloadURL  https://raw.githubusercontent.com/Chapoly1305/chatbot-incognito/main/scripts/chatgpt/auto-incognito.user.js
// ==/UserScript==

(function() {
    'use strict';

    function clickTemporaryButton() {
        // Try multiple selectors to find the temporary chat button
        const selectors = [
            'button[aria-label*="temporary chat" i]',
            'button[aria-label*="Turn off temporary chat" i]',
            '#conversation-header-actions button'
        ];

        for (const selector of selectors) {
            const button = document.querySelector(selector);
            if (button) {
                // Check if button text/aria-label indicates it's OFF (so we need to turn it ON)
                const ariaLabel = button.getAttribute('aria-label') || '';
                const buttonText = button.textContent || '';
                
                // Only click if it says "Turn off" which means it's currently ON
                // If it says "Turn on", we want to click it
                if (ariaLabel.toLowerCase().includes('turn off') || 
                    buttonText.toLowerCase().includes('turn off')) {
                    console.log('[ChatGPT Incognito] Temporary chat already active');
                    return true;
                }
                
                button.click();
                console.log('[ChatGPT Incognito] Temporary chat mode activated');
                return true;
            }
        }
        return false;
    }

    // Try after page load
    setTimeout(() => {
        if (!clickTemporaryButton()) {
            // Retry with MutationObserver if not found
            const observer = new MutationObserver(() => {
                if (clickTemporaryButton()) {
                    observer.disconnect();
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
            setTimeout(() => observer.disconnect(), 10000);
        }
    }, 1000);
})();
