# Chatbot Incognito

Privacy-focused userscripts that automatically enable incognito/private mode on AI chat platforms.

## Features

- **Automatic activation** — Incognito mode enables automatically when visiting supported platforms
- **Multi-platform support** — Works with Claude, ChatGPT, Grok, and more
- **Cross-browser compatibility** — Supports Chrome, Firefox, Edge, and Safari
- **Open source** — All scripts are fully auditable
- **No data collection** — Runs entirely in your browser with no external requests
- **Lightweight** — Minimal performance impact

## Installation

### Prerequisites

Install [Tampermonkey](https://www.tampermonkey.net/) for your browser:

- [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
- [Safari](https://apps.apple.com/app/tampermonkey/id1482490089)

### Supported Platforms

| Platform | Status | Script |
|----------|--------|--------|
| Claude.ai | Available | [Install](scripts/claude/auto-incognito.user.js) |
| ChatGPT | Available | [Install](scripts/chatgpt/auto-incognito.user.js) |
| Grok | Available | [Install](scripts/grok/auto-incognito.user.js) |
| Google Gemini | Planned | — |
| Perplexity | Planned | — |

## How It Works

Each script:
1. Detects when you visit a supported AI chat platform
2. Waits for the page to fully load
3. Locates the incognito/private mode toggle
4. Automatically enables privacy mode

Scripts are non-invasive and only interact with the platform's existing privacy controls.

## Development

### Project Structure

```
chatbot-incognito/
├── scripts/
│   ├── claude/
│   │   └── auto-incognito.user.js
│   ├── chatgpt/
│   │   └── auto-incognito.user.js
│   ├── grok/
│   │   └── auto-incognito.user.js
│   └── gemini/
│       └── auto-incognito.user.js
├── docs/
│   └── development.md
└── README.md
```

### Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Local Testing

1. Fork this repository
2. Make your changes
3. Install the script from your local file in Tampermonkey
4. Test on the target platform
5. Submit a pull request

## Support

- **Issues**: [GitHub Issues](https://github.com/yourusername/chatbot-incognito/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/chatbot-incognito/discussions)

## License

MIT License — See [LICENSE](LICENSE) for details.

## Disclaimer

This project is not affiliated with, endorsed by, or connected to Anthropic, OpenAI, xAI, or any other AI platform. These scripts automate features already available in the respective platforms.
