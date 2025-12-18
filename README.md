# 🔒 Chatbot Incognito

**Privacy-first userscripts for AI chat platforms**

Automatically enable incognito/private mode on popular AI chatbots to keep your conversations confidential.

---

## 💡 Motivation

Using AI chatbots on a shared computer? Your conversation history might reveal:
- Personal questions you'd rather keep private
- Work-related discussions with sensitive information
- Learning topics that feel embarrassing to share
- Creative ideas you're not ready to discuss

Just like many people set their browsers to incognito mode by default, **Chatbot Incognito** gives you the same privacy control for AI assistants. No more worrying about family members, roommates, or colleagues stumbling upon your chat history.

## ✨ Features

- **Automatic activation**: Incognito mode turns on automatically when you visit supported platforms
- **Multi-platform support**: Works across Claude, ChatGPT, and more (coming soon)
- **Browser compatible**: Supports Chrome, Firefox, Edge, and other major browsers
- **Transparent & trustworthy**: Open-source scripts you can review yourself
- **Zero data collection**: We don't track, store, or transmit any of your information
- **Lightweight**: Minimal performance impact

## 🚀 Quick Start

### 1. Install Tampermonkey

Tampermonkey is a userscript manager that runs our scripts safely in your browser.

- [Chrome Web Store](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
- [Safari Extension](https://apps.apple.com/app/tampermonkey/id1482490089)

### 2. Install Scripts

Click on the platform you use:

| Platform | Status | Install |
|----------|--------|---------|
| Claude.ai | ✅ Available | [Install Script](scripts/claude/auto-incognito.user.js) |
| ChatGPT | 🚧 Coming Soon | - |
| Google Gemini | 🚧 Coming Soon | - |
| Perplexity | 🚧 Coming Soon | - |

### 3. That's it!

Visit your AI chatbot platform and the script will automatically enable incognito mode. You'll see a confirmation in your browser console.

## 🔍 Why Tampermonkey?

We chose Tampermonkey as our foundation for several important reasons:

### Transparency
- **Open source scripts**: Every line of code is visible and reviewable
- **No black boxes**: Unlike browser extensions, you can see exactly what the script does
- **Community audited**: Anyone can verify our scripts don't collect or transmit data

### Security
- **Sandboxed execution**: Scripts run in isolated environments
- **Explicit permissions**: You control what sites scripts can access
- **No backend required**: Scripts run entirely in your browser

### Privacy Guarantee
- **Zero data collection**: We don't have servers, databases, or analytics
- **No external requests**: Scripts only interact with the AI platform's own interface
- **Local only**: Everything happens on your device

**You don't have to trust us blindly** - you can verify our claims by reading the source code yourself.

## 📖 How It Works

Our scripts work by:
1. Detecting when you visit a supported AI chat platform
2. Waiting for the page to fully load
3. Finding the incognito/private mode button in the interface
4. Automatically clicking it to enable privacy mode

The scripts are:
- **Non-invasive**: Only interact with the privacy toggle
- **Lightweight**: Minimal code, maximum efficiency
- **Fail-safe**: Won't break if the platform updates (just stops working until we update)

## 🛠️ Development

### Project Structure
```
chatbot-incognito/
├── scripts/
│   ├── claude/
│   │   └── auto-incognito.user.js
│   ├── chatgpt/
│   │   └── auto-incognito.user.js (coming soon)
│   └── gemini/
│       └── auto-incognito.user.js (coming soon)
├── docs/
│   └── development.md
└── README.md
```

### Contributing

We welcome contributions! Whether it's:
- Adding support for new platforms
- Improving existing scripts
- Reporting bugs
- Suggesting features

Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Testing Locally

1. Fork this repository
2. Make your changes
3. Install from your local file in Tampermonkey
4. Test on the target platform
5. Submit a pull request

## 🤝 Support

- **Bug reports**: [Open an issue](https://github.com/yourusername/chatbot-incognito/issues)
- **Feature requests**: [Start a discussion](https://github.com/yourusername/chatbot-incognito/discussions)
- **Questions**: Check our [FAQ](docs/FAQ.md)

## 📜 License

MIT License - See [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This project is not affiliated with, endorsed by, or connected to Claude (Anthropic), ChatGPT (OpenAI), or any other AI platform. We simply provide convenient automation scripts for features already available in these platforms.

## 🌟 Star Us!

If you find this project useful, please consider giving it a star ⭐ to help others discover it!

---

**Made with privacy in mind** 🔐
