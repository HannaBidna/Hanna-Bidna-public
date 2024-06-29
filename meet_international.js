const autoReactions = {
    timer: null,
    validEmojis: ['💖', '👍', '🎉', '👏', '😂', '😮', '😢', '🤔', '👎'],

    startReacting(emoji, delay) {
        if (!this.validEmojis.includes(emoji)) {
            throw new Error(`Invalid emoji. Valid emojis are: ${this.validEmojis.join(', ')}`);
        }
        if (!Number.isInteger(delay) || delay < 0) {
            throw new Error('Delay must be a non-negative integer.');
        }

        this.ensureReactionsPaletteOpen();

        const clickEmoji = () => {
            const emojiButtonXPath = `//button[contains(@aria-label, '${emoji}') or contains(text(), '${emoji}')]`;
            const result = document.evaluate(
                emojiButtonXPath,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            );
            const emojiButton = result.singleNodeValue;

            console.log('Evaluating XPath for emoji:', emojiButtonXPath);
            console.log('Found emoji button:', emojiButton);

            if (!emojiButton) {
                console.error('Emoji button not found. Stopping reaction.');
                this.stopReacting();
                return;
            }
            emojiButton.click();

            // Check if the palette is still open
            if (!this.isReactionsPaletteOpen()) {
                console.error('Reactions palette closed. Stopping reaction.');
                this.stopReacting();
            }
        };

        this.timer = setInterval(clickEmoji, delay);
    },

    stopReacting() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
            console.log('Auto-reacting stopped.');
        }
    },

    ensureReactionsPaletteOpen() {
        const reactionsToggleXPath = `//button[contains(@aria-label, 'reaction') or contains(@aria-label, 'реакц') or contains(@aria-label, 'reak') or contains(@aria-label, 'reakt')]`;
        const result = document.evaluate(
            reactionsToggleXPath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        );
        const reactionsToggle = result.singleNodeValue;

        console.log('Ensuring reactions palette is open.');
        console.log('Found reactions toggle button:', reactionsToggle);

        if (reactionsToggle && !this.isReactionsPaletteOpen()) {
            reactionsToggle.click();
            // Adding a small delay to ensure the palette opens
            setTimeout(() => {
                if (!this.isReactionsPaletteOpen()) {
                    console.error('Failed to open reactions palette.');
                    this.stopReacting();
                }
            }, 500);
        }
    },

    isReactionsPaletteOpen() {
        const paletteXPath = `//div[contains(@aria-label, 'reaction') or contains(@aria-label, 'реакц') or contains(@aria-label, 'reak') or contains(@aria-label, 'reakt')]`;
        const result = document.evaluate(
            paletteXPath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        );
        const palette = result.singleNodeValue;

        console.log('Checking if reactions palette is open.');
        console.log('Found reactions palette:', palette);

        return palette && getComputedStyle(palette).display !== 'none';
    }
};

// Usage examples:
//autoReactions.startReacting('😂', 1000);
// autoReactions.stopReacting();
